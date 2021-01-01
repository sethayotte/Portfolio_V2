import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import SproutIntro from '../../assets/Sprout_Mobile.png';
import SproutHero from '../../assets/sprout_hero.png';
import SproutTab1 from '../../assets/sprout_tablet.png';
import SproutTab2 from '../../assets/sprout_tablet2.png';


const Sprout = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="meshPage">
        <section id="meshHeader">
        <h1 className="projectHeader" id="mesh">Mesh</h1>
        <img id="meshHero" src={SproutHero} alt="Sprout Hero Mockup" />
        </section>

        <section id="sprout-tagline-resources">
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

        <section>
            <div className="design-codeBody">
                <div className="sproutCol1">
                    <div>
                    <h4 className="projectSubheading">Cultivating my<br />development interest.</h4>
                    <p>Lorem ipsum</p>
                    </div>
                    <div>
                    <img src={SproutTab1} alt="Sprout Tablet Mockup 1" />  
                    </div>
                </div>
                <div className="sproutCol2">
                    <div>
                    <img src={SproutTab2} alt="Sprout Tablet Mockup 2" />
                    </div>
                    <div>
                    <h4 className="projectSubheading">A turning point for<br />design & code.</h4> 
                    <p>Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;