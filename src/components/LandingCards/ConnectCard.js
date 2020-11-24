import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contact from "../../assets/get-in-touch.png";
import resume from "../../assets/download-resume.png";

const ConnectCard = () => {
  return (
    <React.Fragment>
      <section className="cardAlignment" id="featured">
        <div>
          <div>
            <img src={resume} />
            <h4 className="sectionLink" id="featuredLink">
              View downloadable resume &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </h4>
          </div>
          <div>
            <img src={contact} />
            <h4 className="sectionLink" id="featuredLink">
              Get in touch &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </h4>
          </div>
        </div>
        <div>
          <h3 className="sectionText">
            Download my current <br />
            resume or view my <br />
            digital profiles & reach <br />
            out if you’d like to chat.
          </h3>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ConnectCard;
