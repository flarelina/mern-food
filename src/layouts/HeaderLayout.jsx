import React from "react";
import { Navbar, Container, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import { useHistory } from "react-router-dom";


function HeaderLayout () {
  let history = useHistory();

  const gotoRoute = (path) => () => {
    history.push(path);
  }

  return (
    <Navbar expand="lg" color="primary">
        <Container>
            <NavbarBrand>MERN-FOOD</NavbarBrand>
            <Collapse navbar>
                <Nav navbar>
                    <NavItem active>
                        <NavLink onClick={gotoRoute("/login")}>
                            Login <span className="sr-only">(current)</span>
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                    <NavLink onClick={gotoRoute("/")}>
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
  );
}

export default HeaderLayout;
