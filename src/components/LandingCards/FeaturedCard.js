import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import epMockup from '../../assets/EP-Mockup.png';

const FeaturedCard = () => {
  return (
    <React.Fragment>
      <section className="cardAlignment" id="featured">
        <div>
        <img src={epMockup} id="featuredImage" />
        </div>
        <div>
          <h3 className="sectionText">
            Driven by good design, <br/>I build easy-to-use tools <br/>that deliver an
            impact.
          </h3>
          <a href='/Everyday-Portfolio'>
          <h4 className="sectionLink" id="featuredLink">
              Explore the Everyday Porfolio Project &nbsp;<FontAwesomeIcon icon='arrow-circle-right'/>
          </h4>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturedCard;
