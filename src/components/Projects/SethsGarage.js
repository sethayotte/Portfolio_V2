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
        <h2 id="garage-tagline">An interactive archive of<br />past & present vehicles.</h2>
        <section id="document-container">
        <a href="https://github.com/sethayotte/seths-garage" target="_blank" rel="noreferrer">
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
            With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

            Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
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
            October 2020 - Present &nbsp;&nbsp;<span id="WIP">Work In Progress</span>
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

