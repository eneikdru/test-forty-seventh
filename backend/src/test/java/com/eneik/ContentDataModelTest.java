package com.eneik;

import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@Testcontainers(disabledWithoutDocker = true)
public class ContentDataModelTest {

    @Container
    public static PostgreSQLContainer<?> postgresContainer = new PostgreSQLContainer<>("postgres:15-alpine")
            .withDatabaseName("testdb")
            .withUsername("testuser")
            .withPassword("testpassword");

    @BeforeAll
    public static void setUp() {
        Flyway flyway = Flyway.configure()
                .dataSource(postgresContainer.getJdbcUrl(), postgresContainer.getUsername(), postgresContainer.getPassword())
                .locations("filesystem:src/main/resources/db/migration")
                .load();
        flyway.migrate();
    }

    @Test
    public void testContentLifecycleAndAuditLog() throws SQLException {
        try (Connection conn = DriverManager.getConnection(postgresContainer.getJdbcUrl(), postgresContainer.getUsername(), postgresContainer.getPassword())) {
            UUID contentId = UUID.fromString("00000000-0000-0000-0000-000000000001");
            UUID auditLogId = UUID.fromString("00000000-0000-0000-0000-000000000002");

            // Insert a draft record
            try (PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO content_items (id, type, status, data) VALUES (?, 'material', 'draft', '{\"title\": \"Test Material\"}')"
            )) {
                stmt.setObject(1, contentId);
                stmt.executeUpdate();
            }

            // Verify the status is draft
            try (PreparedStatement stmt = conn.prepareStatement(
                    "SELECT status FROM content_items WHERE id = ?"
            )) {
                stmt.setObject(1, contentId);
                try (ResultSet rs = stmt.executeQuery()) {
                    assertTrue(rs.next());
                    assertEquals("draft", rs.getString("status"));
                }
            }

            // Perform atomically-guarded update
            try (PreparedStatement stmt = conn.prepareStatement(
                    "UPDATE content_items SET status = 'published' WHERE id = ? AND status = 'draft'"
            )) {
                stmt.setObject(1, contentId);
                int updatedRows = stmt.executeUpdate();
                assertEquals(1, updatedRows, "Exactly one row should be updated during optimistic lock transition");
            }

            // Insert audit log
            try (PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO content_audit_log (id, content_item_id, previous_status, new_status, action_type) VALUES (?, ?, 'draft', 'published', 'publish')"
            )) {
                stmt.setObject(1, auditLogId);
                stmt.setObject(2, contentId);
                stmt.executeUpdate();
            }

            // Verify the audit log was inserted
            try (PreparedStatement stmt = conn.prepareStatement(
                    "SELECT new_status FROM content_audit_log WHERE id = ?"
            )) {
                stmt.setObject(1, auditLogId);
                try (ResultSet rs = stmt.executeQuery()) {
                    assertTrue(rs.next());
                    assertEquals("published", rs.getString("new_status"));
                }
            }
        }
    }
}
