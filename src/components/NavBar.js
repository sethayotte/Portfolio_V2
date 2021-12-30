import React, { useState } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import navIcon from "../assets/SM2021.png";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import ScrollToTop from "./ScrollToTop";

import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Landing from "./Landing";
import SpaceX from "./Projects/SpaceXDashboard";
import EverydayPortfolio from "./Projects/EverydayPortfolio";
import RunAway from "./Projects/RunAway";
import SethsGarage from "./Projects/SethsGarage";
import DevelopmentRepository from "./Projects/DevelopmentRepository";
import Sprout from "./Projects/Sprout";
import Mesh from "./Projects/Mesh";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <nav className="navContainer">
          <a href="/" className="navIcon">
            <img src={navIcon} id="navIcon" />
          </a>
          <ul className="ml-auto" id="mainNav" navbar>
            <li className="navItem">
              <a
                href="/#/Projects"
                onClick={toggle}
                className="navLinks"
                activeClassName="active"
              >
                Projects
              </a>
            </li>
            <li className="navItem">
              <a
                href="/#/Resume"
                onClick={toggle}
                className="navLinks"
                activeClassName="active"
              >
                Resume
              </a>
            </li>
            {/* <li className="navItem">
              <a
                href="https://www.sethmitchell.co"
                target="_blank"
                onClick={toggle}
                className="navLinks"
              >
                Blog
              </a>
            </li> */}
            <li className="navItem">
              <a
                href="/#/Contact"
                onClick={toggle}
                className="navLinks"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mobileToggle" id='mobileNavToggle'>
            <a onClick={toggle}><HiOutlineMenuAlt4 /></a>
          </div>
        </nav>

        <nav className='mobileNav' id={`mobileNavContainer${isOpen ? "" : "Hidden"}`}>
          <div className='mobileMenuClose'>
            <a onClick={toggle}><HiX /></a>
          </div>
          <div className='mobileMenuItems'>
          <ul id='mobileList'>
            <li>
              <a
                href="/#/Projects"
                onClick={toggle}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#/Resume"
                onClick={toggle}
              >
                Resume
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.sethmitchell.co"
                target="_blank"
                onClick={toggle}
              >
                Blog
              </a>
            </li> */}
            <li>
              <a
                href="/#/Contact"
                onClick={toggle}
              >
                Contact
              </a>
            </li>
          </ul>
          </div>
        </nav>


        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/SpaceX-Dashboard">
            <SpaceX />
          </Route>
          <Route path="/Everyday-Portfolio">
            <EverydayPortfolio />
          </Route>
          <Route path="/Run-Away">
            <RunAway />
          </Route>
          <Route path="/Seths-Garage">
            <SethsGarage />
          </Route>
          <Route path="/Development-Repository">
            <DevelopmentRepository />
          </Route>
          <Route path="/Sprout">
            <Sprout />
          </Route>
          <Route path="/Mesh">
            <Mesh />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
