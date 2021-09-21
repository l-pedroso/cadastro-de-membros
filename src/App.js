import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Dashboard, Home } from './pages';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ProtectedRoute from './auth/protected-route';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
          {/*<Route path="/" component={Home} />*/}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
