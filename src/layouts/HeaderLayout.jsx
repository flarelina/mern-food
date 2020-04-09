import React from "react";

import { 
  Navbar, 
  Container, 
  NavbarBrand, 
  Collapse, 
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
            <NavbarBrand>MERN-FOOD</NavbarBrand>
            
            {/*Navigation*/}
            <Collapse navbar>
                <Nav navbar>
                    <NavItem className={isActive("/login") ? 'active' : ''}>
                        <NavLink onClick={gotoRoute("/login")}>
                            Login
                        </NavLink>
                    </NavItem>
                    
                    <NavItem className={isActive("/registration") ? 'active' : ''}>
                    <NavLink onClick={gotoRoute("/registration")}>
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
