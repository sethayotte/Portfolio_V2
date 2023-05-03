import React from "react";
import EPHero from "../assets/Projects_Hero-08.png";
import RunAwayHero from "../assets/RunAway_Hero.png";
import WebsiteHero from "../assets/Projects_Hero-10.png";
import GarageHero from "../assets/Projects_Hero-09.png";
import SproutHero from "../assets/Project_Hero_Tiles-06.png";
import MeshHero from "../assets/Project_Hero_Tiles-05.png";

const Projects = () => {
  return (
    <React.Fragment>
      <section className="pageContainer" id="projectsPage">
        <h1 className="pageHeader">Current Projects</h1>
        <div className="currentItems">
          {/* <div id="TheBlocks">
            <a href="/#/The-Blocks">
              <img
                src={WebsiteHero}
                className="projectImage"
                id="BlocksImage"
                alt="The Blocks Hero"
              />
            </a>
          </div>
          <div id="Compound">
            <a href="/#/Compound">
              <img
                src={WebsiteHero}
                className="projectImage"
                id="CompoundImage"
                alt="Compound Calculator Hero"
              />
            </a>
          </div> */}
          <div id="Website">
            <a href="/#/Development-Repository">
              <img
                src={WebsiteHero}
                className="projectImage"
                id="WebImage"
                alt="Development Site Hero"
              />
            </a>
          </div>
          <div id="EP">
            <a href="/#/Everyday-Portfolio">
              <img
                src={EPHero}
                className="projectImage"
                id="EPImage"
                alt="Everyday Portfolio Hero"
              />
            </a>
          </div>
        </div>
        <h1 className="pageHeader">Past Projects</h1>
        <div className="pastItems">
          <div id="RunAway">
            <a href="/#/SpaceX-Dashboard">
              <img
                src={RunAwayHero}
                className="projectImage"
                id="RunAwayImage"
                alt="Everyday Portfolio Hero"
              />
            </a>
          </div>
          <div id="Sprout">
            <a href="/#/Sprout">
              <img
                src={SproutHero}
                className="projectImage"
                id="SproutImage"
                alt="Everyday Portfolio Hero"
              />
            </a>
          </div>
          <div id="Mesh">
            <a href="/#/Mesh">
              <img
                src={MeshHero}
                className="projectImage"
                id="MeshImage"
                alt="Development Site Hero"
              />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
