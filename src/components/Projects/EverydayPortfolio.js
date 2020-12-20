import React from "react";
import TodayMockup from '../../assets/TodayViewMockup.png';
import ProfileMockup from '../../assets/ProfileViewMockup.png';

const EverydayPortfolio = () => {
    return (
        <React.Fragment>
        <section className="pageContainer" id="epPage">
          <section className="epHeaderCard">
          <h1 className="projectHeader" id="ep-header">&nbsp; Everyday Portfolio</h1>
          <div id="epHeros">
            <img src={TodayMockup} alt="Today View Mockup" />
            <img src={ProfileMockup} alt="Profile Mockup" />
          </div>
          </section>

          <section id="document-container">
          <div id="project-proposal">
          <a href="assets/SethMitchell_EverydayPortfolioProposal.pdf" target="_blank" rel="noreferrer">
            <p>View Project Proposal</p>
          </a>
        </div>
        <div id="design-brief">
          <a href="assets/EverydayPortfolio_DesignBrief.pdf" target="_blank" rel="noreferrer">
            <p>View Design Brief</p>
          </a>
        </div>
        <div id="see-project">
          <a href="https://github.com/sethayotte/Everyday-Portfolio" target="_blank" rel="noreferrer">
            <p>See Project on GitHub</p>
          </a>
        </div>
          </section>

        </section>
      </React.Fragment>
    );
}

export default EverydayPortfolio;

