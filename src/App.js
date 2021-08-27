import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MembersContainer from './pages/Members';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu', 'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MembersContainer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
