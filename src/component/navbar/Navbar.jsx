import React from "react";
import './Navbar.css';
import { Link } from "react-scroll";
//rafce
const Navbar = () => {
  return (
    <div className="navbar" id="Navbar">
      
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-name">RATTANAKORN C.</div>
          
        </div>
        <div className="nav-right">
          <div className="nav-list">
              <ul style={{listStyleType:"none"}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                  <li>Home</li>
                  
                </Link>

                <Link spy={true} to='About' smooth={true} >
                  <li>About</li></Link>

                  <Link spy={true} to='Skill' smooth={true} >
                  <li>Skill</li></Link>

                  <Link spy={true} to='Project' smooth={true} >
                  <li>Project</li></Link>

                  <Link spy={true} to='Contact' smooth={true} >
                  <li>Contact</li></Link>

              </ul>
              
          </div>
        </div>


        <div className="btn">
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
