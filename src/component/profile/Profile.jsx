import React from "react";
import "./Profile.css";
import ProfileIMG from "../../img/profile-pic.png";

import ReactTyping from "react-typing-effect";
import { motion, useMotionValue } from "framer-motion";

const Profile = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Profile" id="Profile">
      <div className="p-cycle">
        <div className="p-con">
          <div className="p-icon">
            {/* <div className="social">
              <a href="https://github.com/gunrtnk">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rattanakorn/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gun.rtnk">
                <i className="fab fa-instagram"></i>
              </a>
            </div> */}
          </div>
          <div className="p-left">
            <div className="intro-p">
              <h1>Hi,</h1>
              <p></p>
              <h1>I'm </h1>
              <p></p>
              <h1>
                <ReactTyping
                  text={[" G U N G U N", "Rattanakorn"]}
                  speed={200}
                  erasDelay={100}
                />
              </h1>
            </div>
            <div className="intro">Developer</div>
            <div className="social">
              <a href="https://github.com/gunrtnk">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rattanakorn/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gun.rtnk">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="p-fname"></div>
            <div className="p-lname"></div>

            {/* <button className="button cont">contact</button> */}
          </div>
          <div className="p-right">

            <div className="cycle">
              <motion.img
                initial={{ top: "30%" }}
                whileInView={{ top: "0%" }}
                transition={transition}
                src={ProfileIMG}
                className="p-img"
              />
            </div>
          </div>
          {/* <div className="stk">
            <motion.img
              initial={{ left: "-5%" }}
              whileInView={{ left: "-2%" }}
              transition={transition}
              src={IMG1}
              className="s1"
            />
            <motion.img
              initial={{ right: "-5%" }}
              whileInView={{ right: "-2%" }}
              transition={transition}
              src={IMG2}
              className="s2"
            />
          </div> */}
        </div>
        <motion.div
          initial={{ top: "-35%" }}
          whileInView={{ top: "-10%" }}
          transition={transition}
          className="scroll"
        >
          <div>scroll down</div>
          <i class="fa-solid fa-angles-down"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
