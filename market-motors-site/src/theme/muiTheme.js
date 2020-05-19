import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#4c8c4a',
      main: '#1b5e20',
      dark: '#003300',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff6b',
      main: '#fcd734',
      dark: '#c5a600',
      contrastText: '#000000',      
    }
  }
  // overrides: {
  //   NavBar: {
  //     paper: {
  //       background: '#18202c',
  //     },
  //   },
  // },
});

export default theme;