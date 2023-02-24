import React, { useState } from "react";
// import * as emailjs from "emailjs-com";
import emailjs from "emailjs-com";
import "./ContactPage.scss";

function ContactPage() {
  const [stateMessage, setStateMessage] = useState(null);

  function sendEmail(e) {
    e.persist();
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent !");
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
        }
      );
    //clears the form after sending the email
    e.target.reset();
  }
  return (
    <div className="ContactPage" id="ContactPage">
      <br></br>
      <br></br>
      <h1>Contact me</h1>
      <br></br>
      <form onSubmit={sendEmail} className="contactForm">
        <label for="name">Name</label>
        <input
          className="inputForm"
          id="name"
          type="text"
          name="from_name"
          placeholder="Your name"
        />
        <label for="email">Email</label>
        <input
          className="inputForm"
          id="email"
          type="email"
          name="reply_to"
          placeholder="Your email"
        />
        <label for="message">Message</label>
        <textarea
          className="inputForm"
          id="message"
          name="message"
          placeholder="Your message here"
        />
        <button type="submit" className="blueBtn" style={{ textAlign: "center", margin: "30px 0" }}>
          Send
        </button>
        <div style={{ fontSize: "5vw", textAlign: "center" }}>{stateMessage}</div>
      </form>
      <br></br>

      <h1>Let's connect !</h1>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <a href="https://www.linkedin.com/in/thomas-augot" target="_blank" rel="noreferrer">
          <img
            src="https://github.com/thomasaugot/thomasaugot/blob/main/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif?raw=true"
            width="70"
            alt="linkedin"
          />
          <a href="https://github.com/thomasaugot" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/thomasaugot/portfolio/16eacb1c4b0e913e8a02ad213b9eccbd6aaea969/portfolio/client/src/components/Contact/github-logo.gif"
              width="55"
              alt="github"
            />
          </a>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
