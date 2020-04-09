import React from "react";
import HeaderLayout from "./HeaderLayout"

import { Route, Switch } from "react-router-dom";

import Login from '../views/login/Login'
import Registration from '../views/registration/Registration'

class LandingLayout extends React.Component {
  render() {
    return (
      <>
      <HeaderLayout></HeaderLayout>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration}></Route>
      </Switch>
      </>
    );
  }
}

export default LandingLayout;
