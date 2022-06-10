import React from "react";
import "./Skill.css";
import Icons from "../../img/3.svg";
import Ic from "../../img/13.svg";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <div className="skill-container" id="Skill">
      <div className="sub-con">
        <div className="hard-skill">

          <div>
            <div className="s-text">My Basic Skill</div>
            <img src={Ic} className="ii"></img>
            <div className="skill">
              <div className="skill-con1">
              <ul>
               
                <li className="s-html">html</li>
                <li className="s-css">css</li>
                <li className="s-js">javaScript</li>
                <li className="s-react">react</li>
              </ul></div>
              <div></div>
              <div></div>

              <div className="skill-con2">
                <ul>
                  
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Team Work</li>
                  <li>Stress management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="soft-skill">
          <motion.div
            // initial={{rotate: 10}}
            // whileInView={{rotate:0 }}
            // viewport={{margin: '-40px'}}
            // transition={{duration:3.5, type: 'spring'}}

            className="s-main-cy"
          >
            <motion.div 
             initial={{ left: "56%" }}
             whileInView={{ left: "35%" }}
             transition={{duration:2, type: 'spring'}}

            className="s-html">
              <i class="fa-brands fa-html5"></i>
            </motion.div>

            <motion.div 
            initial={{ left: "-56%" }}
            whileInView={{ left: "-20%" }}
            transition={{duration:2, type: 'spring'}}
            className="s-css">
              <i class="fa-brands fa-css3-alt"></i>
            </motion.div>


            <motion.div 
            initial={{ left: "56%" }}
            whileInView={{ left: "35%" }}
            transition={{duration:2, type: 'spring'}}
            className="s-js">
              <i class="fa-brands fa-js-square"></i>
            </motion.div>


            <motion.div 
            initial={{ left: "-56%" }}
            whileInView={{ left: "-20%" }}
            transition={{duration:2, type: 'spring'}}
            className="s-react">
              <i class="fa-brands fa-react"></i>
            </motion.div>

            {/* <p>Communication</p>
            <p>Problem Solving</p>
            <p>Public speaking</p>
            <p>Teamwork</p> */}
          </motion.div>
          <img src={Icons} className="icons"></img>
        </div>
      </div>
    </div>
  );
};

export default Skill;
