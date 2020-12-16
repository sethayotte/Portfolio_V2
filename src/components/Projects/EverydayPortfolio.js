import React from "react";

const EverydayPortfolio = () => {
    return (
        <React.Fragment>
        <section className="pageContainer">
          <h1 className="projectHeader" id="ep">Everyday Portfolio</h1>

          <section id="document-container">
          <div id="project-proposal">
          <a href="assets/SethMitchell_EverydayPortfolioProposal.pdf" target="_blank">
            <p>View Project Proposal</p>
          </a>
        </div>
        <div id="design-brief">
          <a href="assets/EverydayPortfolio_DesignBrief.pdf" target="_blank">
            <p>View Design Brief</p>
          </a>
        </div>
        <div id="see-project">
          <a href="https://github.com/sethayotte/Everyday-Portfolio" target="_blank">
            <p>See Project on GitHub</p>
          </a>
        </div>
          </section>

        </section>
      </React.Fragment>
    );
}

export default EverydayPortfolio;

