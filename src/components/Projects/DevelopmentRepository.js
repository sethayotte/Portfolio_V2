import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import devHero from '../../assets/PortfolioHero.png';

const DevelopmentRepository = () => {
    return (
        <React.Fragment>
        <section className="pageContainer" id="devPage">
          <section id="developmentHeader">
          <h1 className="projectHeader" id="dev">Development Repository</h1>
          <img id="devHero" src={devHero} alt="Development Hero Mockup" />
          </section>

          <section id="dev-tagline-resources">
          <h2 id="dev-tagline">A living document of my<br />development experience.</h2>
          <section id="document-container">
          <a href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
          <div>
            <p>View GitHub Activity</p>
          </div>
          </a>
          <Link
              to="devProject"
              smooth={true}
              duration={800}
          >
          <div>
            <p>Explore My Development</p>
          </div>
          </Link>
          </section>
          </section>

          <section className="projectDescription" id="devProject">
            <div className="objectiveBody"> 
            <h4 className="descriptionSubheading" id="devSubheading">My Journey Into Software Development</h4>
            <p className="descriptionBody" id="devDescription">With a strong interest in personal investment and finance, I’m interested in developing tools that can help engage individuals and make their lives easier. Across bank accounts, investment platforms, budget tools - nothing seems to have a simple, easy-to-digest solution to watch your performance on a daily basis.<br /> <br />

                                    While true gains are the culmination of years and decades of time spent in the market, I still like to see how things are moving day to day - as well as read daily news about earnings, announcements, etc. Especially in today’s COVID environment, things can swing significantly day to day.<br /> <br />

                                    The goal of Everyday Portfolio is to give a snapshot of your day in a simple and clean application. I think this will be a good app to develop alongside the NuCamp curriculum since the ideal environment would be a native app. Ideally this would be a project that would continue on into the App Store to give access to everyone.</p>
            </div>
            <div className="detailsBody" id="devDetails">
            <h4 className="descriptionSubheading" id="devSubheading">My Stats</h4>
            <p className="descriptionBody" id="devDescription">
              <div className="role-timeline">
              <strong>Current Role:&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
              Graphic Designer,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compass Group USA 
              <br /><br />
              <strong>Timeline:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              April 2020 - Present
              <br /><br />
              <strong>Interests & Hobbies:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              April 2020 - Present
              <br /><br />
              </div>
              <div className="technology-skills">
              <strong>Technologies & Skills:</strong><br />
              <p className="tag" id="devTag">ES6+ JS</p>
              <p className="tag" id="devTag">React</p>
              <p className="tag" id="devTag">React Native</p>
              <p className="tag" id="devTag">HTML5</p>
              <p className="tag" id="devTag">CSS3</p>
              <p className="tag" id="devTag">Node</p>
              <p className="tag" id="devTag">Express</p>
              <p className="tag" id="devTag">MongoDB</p>
              <p className="tag" id="devTag">MongoDB Atlas</p>
              <p className="tag" id="devTag">SCSS</p>
              <p className="tag" id="devTag">Sketch</p>
              <p className="tag" id="devTag">Adobe Illustrator</p>
              <p className="tag" id="devTag">Adobe InDesign</p>
              <p className="tag" id="devTag">Adobe Photoshop</p>
              </div>
            </p>
            </div>
            <div className="objectiveBody"> 
            <h4 className="descriptionSubheading" id="devSubheading">App Images & Video</h4>
            </div>
          </section>
 
        </section>
      </React.Fragment>
    );
}

export default DevelopmentRepository;

