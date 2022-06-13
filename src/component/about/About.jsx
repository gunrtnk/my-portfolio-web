import React from "react";
import "./About.css";
import Resume from "./resume_rattanakorn.pdf";
import Icons from "../../img/2.svg";

const About = () => {
  return (
    <div className="About-container" id="About">
      <div className="a-sub">
      <div className="a-left">
        <div className="a-text">About Me</div>

        <div className="a-textsub">
          &nbsp; &nbsp; <span> My name is Rattanakorn Chongruaiklang,</span>
          <span>
          
            I have just finished Computer Science. And now i'm interested in
            application development.
          </span>
        </div>
        <img src={Icons} className="icons"></img>
      </div>

      <div className="a-right">
        <div className="a-education">Education</div>
        <div className="a-detail">
          <div>
            <h3>&nbsp; &nbsp; 2018 – 2022 </h3>
            <h4>Bachelor of Computer Science </h4>

            <p>Thammasat University, Pathum Thani, Thailand</p>
          </div>
          <div>
            <h3> &nbsp; &nbsp;2015-2018</h3>
            <h4>High School </h4>
            <p>Thaisamakkee School, Nakhon Ratchasima, Thailand</p>
          </div>
        </div>
        <a href={Resume} download>
          <button className="button resume">get my resume</button>
        </a>
      </div>
    </div></div>
  );
};

export default About;
