import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import SproutIntro from '../../assets/Sprout_Mobile.png';
import SproutHero from '../../assets/sprout_hero.png';

const Sprout = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="sproutPage">
        <section id="sproutHeader">
        <h1 className="projectHeader" id="sprout">Sprout</h1>
        <img id="sproutHero" src={SproutHero} alt="Sprout Hero Mockup" />
        </section>

        <section id="sprout-tagline-resources">
        <p className="tag" id="WIP">Work In Progress</p>
        <h2 id="sprout-tagline">Reimagining talent in<br />the wake of COVID-19.</h2>
        <section id="document-container">
        <a href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
        <div>
          <p>View CodePen Components</p>
        </div>
        </a>
        <Link
            to="sproutProject"
            smooth={true}
            duration={800}
        >
        <div>
          <p>View Project Details</p>
        </div>
        </Link>
        </section>
        </section>

        <section className="projectDescription" id="sproutProject">
            
            <div id="introContainer">
                <div>
                <img id="sproutIntro" src={SproutIntro} alt="Sprout Intro Mobile Mockup" />
                </div>
                <div id="sproutCopy">
                    <h4 className="descriptionSubheading">About the Sprout Project</h4>
                    <p>
                    With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                    </p>
                </div>
            </div>

        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;