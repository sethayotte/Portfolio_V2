import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import technologies from '../../assets/technologies-graphic-02.png';

const ProjectsCard = () => {
  return (
    <React.Fragment>
      <section className="cardAlignment" id="projects">
      <div>
          <h3 className="sectionText">
          Skilled with modern <br/>front-end frameworks <br/>& continually learning <br/>new technologies.</h3>
          <a href='/Projects'>
          <h4 className="sectionLink" id="projectsLink">
              View All Projects &nbsp;<FontAwesomeIcon icon='arrow-circle-right'/>
          </h4>
          </a>
        </div>
        <div>
        <img src={technologies} id="projectsImage" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectsCard;