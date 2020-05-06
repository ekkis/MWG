
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#1976d3',
      dark: '#115293',
      contrastText: '#fff'
    },
    secondary: {
      light: '#555e6c',
      main: '#b20000',
      dark: '#1e2532',
      contrastText: '#fff'
    },
    error: {
      light: '#ff3333',
      main: '#ff0000',
      dark: '#b20000',
      contrastText: '#fff'
    },
    background: {
      main: '#000000',
      brownLight: '#292929',
      blueLight: '#283442'
    },
    button: {
      main: '#228dfc',
      blueLight: '#283442'
    },
    text: {
      primary: '#787879',
      secondary: '#228dfc',
      goldLight: '#aaa073',
      chip: '#8B8D95'
    },
  },
  custom: {
    palette: {
      green: '#4caf50',
      blueGrey: '#5c739c',
      lightGrey: '#31373f',
      blackGrey: '#77787e',
      darkRed: '#BA1A48',
      hover: '#16ACE2',
      black: '#0F1119',
      yellow: 'yellow',
      darkYellow: '#FFA000',
      darkGrey: '#1B1F2E',
      gold: '#D8A42D',
      pink: '#D8A42D'
    }
  }
}));

export { theme };