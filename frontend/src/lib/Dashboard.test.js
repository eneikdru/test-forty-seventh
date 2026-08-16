import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Dashboard from './Dashboard.svelte';

describe('Dashboard component', () => {
  it('renders total materials count and health score correctly', () => {
    render(Dashboard, {
      props: {
        totalItems: 12450,
        activeItems: 11800,
        healthScore: 92
      }
    });

    expect(screen.getByText('12,450')).toBeTruthy();
    expect(screen.getByText('11,800')).toBeTruthy();
    expect(screen.getByText('92%')).toBeTruthy();
  });

  it('renders stale content warnings list', () => {
    render(Dashboard);

    expect(screen.getByText('Product Descriptions')).toBeTruthy();
    expect(screen.getByText('45 items')).toBeTruthy();
    expect(screen.getByText('Inventory Levels')).toBeTruthy();
    expect(screen.getByText('12 items')).toBeTruthy();
    expect(screen.getByText('Image Assets')).toBeTruthy();
    expect(screen.getByText('8 items')).toBeTruthy();
  });

  it('provides accessible buttons for interactive elements', () => {
    render(Dashboard);

    const searchBtn = screen.getByRole('button', { name: /search catalog materials/i });
    expect(searchBtn).toBeTruthy();

    const staleButtons = screen.getAllByRole('button', { name: /items/i });
    expect(staleButtons.length).toBeGreaterThanOrEqual(3);
  });
});
