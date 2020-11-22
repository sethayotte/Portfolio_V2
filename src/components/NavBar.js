import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';
import Landing from './Landing';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SM</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/work">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
          <Route path='/work'>
              <Work />
          </Route>
          <Route path='/resume'>
              <Resume />
          </Route>
          <Route path='/contact'>
              <Contact />
          </Route>
          <Route path='/'>
              <Landing />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default NavBar;