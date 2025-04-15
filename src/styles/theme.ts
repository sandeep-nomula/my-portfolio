export const theme = {
  colors: {
    primary: '#0D1117', // Deep dark background for a modern look
    secondary: '#161B22', // Slightly lighter for subtle contrast
    accent: '#58A6FF', // Professional blue for highlights
    light: '#F0F6FC', // Soft white for light elements
    text: '#C9D1D9', // Muted white for readable text
    textLight: '#E6EDF3', // Slightly brighter for emphasis
    textDark: '#0D1117', // Matches the primary background
    glass: {
      background: 'rgba(240, 246, 252, 0.08)', // Subtle frosted glass effect
      border: 'rgba(240, 246, 252, 0.2)', // Light border for glass elements
      card: 'rgba(13, 17, 23, 0.3)', // Darker glass card for depth
    },
    gradient: {
      main: 'linear-gradient(135deg, #0D1117 0%, #161B22 100%)', // Smooth gradient for backgrounds
      accent: 'linear-gradient(135deg, #58A6FF 0%, #79C0FF 100%)', // Vibrant gradient for accents
      glass: 'linear-gradient(135deg, rgba(240, 246, 252, 0.1) 0%, rgba(240, 246, 252, 0.05) 100%)', // Subtle glass gradient
    },
    overlay: {
      light: 'rgba(240, 246, 252, 0.15)', // Light overlay for subtle highlights
      dark: 'rgba(13, 17, 23, 0.4)', // Darker overlay for contrast
    }
  },
  fonts: {
    body: "'Inter', sans-serif", // Clean and modern font for body text
    heading: "'Poppins', sans-serif", // Professional font for headings
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease', // Smooth transitions for UI interactions
  },
};

export type Theme = typeof theme;
