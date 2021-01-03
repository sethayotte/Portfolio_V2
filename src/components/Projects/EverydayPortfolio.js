import React from "react";
import TodayMockup from '../../assets/TodayViewMockup.png';
import ProfileMockup from '../../assets/ProfileViewMockup.png';

import { Link, animateScroll as scroll } from "react-scroll";
import EPSlider from '../Carousel';

const EverydayPortfolio = () => {
    return (
        <React.Fragment>
        <section className="pageContainer" id="epPage">
          <section className="epHeaderCard">
          <h1 className="projectHeader" id="ep-header">&nbsp; Everyday Portfolio</h1>
          <h1 className="projectHeader" id="ep-header-wrapped">Everyday<br />Portfolio</h1>
          <div id="epHeros">
            <img id="todayView" src={TodayMockup} alt="Today View Mockup" />
            <img id="profileView" src={ProfileMockup} alt="Profile Mockup" />
          </div>
          </section>

        <section id="tagline-resources">
          <h2 id="ep-tagline">A custom-designed<br />financial utility.</h2>
          <section id="document-container">
          <a href="assets/SethMitchell_EverydayPortfolioProposal.pdf" target="_blank" rel="noreferrer">
          <div id="project-proposal">
            <p>View Project Proposal</p>
        </div>
        </a>
        <Link
              to="epProject"
              smooth={true}
              duration={800}
              offset={-75}
          >
        <div id="see-project">
            <p>Explore Project</p>
        </div>
        </Link>
        <a href="assets/EverydayPortfolio_DesignBrief.pdf" target="_blank" rel="noreferrer">
        <div id="design-brief">
            <p>View Design Brief</p>
        </div>
        </a>
          </section>
          </section>

          <section className="projectDescription" id="epProject">
            <div className="objectiveBody"> 
            <h4 className="descriptionSubheading">Project Objective</h4>
            <p className="descriptionBody">With a strong interest in personal investment and finance, I’m interested in developing tools that can help engage individuals and make their lives easier. Across bank accounts, investment platforms, budget tools - nothing seems to have a simple, easy-to-digest solution to watch your performance on a daily basis.<br /> <br />

                                    While true gains are the culmination of years and decades of time spent in the market, I still like to see how things are moving day to day - as well as read daily news about earnings, announcements, etc. Especially in today’s COVID environment, things can swing significantly day to day.<br /> <br />

                                    The goal of Everyday Portfolio is to give a snapshot of your day in a simple and clean application. I think this will be a good app to develop alongside the NuCamp curriculum since the ideal environment would be a native app. Ideally this would be a project that would continue on into the App Store to give access to everyone.</p>
            </div>
            <div className="detailsBody">
            <h4 className="descriptionSubheading">Project Details</h4>
            <p className="descriptionBody">
              <div className="role-timeline">
              <strong>My Role:&nbsp;&nbsp;&nbsp;&nbsp; </strong> 
              Personal Project,<br />
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Lead Developer & Designer 
              <br /><br />
              <strong>Timeline:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              August 2020 - Present &nbsp;&nbsp;<span id="WIP">Work In Progress</span>
              <br /><br />
              </div>
              <div className="technology-skills">
              <strong>Technologies & Skills Used:</strong><br />
              <p className="tag" id="epTag">React Native</p>
              <p className="tag" id="epTag">Node</p>
              <p className="tag" id="epTag">Express</p>
              <p className="tag" id="epTag">MongoDB</p>
              <p className="tag" id="epTag">MongoDB Atlas</p>
              <p className="tag" id="epTag">SCSS</p>
              <p className="tag" id="epTag">Sketch</p>
              </div>
            </p>
            </div>
            <div className="objectiveBody"> 
            <h4 className="descriptionSubheading">App Images & Video</h4>
            <EPSlider />
            </div>
          </section>

        </section>
      </React.Fragment>
    );
}

export default EverydayPortfolio;

