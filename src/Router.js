import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        
      </Switch>
    </Router>
  );
}
export default Routers;
