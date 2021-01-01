import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SproutIntro from '../../assets/Sprout_Mobile.png';
import SproutHero from '../../assets/sprout_hero.png';
import SproutTab1 from '../../assets/sprout_tablet.png';
import SproutTab2 from '../../assets/sprout_tablet2.png';


const Sprout = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="sproutPage">
        <section id="sproutHeader">
        <h1 className="projectHeader" id="sprout">Sprout</h1>
        <img id="sproutHero" src={SproutHero} alt="Sprout Hero Mockup" />
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
                    When COVID began to make an impact in the United States in early March, stores and restaurants closed with uncertainty of when things would return to normal.  At that time, we could never have imagined how the rest of the year would turn out.<br /><br />

                    However, a small team of project management, talent & recruitment specialists came together to try to come up with a solution to help.  Sprout would ultimately be a platform that allowed restaurant talent to be easily found and hired to take the search and interview burden off of local restaurants that already had their hands full.<br /><br />

                    While the platform never came to fruition due to the waves of rising COVID cases throughout the year, this project provided an important problem to solve and allowed me to explore how code could make a positive impact.<br />
                    </p>
                    <Link
                        to="sproutSection2"
                        smooth={true}
                        duration={800}
                        offset={-100}
                    >
                    <p id="readMore">
                    Read more <FontAwesomeIcon icon='arrow-circle-down'/>
                    </p>
                    </Link>
                </div>
            </div>

        </section>

        <section id="sproutSection2">
        
            <div className="design-codeBody">
                <div className="sproutCol1">
                    <div id="colCopy">
                    <h4 className="projectSubheading">Cultivating my<br />development interest.</h4>
                    <p>
                    Joining this team, I only came in with my graphic design knowledge.  Digging into the problem with the other members, features and functionality began to take shape.  This was an exciting design problem that required an easy-to-use, approachable interface.  Once the initial mockups were finished, we had an MVP framework to work from.<br /><br />

                    Myself, the novice “front-end” developer, and a working back-end professional began working through the rough structure of the platform.  Having not written a line of react before, I began working through tutorials and creating sample elements through CodePen.  Largely HTML and CSS, these elements would ultimately be converted to JSX and implemented in their respective react components.  While these examples are elementary, they are representative of the project that began my interest in development.<br /><br />

                    A tough problem to solve that required me to learn on the fly and create something meaningful starting from nothing was an exciting opportunity.
                    </p>
                    </div>
                    <div>
                    <img src={SproutTab1} alt="Sprout Tablet Mockup 1" />  
                    </div>
                </div>
                <div className="sproutCol2">
                    <div>
                    <img src={SproutTab2} alt="Sprout Tablet Mockup 2" />
                    </div>
                    <div id="colCopy">
                    <h4 className="projectSubheading">A turning point for<br />design & code.</h4> 
                    <p>
                    This project was also the moment in which I discovered how my design skillset could complement and be very useful in my journey into software development.  It all clicked and from this point forward.  As my technical ability grew, each project I’ve worked on has also poised tough interface design problems.<br /><br />

                    This work that I generated for this project is not technically complex, but what it represents for the rest of my growth in 2020, it’s absolutely worth noting.
                    </p>
                    </div>
                </div>
            </div>
        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;