import React from "react";

import { 
  Navbar, 
  Container, 
  NavbarBrand, 
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';

import { useHistory } from "react-router-dom";


const HeaderLayout = () => {
  let history = useHistory();

  const gotoRoute = (path) => () => {
    history.push(path);
  }

  const isActive = (path) => {
    return true
  }

  return (
    <Navbar expand="lg" color="primary">
        <Container>
            <NavbarBrand href="#" onClick={gotoRoute("/")}><strong>MERN FOOD </strong></NavbarBrand>
            
            {/*Navigation*/}
            <Nav className="justify-content-right">
              <NavItem>
                  <NavLink href="#" onClick={gotoRoute("/login")}>Login</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#" onClick={gotoRoute("/registration")}>Register</NavLink>
              </NavItem>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default HeaderLayout;
