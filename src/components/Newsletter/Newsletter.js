import React, { useState } from "react";
import "./Newsletter.scss";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [stateMessage, setStateMessage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStateMessage("Thanks for subscribing!");
    setEmail("");
    setTimeout(() => {
      setStateMessage(null);
    }, 5000); // hide message after 5 seconds
  };

  return (
    <div className="NewsletterSubscription">
      <h2>Subscribe to my Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="blueBtn contactFormBtn"
          style={{ textAlign: "center", margin: "30px 0", padding: "5px 30px" }}
        >
          Subscribe
        </button>
      </form>
      <div className="feedback-message">{stateMessage && <div>{stateMessage}</div>}</div>
    </div>
  );
};

export default NewsletterSubscription;
