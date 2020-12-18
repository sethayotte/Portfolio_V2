import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, animateScroll as scroll } from "react-scroll";

const TitleCard = () => {
  return (
    <React.Fragment className="landingCard">
      <section className="cardAlignment" id="landing">
      <div class="mobile-wrapper">
        <div className="landingMain">
          <h1 className="titleHeader">Seth Mitchell</h1>
          <h1 className="titleSubheader">
            Software Engineering, Design, Systems
          </h1>
        </div>
        <Link
    to="featured"
    smooth={true}
    duration={800}
>
        <div className="exploreButton">
        <h4 className="sectionLink">
              Explore
          </h4>
          <FontAwesomeIcon icon='arrow-circle-down' id="explore" />
        </div>
        </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitleCard;
