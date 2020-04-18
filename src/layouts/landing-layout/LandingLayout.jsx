import React from "react";
import HeaderLayout from "./HeaderLayout"
import FooterLayout from "./FooterLayout"

import { Route, Switch } from "react-router-dom";

import Login from '../../views/Login/Login'
import Registration from '../../views/Registration/Registration'
import Home from '../../views/home/Home'

class LandingLayout extends React.Component {
  render() {
    return (
      <>
      <HeaderLayout></HeaderLayout>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      <FooterLayout></FooterLayout>
      </>
    );
  }
}

export default LandingLayout;
