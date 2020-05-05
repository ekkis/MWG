
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
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