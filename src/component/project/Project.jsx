// import React from "react";
import "./Project.css";
// import { Swiper, SwiperSlide } from "swiper/react";

import Fn from "../../img/final.png";
import Dt from "../../img/pjdata.jpeg";
import Ws from "../../img/wesell.jpeg";

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
        <div className="img-size">
          <img className="pj-img" src={Fn} alt="" />
        </div>
        <div className="pj-detail">
          <div>Final-Year Project</div>
          <div>front end</div>
          <p>
            The final year project is an inventory management system for The
            Department of Computer Science. This project is a website that my
            partner and I created by using react.js and node.js to implement and
            we use the UI framework is Ant Design for building front end of this
            project .
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
        <div className="img-size">
          <img className="pj-img" src={Ws} alt="" />
        </div>
        <div className="pj-detail">
          <div>Project in class</div>
          <div>developer</div>
          <p>
            This is a project of business computing and electronic commerce
            course. I created a website with basic PHP languages, This project consists of 
            basic register, login, in user role can post anything to sell and admin role can edit detail user.
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
        <div className="img-size">
          <img className="pj-img" src={Dt} alt="" />
        </div>
        <div className="pj-detail">
          <div>Project in class</div>
          <div>data mining</div>
          <p>
            Project data mining from Data-Driven Decision making for business
            courses. I used Python for scraping data 'used car price' from website and used data analysis for 
            prediction price regression from year car and kilometers driven by CRISP-DM process.
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
              delay: 8500,
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
