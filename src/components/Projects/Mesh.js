import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import SproutIntro from '../../assets/Sprout_Mobile.png';
import MeshHero from '../../assets/MeshMockup.png';
import MeshMobileHero from '../../assets/MeshMobileHero.png';
import SproutTab1 from '../../assets/sprout_tablet.png';
import SproutTab2 from '../../assets/sprout_tablet2.png';


const Sprout = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="meshPage">
        <section id="meshHeader">
        <h1 className="projectHeader" id="mesh">Mesh</h1>
        <img id="meshHero" src={MeshHero} alt="Sprout Hero Mockup" />
        <img id="meshMobileHero" src={MeshMobileHero} alt="Sprout Hero Mockup" />
        </section>

        <section id="mesh-tagline-resources">
        <h2 id="mesh-tagline">A collaborative space for creatives.<br />Prototype created at VCU.</h2>
        <section id="document-container">
        <a href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
        <div>
          <p>View CodePen Components</p>
        </div>
        </a>
        <Link
            to="meshProject"
            smooth={true}
            duration={800}
        >
        <div>
          <p>View Project Details</p>
        </div>
        </Link>
        </section>
        </section>

        <section className="projectDescription" id="meshProject">
            
            <div id="projectContainer">
                <div id="item1">
                    <div>
                    <img id="meshIntro" src={SproutIntro} alt="Sprout Intro Mobile Mockup" />
                    </div>
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">About the Sprout Project</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                </div>
                <div id="item2">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">About the Sprout Project</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                    <div>
                        <img id="meshIntro" src={SproutIntro} alt="Sprout Intro Mobile Mockup" />
                    </div>
                </div>
                <div id="item3">
                    <div>
                        <img id="meshIntro" src={SproutIntro} alt="Sprout Intro Mobile Mockup" />
                    </div>
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">About the Sprout Project</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                </div>
                <div id="item4">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">About the Sprout Project</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                    <div>
                        <img id="meshIntro" src={SproutIntro} alt="Sprout Intro Mobile Mockup" />
                    </div>
                </div>
            </div>

        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;