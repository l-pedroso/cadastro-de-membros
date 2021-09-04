import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Dashboard, Home} from './pages';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ProtectedRoute from './auth/protected-route';

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
        <Router>
          <Switch>
            <ProtectedRoute path="/" component={Dashboard} />
            {/*<Route path="/" component={Home} />*/}
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
