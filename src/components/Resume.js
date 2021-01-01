import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import sethHeadshot from '../assets/SethMitchell_Headshot.jpg';
import connectIcon from "../assets/connect-icon.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import resume from "../assets/Resume_2021.pdf";


const Resume = () => {
    return (
        <React.Fragment>
        <section className="pageContainer" id="resumePage">
          <h1 className="pageHeader">Resume</h1>

          <section className="resume-body">

    <section className="about-me">
      <div className="content-block" id="resume-profile">
        <div>
        <img src={sethHeadshot} alt="Seth's Headshot"/>
      </div>
      <div>
        <h1>Seth Mitchell</h1>
        <h3>Software Engineering, Design, Systems</h3>
      </div>
      </div>
      <div className="content-block" id="contact-resume">
      <div className="connect-blocks">
        <div className="social-buttons">
          <div>
            <a className="social-icon" href="https://github.com/sethayotte/" target="_blank" rel="noreferrer">
              <img src={githubIcon} height="30" alt="github" />
            </a>
          </div>
          <div>
            <a className="social-icon" href="https://www.linkedin.com/in/sethayottemitchell/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} height="30" alt="linkedIn" />
            </a>
          </div>
          <div>
            <a className="social-icon" href="/Contact">
              <img src={connectIcon} height="30" alt="connect" />
            </a>
          </div>
        </div>
        </div>
        </div>
    </section>

  <section className="education">
    <div className="section-title">
      <h2>Education</h2>
    </div>

    <div className="content-block">
      <div className="iblock">
        <div className="resume-detail">
          <div className="detail-title">
            <p>NuCamp Coding Bootcamp</p>
          </div>
          <div>
            <p>Certificate in Full Stack Web Development,</p>
            <p>Desktop & Mobile Software Engineering</p>
          </div>
        </div>
        <div className="resume-date">
          <p>July 2020 - December 2020</p>
        </div>
      </div>

      <div className="iblock">
        <div className="resume-detail">
          <div className="detail-title">
            <p>freeCodeCamp</p>
          </div>
          <div>
            <p>Foundations in Full Stack Web Development,</p>
            <p>Computer Software Engineering</p>
          </div>
        </div>
        <div className="resume-date">
          <p>April 2020 - Present</p>
        </div>
      </div>

      <div className="iblock">
        <div className="resume-detail">
          <div className="detail-title">
            <p>Virginia Commonwealth University</p>
          </div>
          <div>
            <p>Bachelor of Fine Arts in Graphic Design</p>
            <p>Class of 2018, Cum Laude</p>
          </div>
          </div>
          <div className="resume-date">
            <p>August 2014 - December 2018</p>
          </div>
        </div>
    </div>
  </section>

  <section className="experience">
    <div className="section-title">
      <h2>Work / Experience</h2>
    </div>
    
    
    <div className="content-block">
      <div className="iblock">
      <div className="resume-detail">
        <div className="detail-title">
          <p>Compass Group, Talent & Development</p>
        </div>
        <div>
          <p>Charlotte, NC</p>
          <p>Visual Designer, System Implementation</p>
        </div>
      </div>
      <div className="resume-date">
        <p>November 2019 - Present</p>
      </div>
      </div>

      <div className="iblock">
      <div className="resume-detail">
        <div className="detail-title">
          <p>Tesla, Inc.</p>
        </div>
        <div>
          <p>Richmond, VA</p>
          <p>Tesla Advisor, Sales Marketing</p>
        </div>
      </div>
      <div className="resume-date">
        <p>September 2018 - October 2019</p>
      </div>
      </div>

      <div className="iblock">
      <div className="resume-detail">
        <div className="detail-title">
          <p>Virginia Commonwealth University</p>
        </div>
        <div>
          <p>Richmond, VA</p>
          <p>Graphic Design Intern</p>
        </div>
      </div>
      <div className="resume-date">
        <p>May 2018 - December 2019</p>
      </div>
      </div>

      <div className="iblock">
      <div className="resume-detail">
        <div className="detail-title">
          <p>Apple, Inc.</p>
        </div>
        <div>
          <p>Richmond, VA</p>
          <p>Visual Merchandising Specialist</p>
        </div>
      </div>
      <div className="resume-date">
        <p>June 2015 - August 2018</p>
      </div>
      </div>
    </div>
  </section>

  <section className="proficiencies">
    <div className="section-title">
      <h2>Proficiencies</h2>
    </div>

    <div className="content-block">
    <div className="iblock">
      <div className="skills-detail">
        <div className="skills-title">
          <p>Technologies</p>
        </div>
        <div className="skills-list">
          <ul>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>CSS / SCSS</li>
            <li>JavaScript</li>
            <li id="indent">React</li>
            <li id="indent">React Native</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="iblock">
      <div className="skills-detail">
        <div className="skills-title">
          <p>Design</p>
        </div>
        <div className="skills-list">
          <ul>
            <li>Sketch</li>
            <li>Adobe Creative Suite</li>
            <li id="indent">Illustrator</li>
            <li id="indent">InDesign</li>
            <li id="indent">Photoshop</li>
            <li id="indent">After Effects</li>
            <li id="indent">Premiere</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="iblock">
      <div className="skills-detail">
        <div className="skills-title">
          <p>Workflow</p>
        </div>
        <div className="skills-list">
          <ul>
            <li>VS Code</li>
            <li>Design Thinking</li>
            <li>Agile</li>
            <li id="indent">Jira</li>
            <li id="indent">Confluence</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  </section>

</section>

<section className="downloadButton">
<h4 className="sectionLink" id="resumeDownload">
              Looking to save? &nbsp;<a id="downloadLink" href={resume} target="_blank" rel="noreferrer">Download a copy <FontAwesomeIcon icon='arrow-circle-down'/></a>
          </h4>
</section>

        </section>
      </React.Fragment>
    );
}

export default Resume;
