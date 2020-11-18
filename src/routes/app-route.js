import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";

const AppRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProductsPage} />
    </Switch>
  </Router>
);

export default AppRoute;
