import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import SproutIntro from '../../assets/Sprout_Mobile.png';
import MeshHero from '../../assets/MeshMockup.png';
import MeshMobileHero from '../../assets/MeshMobileHero.png';
import Mesh1 from '../../assets/mesh_1.png';
import Mesh2 from '../../assets/mesh_2.png';
import Mesh3 from '../../assets/mesh_3.png';
import Mesh4 from '../../assets/mesh_4.png';


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
                <div className="projectPoint" id="item1">
                    <div>
                    <img id="meshIntro" src={Mesh1} alt="Sprout Intro Mobile Mockup" />
                    </div>
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Communication</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                </div>
                <div className="projectPoint" id="item2">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Collaboration</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                    <div>
                        <img id="meshIntro" src={Mesh2} alt="Sprout Intro Mobile Mockup" />
                    </div>
                </div>
                <div className="projectPoint" id="item3">
                    <div>
                        <img id="meshIntro" src={Mesh3} alt="Sprout Intro Mobile Mockup" />
                    </div>
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Resources</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                </div>
                <div className="projectPoint" id="item4">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Arts & Design Focused</h4>
                        <p>
                        With a passion for cars at a young age, I absolutely love driving and will always take the long winding road home if I can help it.  Each car I’ve owned has run with me through significant moments in my life and I wanted a place to hold a record of these vehicles and the hundreds of thousands of miles they’ve taken me.<br /><br />  

                        Seth’s Garage will be an archive of every car I’ve owned with basic specifications and mileage driven.  Down the road, I plan on implementing an OBD integration that will track mileage as I cruise along and will relay back to the site to show total miles driven during the collective lifetime of the fleet.
                        </p>
                    </div>
                    <div>
                        <img id="meshIntro" src={Mesh4} alt="Sprout Intro Mobile Mockup" />
                    </div>
                </div>
            </div>

        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;