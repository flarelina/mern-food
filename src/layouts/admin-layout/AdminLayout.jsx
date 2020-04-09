import React from "react";

import AdminSidebar from "./AdminSidebar"

import { Route, Switch } from "react-router-dom";

import Products from '../../views/admin/products/Products'

class AdminLayout extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <AdminSidebar />
        <div className="main-panel" ref={this.mainPanel}>
          <Switch>
            <Route path="/admin/products" exact component={Products}></Route>
          </Switch>
        </div>
      </div>
    );
  } 
}

export default AdminLayout;
