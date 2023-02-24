import React from "react";
import * as emailjs from "emailjs-com";
import "./ContactPage.scss";

function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID").then(
      (result) => {
        alert("email sent successfully");
      },
      (error) => {
        alert("error sending email");
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
          placeholder="Let's talk about it..."
        />
        <button type="submit" className="blueBtn" style={{ textAlign: "center", padding: "5px 0" }}>
          send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
