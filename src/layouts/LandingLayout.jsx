import React from "react";
import HeaderLayout from "./HeaderLayout"

import { Route, Switch } from "react-router-dom";

import Login from '../views/Login/Login'

class LandingLayout extends React.Component {
  render() {
    return (
      <>
      <HeaderLayout></HeaderLayout>
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
      </>
    );
  }
}

export default LandingLayout;
