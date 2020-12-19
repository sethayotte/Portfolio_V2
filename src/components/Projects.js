import React from "react";
import EPHero from '../assets/Projects_Hero-08.png';
import WebsiteHero from '../assets/Projects_Hero-10.png';
import GarageHero from '../assets/Projects_Hero-09.png';

const Projects = () => {
  return (
    <React.Fragment>
      <section className="pageContainer">
        <h1 className="pageHeader">Current Projects</h1>
        <div className="currentItems">
          <div id="EP">
          <a href='/Everyday-Portfolio'>
              <img src={EPHero} className="projectImage" id="EPImage" alt="Everyday Portfolio Hero"/>
          </a>
          </div>
          <div id="Website">
          <a href='/Development-Repository'>
              <img src={WebsiteHero} className="projectImage" id="WebImage" alt="Development Site Hero"/>
          </a>
          </div>
          <div id="Garage">
          <a href='/Seths-Garage'>
              <img src={GarageHero} className="projectImage" id="GarageImage" alt="Seth's Garage Hero"/>
          </a>
          </div>
        </div>
        <h1 className="pageHeader">Past Projects</h1>
      </section>
    </React.Fragment>
  );
};

export default Projects;
