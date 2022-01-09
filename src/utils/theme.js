import { createMuiTheme } from '@material-ui/core/styles';

// Override theme properties to be used by material-ui components
// on home & question pages
export const theme = createMuiTheme({
  palette: {
    primary: { main: '#00897B' }
  }
});

// Override theme properties to be used by material-ui components
// on login page
export const loginTheme = createMuiTheme({
  palette: {
    primary: { main: '#F85A6A' },
    secondary: { main: '#00897B' }
  }
});
