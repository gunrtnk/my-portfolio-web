// import React from "react";
import "./Project.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import IMG from "../../img/IMG_0195.jpeg";
import Fn from "../../img/pjfinal.png";
import Dt from "../../img/pjdata.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function pjslide() {
  return (
    <SwiperSlide>
      <div className="pj-card">
        <img className="pj-img" src={Fn} alt="" />
        <div className="pj-detail">
          <div>Final-Year Project (Aug2021-Dec2021)</div>
          <div>front end</div>
          <p>
            The final year project is an inventory management system for The
            Department of Computer Science. This project is a website that my
            partner and I created by using react.js and node.js to implement and
            we use the UI framework is Ant Design for building front end of this
            project.
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
}
function pjslide2() {
  return (
    <SwiperSlide>
      <div className="pj-card">
        <img className="pj-img" src={Fn} alt="" />
        <div className="pj-detail">
          <div>Project in class</div>
          <div>developer</div>
          <p>
            This is a project of business computing and electronic commerce
            course. I created a website with basic PHP languages and phpMyAdmin
            for managing a database.{" "}
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
}
function pjslide3() {
  return (
    <SwiperSlide>
      <div className="pj-card">
        <img className="pj-img" src={Dt} alt="" />
        <div className="pj-detail">
          <div>Guess Number</div>
          <div>developer</div>
          <p>This is a mini Project that i using JavaScript for building</p>
        </div>
      </div>
    </SwiperSlide>
  );
}
function pjslide4() {
  return (
    <SwiperSlide>
      <div className="pj-card">
        <img className="pj-img" src={Dt} alt="" />
        <div className="pj-detail">
          <div>Project in class</div>
          <div>data mining</div>
          <p>
            Project data mining from Data-Driven Decision making for business
            courses. I used Python for scraping data and analysis data by
            CRISP-DM process.
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
}

const Project = () => {
  return (
    <div className="pj-container" id="Project">
      <div className="pj-con">
        <div className="pj-content">
          <div className="pj-head">My Project</div>

          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {pjslide()}
            {pjslide2()}
            {pjslide3()}
            {pjslide4()}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
