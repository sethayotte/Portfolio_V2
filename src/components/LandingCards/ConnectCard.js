import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactIcon from "../../assets/get-in-touch.png";
import resumeIcon from "../../assets/download-resume.png";
import resume from "../../assets/Resume_2021.pdf";

const ConnectCard = () => {
  return (
    <React.Fragment>
      <section className="cardAlignment" id="connect">
      <div class="mobile-wrapper">
        <div>
          <div className="connectAlignment">
            <img src={resumeIcon} />
            <a href={resume} target="_blank">
            <h4 className="sectionLink" id="connectLink">
              View downloadable resume &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </h4>
            </a>
          </div>
          <div className="connectAlignment">
          <a href='/Contact'>
            <h4 className="sectionLink" id="connectLink">
              Get in touch &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </h4>
            </a>
            <img src={contactIcon} />
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
        </div>
      </section>
    </React.Fragment>
  );
};

export default ConnectCard;
