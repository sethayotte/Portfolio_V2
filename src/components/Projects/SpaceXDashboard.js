import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import RunAwayHero from "../../assets/runAway-hero.png";
import RunAway1 from "../../assets/RunAway_ProjectTiles-01.png";
import RunAway2 from "../../assets/RunAway_ProjectTiles-02.png";
import RunAway3 from "../../assets/RunAway_ProjectTiles-03.png";
import RunAway4 from "../../assets/RunAway_ProjectTiles-04.png";

const SpaceX = () => {
  return (
    <React.Fragment>
      <section className="pageContainer" id="runAwayPage">
        <section id="runAwayHeader">
          <h1 className="projectHeader" id="runAway">
            Run Away
          </h1>
          <img id="runAwayHero" src={RunAwayHero} alt="Run Away Hero Mockup" />
        </section>

        <section id="runAway-tagline-resources">
          <h2 id="runAway-tagline">
            A travel destination utility
            <br />
            to help you Run Away.
          </h2>
          <section id="document-container">
            <Link to="runAwayProject" smooth={true} duration={800} offset={-75}>
              <div>
                <p>View Project Details</p>
              </div>
            </Link>
            <a href="https://run-away.app" target="_blank">
              <div>
                <p>Visit Live Site</p>
              </div>
            </a>
            <a href="https://github.com/sethayotte/run-away" target="_blank">
              <div>
                <p>View GitHub Repository</p>
              </div>
            </a>
          </section>
        </section>

        <section className="projectDescription" id="runAwayProject">
          <div className="objectiveBody">
            <h4 className="descriptionSubheading" id="runAwaySubheading">
              Project Objective
            </h4>
            <p className="descriptionBody" id="runAwayDescription">
              Run Away was designed and built to offer a quick and simple
              solution for travel inspiration. As an active user of Google
              Flights to find great deals, there are times where I have a travel
              itch and have no idea of where to go.
              <br />
              <br />
              Once a user enters in their departure point, our algorithm will
              generate a random date range, a random destination, and a
              competitive fare. At this time, v1.0 is live and we are still
              working to allow direct connection to an airline’s site for
              booking. For now, enjoy the tool for destination ideas!
            </p>
          </div>
          <div className="detailsBody" id="runAwayDetails">
            <h4 className="descriptionSubheading" id="runAwaySubheading">
              Project Details
            </h4>
            <p className="descriptionBody" id="runAwayDescription">
              <div className="role-timeline">
                <strong>My Role:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                Personal Project,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lead
                Developer & Designer
                <br />
                <br />
                <strong>Timeline:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                December 2020 - January 2021 &nbsp;&nbsp;
                <br />
                <br />
              </div>
              <div className="technology-skills">
                <strong>Technologies & Skills Used:</strong>
                <br />
                <p className="tag" id="runAwayTag">
                  React
                </p>
                <p className="tag" id="runAwayTag">
                  Flight Data RapidAPI
                </p>
                <p className="tag" id="runAwayTag">
                  SCSS
                </p>
                <p className="tag" id="runAwayTag">
                  Sketch
                </p>
                <p className="tag" id="runAwayTag">
                  Adobe Illustrator
                </p>
                <p className="tag" id="runAwayTag">
                  UI Design
                </p>
              </div>
            </p>
          </div>
          <div id="projectContainer">
            <div className="projectPoint" id="item1">
              <div>
                <img
                  id="runAwayIntro"
                  src={RunAway1}
                  alt="Sprout Intro Mobile Mockup"
                />
              </div>
              <div id="runAwayCopy">
                <h4 className="descriptionSubheading">Flexible Ticket UI</h4>
                <p>
                  Design was a large focus of this project. This tool had to be
                  simple to navigate and get straight to the point. With all of
                  the data we’d be pulling from the API response, we ensured
                  that it was packaged neatly into an inviting ticket interface.
                </p>
              </div>
            </div>
            <div className="projectPoint" id="item2">
              <div id="runAwayCopy">
                <h4 className="descriptionSubheading">
                  Random Date Generation
                </h4>
                <p>
                  One of the most difficult aspects of this project was
                  generating random dates to fall within our desired parameters.
                  Once generated, this information is correctly formatted and
                  passed to the request body for a response.
                </p>
              </div>
              <div>
                <img
                  id="runAwayIntro"
                  src={RunAway2}
                  alt="Sprout Intro Mobile Mockup"
                />
              </div>
            </div>
            <div className="projectPoint" id="item3">
              <div>
                <img
                  id="runAwayIntro"
                  src={RunAway3}
                  alt="Sprout Intro Mobile Mockup"
                />
              </div>
              <div id="runAwayCopy">
                <h4 className="descriptionSubheading">Data Manipulation</h4>
                <p>
                  As a response comes in, all of the data needs to be parsed -
                  and in some cases, validated (inbound & outbound airline /
                  route status). Some additional formatting for dates and Iata
                  code, city and country presentation and then passed to their
                  respective state leaving a skeleton in the UI while all the
                  pieces come together.
                </p>
              </div>
            </div>
            <div className="projectPoint" id="item4">
              <div id="runAwayCopy">
                <h4 className="descriptionSubheading">A Working Utility</h4>
                <p>
                  While this was a project designed for react practice, I strive
                  to make products that I would personally use and would like to
                  see go out into the world. v1.0 is currently live at{" "}
                  <strong>
                    <a
                      id="descriptionCopyLink"
                      href="https://run-away.app"
                      target="_blank"
                    >
                      run-away.app
                    </a>
                  </strong>
                  . Check it out!
                </p>
              </div>
              <div>
                <img
                  id="runAwayIntro"
                  src={RunAway4}
                  alt="Sprout Intro Mobile Mockup"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SpaceX;
