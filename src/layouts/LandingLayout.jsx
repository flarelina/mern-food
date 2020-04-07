import React from "react";
import HeaderLayout from "./HeaderLayout"

import { Route, Switch } from "react-router-dom";

import Login from '../views/Login/Login'
import Registration from '../views/Registration/Registration'

class LandingLayout extends React.Component {
  render() {
    return (
      <>
      <HeaderLayout></HeaderLayout>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
      </Switch>
      </>
    );
  }
}

export default LandingLayout;
