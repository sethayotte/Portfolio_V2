import React from "react";

import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

const Contact = () => {
    return (
        <React.Fragment>
        <section className="pageContainer" id="contactPageContainer">
          <h1 className="pageHeader" id="contact-header">Let's Connect.</h1>

          <p id="contact-copy">Feel free to check out my GitHub & LinkedIn for additional details about my work, or get in touch through email.</p>

          <div>
          <div className="contact-platform-buttons">
            <div>
            < a href="https://github.com/sethayotte" target="_blank">
              <img className="socialConnectIcon" src={githubIcon}/>
              </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/sethayottemitchell/" target="_blank">
              <img className="socialConnectIcon" src={linkedinIcon}/>
              </a>
            </div>
          </div>
            <a href="mailto:sayotte.mitchell@gmail.com?subject=Howdy!">
            <div className="emailConnectContainer">
              <h2 className="emailConnectButton">Send an Email</h2>
            </div>
            </a>
          </div>
        
          {/* <div id="connect-copy">
    <p>Feel free to check out my GitHub & LinkedIn for additional details about my work, or get in touch through email.</p>
  </div>

  <div className="connect-blocks">
    <div className="social-buttons" id="connect-social-buttons">
      <div>
        <a className="social-icon mr-4" href="https://github.com/sethayotte" target="_blank">
          <img src="assets/github-icon.png" height="30" className="d-inline-block align-center" alt="">
        </a>
      </div>

      <div>
        <a className="social-icon ml-4" href="https://www.linkedin.com/in/sethayottemitchell/" target="_blank">
          <img src="assets/linkedin-icon.png" height="30" className="d-inline-block align-center" alt="">
        </a>
      </div>
    </div>

    <div className="email-button">
      <a href="mailto:sayotte.mitchell@gmail.com?subject=Howdy!">
        <h2>send an email</h2>
      </a>
    </div>
  </div> */}
        </section>
      </React.Fragment>
    );
}

export default Contact;