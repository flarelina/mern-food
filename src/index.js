/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";

import LandingLayout from "./layouts/landing-layout/LandingLayout.jsx";
import AdminLayout from "./layouts/admin-layout/AdminLayout.jsx"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/admin" component={AdminLayout} />
      <Route path="/" component={LandingLayout} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
