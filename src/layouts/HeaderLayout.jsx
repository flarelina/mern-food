import React from "react";
import { Navbar, Container, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


class HeaderLayout extends React.Component {
  render() {
    return (
      <Navbar expand="lg" color="primary">
          <Container>
              <NavbarBrand>MERN-FOOD</NavbarBrand>
              <Collapse navbar>
                  <Nav navbar>
                      <NavItem active>
                          <NavLink to="/login">
                              Login <span className="sr-only">(current)</span>
                          </NavLink>
                      </NavItem>
                      
                      <NavItem>
                          <NavLink to="/">
                              Register
                          </NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Container>
      </Navbar>
    );
  }
}

export default HeaderLayout;
