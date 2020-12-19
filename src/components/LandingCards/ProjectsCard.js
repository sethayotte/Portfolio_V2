import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import technologies from '../../assets/technologies-graphic-02.png';
import technologiesMobile from '../../assets/Technologies-Mobile-Tile-05.png'

const ProjectsCard = () => {
  return (
    <React.Fragment className="landingCard">
      <section className="cardAlignment" id="projects">
      <div class="mobile-wrapper">
      <div id="projectsText">
          <h3 className="sectionText">
          Skilled with modern <br/>front-end frameworks <br/>& continually learning <br/>new technologies.</h3>
          <a href='/Projects'>
          <h4 className="sectionLink" id="projectsLink">
              View All Projects &nbsp;<FontAwesomeIcon icon='arrow-circle-right'/>
          </h4>
          </a>
        </div>
        <div className="desktop-hero">
        <img src={technologies} id="projectsImage" alt="Technologies Card"/>
        </div>
        <div className="mobile-hero">
        <img src={technologiesMobile} id="projectsImage" alt="Technologies Card Mobile"/>
        </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectsCard;