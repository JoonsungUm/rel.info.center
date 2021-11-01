import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#fbca5a',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#9acc72',
    },
  },
})
