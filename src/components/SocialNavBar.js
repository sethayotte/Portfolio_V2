import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import connectIcon from "../assets/connect-icon.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Contact from './Contact';

const SocialNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Router>
      <Navbar className="navbar navSocialContainer" fixed='bottom'>
      <NavItem className="socialNavItem">
      <a href="https://github.com/sethayotte" target="_blank">
              <img src={githubIcon} className="socialNavLinks" />
              </a>
            </NavItem>
            <NavItem className="socialNavItem">
                <a href="https://www.linkedin.com/in/sethayottemitchell/" target="_blank">
              <img src={linkedinIcon} className="socialNavLinks" />
              </a>
            </NavItem>
            <NavItem className="socialNavItem">
                <a href='/contact'>
              <img src={connectIcon} className="socialNavLinks" />
              </a>
            </NavItem>
      </Navbar>

      <Switch>
         
      </Switch>
      </Router>
    </div>
  );
}

export default SocialNavBar;