import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { IconContext } from "react-icons";
import { Roll } from "react-awesome-reveal";
import "./ContactPage.scss";

function ContactPage() {
  const [stateMessage, setStateMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  function sendEmail(e) {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
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
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    //clears the form after sending the email
    e.target.reset();
  }

  return (
    <div className="ContactPage" id="ContactPage" ref={ref}>
      {isVisible && (
        <>
          <div>
            <h1>Contact me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <br></br>
            <form onSubmit={sendEmail} className="contactForm">
              <label for="name">Name</label>
              <input
                className="inputForm"
                id="name"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
              <label for="email">Email</label>
              <input
                className="inputForm"
                id="email"
                type="email"
                name="reply_to"
                placeholder="Your email"
                required
              />
              <label for="message">Message</label>
              <textarea
                className="inputForm"
                id="message"
                name="message"
                placeholder="Your message here"
                rows="8"
                required
              />
              <div className="submitDiv">
                <button
                  type="submit"
                  className="blueBtn contactFormBtn"
                  style={{ textAlign: "center", margin: "30px 0", padding: "5px 30px" }}
                >
                  Send
                </button>
                <br />
                {isSubmitting ? "Sending message..." : ""}
                <div style={{ fontSize: "18px", textAlign: "center", margin: "-4% 0 4% 0" }}>
                  {stateMessage}
                </div>
              </div>
            </form>
          </div>
          <div className="letsConnect">
            <h1>Let's connect!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <br></br>

            <div className="logo-container">
              <Roll direction="left" className="roll" fraction={1} triggerOnce={true}>
                <a href="https://www.linkedin.com/in/thomas-augot" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: "white", size: "70px", className: "linkedInLogo" }}
                  >
                    <div>
                      <SlSocialLinkedin />
                    </div>
                  </IconContext.Provider>
                </a>
              </Roll>
              <Roll direction="left" className="roll" delay={400} fraction={1} triggerOnce={true}>
                <a
                  href="https://www.upwork.com/freelancers/~01b07aa7234690ca70?viewMode=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "70px", className: "upworkLogo" }}
                  >
                    <div>
                      <SiUpwork />
                    </div>
                  </IconContext.Provider>
                </a>
              </Roll>
              <Roll direction="left" className="roll" delay={800} fraction={1} triggerOnce={true}>
                <a href="https://github.com/thomasaugot" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: "white", size: "67px", className: "githubLogo" }}
                  >
                    <div>
                      <AiFillGithub />
                    </div>
                  </IconContext.Provider>
                </a>
              </Roll>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactPage;
