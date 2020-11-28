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

const SocialNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Router>
      <Navbar className="navbar navSocialContainer" expand="md" fixed='bottom'>
        <NavbarBrand href="/" className="navIcon"><img src={navIcon} id="navIcon" /></NavbarBrand>
      </Navbar>

      <Switch>
         
      </Switch>
      </Router>
    </div>
  );
}

export default SocialNavBar;