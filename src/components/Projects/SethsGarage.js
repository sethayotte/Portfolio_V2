import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import GarageHero from '../../assets/GarageHero.png';

const SethsGarage = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="garagePage">
        <section id="developmentHeader">
        <h1 className="projectHeader" id="dev">Seth's Garage</h1>
        <img id="garageHero" src={GarageHero} alt="Development Hero Mockup" />
        </section>

        <section id="garage-tagline-resources">
        <p className="tag" id="WIP">Work In Progress</p>
        <h2 id="garage-tagline">An interactive archive of<br />past & present vehicles.</h2>
        <section id="document-container">
        <a href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
        <div>
          <p>View GitHub Repository</p>
        </div>
        </a>
        <Link
            to="garageProject"
            smooth={true}
            duration={800}
        >
        <div>
          <p>View Project Details</p>
        </div>
        </Link>
        </section>
        </section>

        <section className="projectDescription" id="garageProject">
          <div className="objectiveBody"> 
          <h4 className="descriptionSubheading" id="garageSubheading">Project Objective</h4>
          <p className="descriptionBody" id="garageDescription"> 
Lorem ipsum...
          </p>
          </div>
          <div className="detailsBody" id="garageDetails">
          <h4 className="descriptionSubheading" id="garageSubheading">Project Details</h4>
          <p className="descriptionBody" id="garageDescription">
            <div className="role-timeline">
            <strong>My Role:&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
            Personal Project,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lead Developer & Designer
            <br /><br />
            <strong>Timeline:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            October 2020 - Present
            <br /><br />
            </div>
            <div className="technology-skills">
            <strong>Technologies & Skills Used:</strong><br />
            <p className="tag" id="garageTag">React</p>
            <p className="tag" id="garageTag">HTML5</p>
            <p className="tag" id="garageTag">SCSS</p>
            <p className="tag" id="garageTag">Sketch</p>
            <p className="tag" id="garageTag">Adobe Illustrator</p>
            </div>
          </p>
          </div>
        </section>
      </section>
      </React.Fragment>
    );
}

export default SethsGarage;

