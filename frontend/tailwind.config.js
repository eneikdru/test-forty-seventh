/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'on-surface-variant': '#45464d',
        'on-tertiary-container': '#98805d',
        'on-secondary': '#ffffff',
        'primary-fixed-dim': '#bec6e0',
        'tertiary': '#000000',
        'surface-container-lowest': '#ffffff',
        'tertiary-container': '#271901',
        'tertiary-fixed-dim': '#dec29a',
        'outline-variant': '#c6c6cd',
        'outline': '#76777d',
        'on-tertiary-fixed': '#271901',
        'on-error': '#ffffff',
        'tertiary-fixed': '#fcdeb5',
        'on-tertiary': '#ffffff',
        'background': '#f7f9fb',
        'error': '#ba1a1a',
        'on-background': '#191c1e',
        'surface-container-highest': '#e0e3e5',
        'error-container': '#ffdad6',
        'primary-fixed': '#dae2fd',
        'inverse-primary': '#bec6e0',
        'on-secondary-container': '#54647a',
        'surface-container-low': '#f2f4f6',
        'secondary': '#505f76',
        'secondary-container': '#d0e1fb',
        'on-primary-fixed': '#131b2e',
        'surface-bright': '#f7f9fb',
        'surface-dim': '#d8dadc',
        'on-secondary-fixed-variant': '#38485d',
        'inverse-on-surface': '#eff1f3',
        'primary-container': '#131b2e',
        'surface-container': '#eceef0',
        'surface-tint': '#565e74',
        'on-surface': '#191c1e',
        'primary': '#000000',
        'on-primary-container': '#7c839b',
        'on-primary': '#ffffff',
        'inverse-surface': '#2d3133',
        'surface-variant': '#e0e3e5',
        'secondary-fixed': '#d3e4fe',
        'on-secondary-fixed': '#0b1c30',
        'on-primary-fixed-variant': '#3f465c',
        'on-error-container': '#93000a',
        'secondary-fixed-dim': '#b7c8e1',
        'surface-container-high': '#e6e8ea',
        'surface': '#f7f9fb',
        'on-tertiary-fixed-variant': '#574425'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem'
      },
      spacing: {
        'container-margin': '16px',
        'gutter': '16px',
        'unit': '4px',
        'density-comfortable': '16px',
        'density-compact': '8px'
      },
      fontFamily: {
        'body-md': ['Hanken Grotesk', 'sans-serif'],
        'headline-md': ['Hanken Grotesk', 'sans-serif'],
        'label-caps': ['Hanken Grotesk', 'sans-serif'],
        'title-sm': ['Hanken Grotesk', 'sans-serif'],
        'display-lg': ['Hanken Grotesk', 'sans-serif'],
        'label-code': ['JetBrains Mono', 'monospace'],
        'body-sm': ['Hanken Grotesk', 'sans-serif']
      },
      fontSize: {
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }],
        'title-sm': ['18px', { lineHeight: '24px', fontWeight: '500' }],
        'display-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'label-code': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '500' }],
        'body-sm': ['12px', { lineHeight: '16px', fontWeight: '400' }]
      }
    }
  },
  plugins: []
};
