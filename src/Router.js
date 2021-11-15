import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}
export default Routers;
