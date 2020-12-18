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
              <img src={EPHero} id="projectImage" />
          </div>
          <div id="Website">
              <img src={WebsiteHero} id="projectImage" />
          </div>
          <div id="Garage">
              <img src={GarageHero} id="projectImage" />
          </div>
        </div>
        <h1 className="pageHeader">Past Projects</h1>
      </section>
    </React.Fragment>
  );
};

export default Projects;
