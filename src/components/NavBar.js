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
    Route
  } from "react-router-dom";
import navIcon from '../assets/SM2021.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Landing from './Landing';
import EverydayPortfolio from './Projects/EverydayPortfolio';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Router>
      <Navbar className="navbar navContainer" expand="md" fixed='top'>
        <NavbarBrand href="/" className="navIcon"><img src={navIcon} id="navIcon" /></NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbarTogglerIcon">
        <FontAwesomeIcon icon='stream' id="navToggle" />
            </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" id="mainNav" navbar>
            <NavItem className="navItem">
              <NavLink href="/Projects" className="navLinks">Projects</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="/Resume" className="navLinks">Resume</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="/Contact" className="navLinks">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
          <Route path='/Projects'>
              <Projects />
          </Route>
          <Route path='/Resume'>
              <Resume />
          </Route>
          <Route path='/Contact'>
              <Contact />
          </Route>
          <Route path='/Everyday-Portfolio'>
              <EverydayPortfolio />
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