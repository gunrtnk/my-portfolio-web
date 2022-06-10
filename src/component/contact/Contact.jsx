import React, { useRef, useState } from "react";
import "./Contact.css";
import Img1 from "../../img/6.svg";

import emailjs from '@emailjs/browser';
const Contact = () => {
  

    const form = useRef();
    const [done,setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_iiwy6qc', 'template_qaumgpe', form.current, 'VJMdp457kvLcqTiEd')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

return (
    <div>
      <div className="c-container" id="Contact">
        <div className="map">
          <img src={Img1}></img>
        </div>
        <div className="c-right">
          <div className="c-detail">
            <h2>CONTACT ME</h2>
            
            <div className="cf-con">
              <form ref={form} onSubmit={sendEmail} className="c-form">
                
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="   Your Name"
                ></input>
                <input
                  type="email"
                  name="user_email"
                  className="email"
                  placeholder="   Your Email"
                ></input>
                <textarea
                  name="message"
                  className="usermsg"
                  placeholder="  Message"
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  name="user_name"
                  className="button ct"
                ></input>
                <span>{done && "Thank you for contact me (:" }</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
