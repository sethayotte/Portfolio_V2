import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactIcon from "../../assets/get-in-touch.png";
import resumeIcon from "../../assets/download-resume.png";
import resume from "../../assets/SethMitchell_Resume_2021.pdf";
import connectMobileCard from "../../assets/Connect-Mobile-Tile.png";

const ConnectCard = () => {
  return (
    <React.Fragment className="landingCard">
      <section className="cardAlignment" id="connect">
        <div class="mobile-wrapper">
          <div>
            <div className="connectAlignment" id="i1">
              <img src={resumeIcon} alt="Resume Icon" />
              <a href={resume} target="_blank" rel="noreferrer">
                <h4 className="sectionLink" id="connectLink">
                  View downloadable resume &nbsp;
                  <FontAwesomeIcon icon="arrow-circle-right" />
                </h4>
              </a>
            </div>
            <div className="connectAlignment" id="i2">
              <a href="/#/Contact">
                <h4 className="sectionLink" id="connectLink">
                  Get in touch &nbsp;
                  <FontAwesomeIcon icon="arrow-circle-right" />
                </h4>
              </a>
              <img src={contactIcon} alt="Contact Icon" />
            </div>
          </div>
          <div id="lm-text">
            <h3 className="sectionText">
              Download my current <br />
              resume or view my <br />
              digital profiles & reach <br />
              out if you’d like to chat.
            </h3>
          </div>
          <div id="mobile-lm-links">
            <a href={resume} target="_blank" rel="noreferrer">
              <h4 className="sectionLink" id="connectLink">
                View downloadable resume &nbsp;
                <FontAwesomeIcon icon="arrow-circle-right" />
              </h4>
            </a>
            <a href="/#/Contact">
              <h4 className="sectionLink" id="connectLink">
                Get in touch &nbsp;
                <FontAwesomeIcon icon="arrow-circle-right" />
              </h4>
            </a>
          </div>
          <div id="lm-mobile-hero">
            <img src={connectMobileCard} alt="Connect Mobile Icon" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ConnectCard;
