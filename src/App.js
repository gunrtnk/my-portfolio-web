import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";
import Profile from "./component/profile/Profile";
import Project from "./component/project/Project";
import Skill from "./component/skill/Skill";

function App() {
  return (
    <div className="App">
      <div className="apps">
        <div className="appss">
          <Navbar />
          <Profile />
          <About />
          <Skill />
          <Project />
          <Contact />
        </div>
      </div>
      <div className="footer">
        <div className="f-con">
          <div className="f-1">
            <div>Address</div>
            <div>Khlong luang, Pathum Thani</div>
            <div>call +66 616601651</div>
            <div>email Rattanakorn.crk@gmail.com</div>
          </div>
          <div className="f2">
            <div className="social2">
              <a href="https://github.com/gunrtnk">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rattanakorn/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gun.rtnk">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:Rattanakorn.crk@gmail.com">
              <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+66 61 660 1651">
              <i class="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="foot-port">
          {/* <div><hr/></div>
          <div>Portfolio</div>
          <div>Rattanakorn Chongruaiklang</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
