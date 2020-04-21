
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";

import Navigations from "../../references/navigations"

var ps;

class AdminSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  renderNavigations() {
    const {pathname} = (this.props.location);

    return Navigations.map(nav => {
      return (
        <li key={nav.key}
            className={nav.routePath === pathname ? 'active' : ''}>
          <NavLink to={nav.routePath}
                   className="nav-link"
                   activeClassName="active">
            <i className="now-ui-icons"/>
            <p>{nav.label}</p>
          </NavLink>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="sidebar" data-color="red">
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=nudr-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=nudr-sidebar"
            className="simple-text logo-normal"
          >
            MERN-FOOD
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.renderNavigations()}
          </Nav>
        </div>
      </div>
    );
  }
}

export default AdminSidebar;
