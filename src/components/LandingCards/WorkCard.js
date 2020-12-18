import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import workLogos from '../../assets/experience-graphic.png';
import workMobile from '../../assets/Experience-Mobile-Tile.png';

const WorkCard = () => {
  return (
    <React.Fragment className="landingCard">
      <section className="cardAlignment" id="work">
      <div class="mobile-wrapper">
        <div  className="workTextBlock">
          <h3 className="sectionText">
            Diverse role & industry experience. <br/>Passion for social + environmental good.
          </h3>
          <a href='/Resume'>
          <h4 className="sectionLink" id="workLink">
              View current & past roles &nbsp;<FontAwesomeIcon icon='arrow-circle-right'/>
          </h4>
          </a>
        </div>
        <div className="workImageBlock">
        <img src={workLogos} id="workImage" />
        </div>
        <div id="layer-mobile">
          <img src={workMobile} id="workMobileImg" />
        </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorkCard;