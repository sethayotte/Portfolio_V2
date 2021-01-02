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
                        Built as a tool to allow multidisciplinary communication, students have access to easily chat with other majors and departments.  Creating group threads and tagging conversations for specific projects is very easy to do.
                        </p>
                    </div>
                </div>
                <div className="projectPoint" id="item2">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Collaboration</h4>
                        <p>
                        With this communication and collaboration hub, Mesh makes it easy to share and post content and materials.  If you have books, materials, or services that you would like to sell or give away - Mesh gives you a platform that shares your content with an engaged community.
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
                        A problem Mesh sets out to solve is making all of the resources the university offers accessible to all.  A large number of students come into VCU and work through their whole program without learning about what faculty, services, or equipment the school has for them.  By making all of this content within reach to the Arts community creates opportunity to add a whole new dimension to students’ work.
                        </p>
                    </div>
                </div>
                <div className="projectPoint" id="item4">
                    <div id="meshCopy">
                        <h4 className="descriptionSubheading">Arts & Design Focused</h4>
                        <p>
                        Initially designing Mesh, my idea included the entire university.  I quickly realized that this would require to include way too many department and resources and would lose its effectiveness for the target audience - the art & design students.  By narrowing the scope of which areas of the school would be included, the tools and functionality became much easier to access.  This also allowed for the vision of more interdisciplinary communication to become real.  Common interest and focus provides a platform for more meaningful discussion and collaboration.
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