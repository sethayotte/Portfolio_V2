import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TitleCard = () => {
  return (
    <React.Fragment>
      <section className="cardAlignment" id="landing">
        <div className="landingMain">
          <h1 className="titleHeader">Seth Mitchell</h1>
          <h1 className="titleSubheader">
            Software Engineering, Design, Systems
          </h1>
        </div>
        <div className="exploreButton">
        <h4 className="sectionLink">
              Explore
          </h4>
          <FontAwesomeIcon icon='arrow-circle-down' id="explore" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitleCard;
