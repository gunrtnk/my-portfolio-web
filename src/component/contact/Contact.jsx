import React, { useRef, useState } from "react";
import "./Contact.css";
import Img1 from "../../img/6.svg";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  let [resetForm, resetInputField ] = useState(false);

  const [inputValue, setUserValue] = useState("");
  const [inputValue2, setEmailValue] = useState("");
  const [inputValue3, setMsgValue] = useState("");

  const handleUserInput = (e) => {
    setUserValue(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMsgInput = (e) => {
    setMsgValue(e.target.value);
  };

  resetInputField = () => {
    setUserValue("");
    setEmailValue("");
    setMsgValue("");
  };

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iiwy6qc",
        "template_qaumgpe",
        form.current,
        "VJMdp457kvLcqTiEd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);

          resetInputField(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <form ref={form} onSubmit={resetForm} className="c-form">
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="   Your Name"
                  value={inputValue}
                  onChange={handleUserInput}
                ></input>
                <input
                  type="email"
                  name="user_email"
                  className="email"
                  placeholder="   Your Email"
                  value={inputValue2}
                  onChange={handleEmailInput}
                ></input>
                <textarea
                  name="message"
                  className="usermsg"
                  placeholder="  Message"
                  value={inputValue3}
                  onChange={handleMsgInput}
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  name="user_name"
                  className="button ct"
                  onClick={sendEmail}
                ></input>
                <span>{done && "Thank you for contact me (:"}</span>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
