import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import GarageHero from '../../assets/GarageHero.png';

const SethsGarage = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="garagePage">
        <section id="developmentHeader">
        <h1 className="projectHeader" id="dev">Seth's Garage</h1>
        <img id="garageHero" src={GarageHero} alt="Development Hero Mockup" />
        </section>

        <section id="garage-tagline-resources">
        <p className="tag" id="WIP">Work In Progress</p>
        <h2 id="garage-tagline">An interactive archive of<br />past & present vehicles.</h2>
        <section id="document-container">
        <a href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
        <div>
          <p>View GitHub Repository</p>
        </div>
        </a>
        <Link
            to="garageProject"
            smooth={true}
            duration={800}
        >
        <div>
          <p>View Project Details</p>
        </div>
        </Link>
        </section>
        </section>

        <section className="projectDescription" id="garageProject">
          <div className="objectiveBody"> 
          <h4 className="descriptionSubheading" id="garageSubheading">Project Objective</h4>
          <p className="descriptionBody" id="garageDescription"> 
          Starting with my first web design at VCU, I was introduced to HTML, CSS, and Processing.  While I was interested in and had a passion for software and design, I was unsure where these two disciplines came together.  I continued on into graphic design and eventually moved into a design position for learning and development.  As this department was growing, our tools and learning platform needed an upgrade.  Ultimately we would be building a new learning management system.<br /><br />

          While this platform would be technically complex in order to support all of the features that our team required, design was a key element.  As the only designer on the team, I would be in charge of architecting a system that offers ease of use and an aesthetic incentive for users to come back day after day.<br /><br />

          I began looking into more advanced HTML & CSS, with the addition of JavaScript and React framework.  However, this was the start of March 2020.  It wasn’t long until we were all remote and our focused shifted to supporting the business with COVID compliance trainings.  But I continued on with my training at night.<br /><br />

          The Sprout project (details can be found here), really was the catalyst that assured me of my interest and commitment to learning about software development.  While the final project never saw the light of day, the ability to be apart of a project that was rooted in purpose and required me to learn on the fly gave me an excitement and a drive to solve problems.<br /><br />

          Moving beyond this project and its affirmation of my focus — I continued on with my full-stack course work.  I needed to create a project that I would build along side the curriculum.  Creating a project to document my skillset and growth as a developer, it was crucial to pick something unique and in which I have a personal interest.  Browsing lists of ‘project ideas’ there are dozens of posts and suggestions to build a todo app, a calculator, or a social media clone.  While I use each of these items everyday, they all have versions of apps that I really like and that I didn’t feel I had much to offer as a budding developer. <br /><br />

          With a passion for personal finance, I came up with my concept for Everyday Portfolio (details can be found here).  While I do use a wide range of financial applications, each one exists within their own world i.e., banks, brokerages.  I found that I was looking for a utility that could house all of my positions and show me a daily gain/loss.  This product would solve a problem that I had and hopefully others as well.  This project is currently	a work in progress but the components and functionality currently in place are a strong representation of my skillset as a developer.  As it moves forward and eventually launches on the App Store, I will be sharing any updates here.<br /><br />

          I have had an exciting year since cracking the code on how I can successfully conflate my design skillset with software development.  I cannot wait for the years to come to see what else I am able to create.
          </p>
          </div>
          <div className="detailsBody" id="garageDetails">
          <h4 className="descriptionSubheading" id="garageSubheading">Project Details</h4>
          <p className="descriptionBody" id="garageDescription">
            <div className="role-timeline">
            <strong>My Role:&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
            Personal Project,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lead Developer & Designer
            <br /><br />
            <strong>Timeline:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            October 2020 - Present
            <br /><br />
            </div>
            <div className="technology-skills">
            <strong>Technologies & Skills Used:</strong><br />
            <p className="tag" id="garageTag">React</p>
            <p className="tag" id="garageTag">HTML5</p>
            <p className="tag" id="garageTag">SCSS</p>
            <p className="tag" id="garageTag">Sketch</p>
            <p className="tag" id="garageTag">Adobe Illustrator</p>
            </div>
          </p>
          </div>
        </section>
      </section>
      </React.Fragment>
    );
}

export default SethsGarage;

