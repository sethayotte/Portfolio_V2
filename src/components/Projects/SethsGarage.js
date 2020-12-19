import React from "react";

const SethsGarage = () => {
    return (
        <React.Fragment>
        <section className="pageContainer">
          <h1 className="projectHeader" id="ep">Seth's Garage</h1>

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

export default SethsGarage;

