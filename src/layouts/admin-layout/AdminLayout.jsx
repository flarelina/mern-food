import React from "react";

import AdminSidebar from "./AdminSidebar"

import { Route, Switch } from "react-router-dom";

import Customers  from '../../views/admin/customers/Customers'
import Products   from '../../views/admin/products/Products'
import Orders     from '../../views/admin/orders/Orders'

class AdminLayout extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <AdminSidebar {...this.props}/>
        <div className="main-panel" ref={this.mainPanel}>
          <Switch>
            <Route path="/admin/products" exact component={Products}></Route>
            <Route path="/admin/orders" exact component={Orders}></Route>
            <Route path="/admin/customers" exact component={Customers}></Route>
          </Switch>
        </div>
      </div>
    );
  } 
}

export default AdminLayout;
