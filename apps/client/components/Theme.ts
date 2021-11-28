import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color']
    }
  }

  interface Palette {
    namhae: Palette['primary']
  }
  interface PaletteOptions {
    namhae: PaletteOptions['primary']
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: '#fbca5a',
      main: '#ffd02c',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#92dbaa',
    },
    namhae: {
      main: '#0b4e92',
    },
  },
  typography: {
    fontFamily: '"GmarketSansMedium", "Roboto", "Helvetica", "Arial", sans-serif',
  },
})
