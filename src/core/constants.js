import { createMuiTheme } from 'material-ui/styles'

export const API_URL = 'https://mock-rest.effco.net/blockchain'
export const API_MOCK_URL = 'https://mock-rest.effco.net/blockchain'

export const appName = 'Vacanthomes.ie'

// https:/material.io/color
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#453D2E',
      dark: '#002f6c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#7c43bd',
      main: '#4a148c',
      dark: '#12005e',
      contrastText: '#ffff'
    }
  }
})
