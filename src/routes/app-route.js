import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Products from "../pages/Products";

const AppRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Products} />
    </Switch>
  </Router>
);

export default AppRoute;
