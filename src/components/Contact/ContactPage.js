import { useRef, useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import "./ContactPage.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [stateMessage, setStateMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { t } = useTranslation();
  const form = useRef();

  function sendEmail(e) {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Thomas",
      from_name: form.current.from_name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs
      .send("service_arvg63a", "contact_form_portfolio", templateParams, "tJE4pvbpWA5LNecY3")
      .then(
        (result) => {
          setStateMessage("Message sent !");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clear the form after sending the email
    e.target.reset();
  }

  return (
    <div className="ContactPage" id="ContactPage">
      <div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <h1 className="gradient-underline">{t("Contact me")}</h1>
        </motion.div>
        <br></br>
        <motion.div
          whileInView={{ x: 1, opacity: 1 }}
          initial={{ x: "-100%", opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          <form onSubmit={sendEmail} ref={form} className="contactForm">
            <label htmlFor="name">{t("Name")}</label>
            <input
              className="inputForm"
              id="name"
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />
            <label htmlFor="email">{t("Email")}</label>
            <input
              className="inputForm"
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <label htmlFor="message">{t("Message")}</label>
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
                {t("Send")}
              </button>
              <br />
              {isSubmitting ? "Sending message..." : ""}
              <div style={{ fontSize: "18px", textAlign: "center", margin: "-4% 0 4% 0" }}>
                {stateMessage}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="letsConnect">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="text-gradient"
        >
          <h1 className="gradient-underline">{t("Let's connect!")}</h1>
        </motion.div>
        <br></br>

        <div className={`logo-container visible`}>
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "110%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="text-gradient"
          >
            <a href="https://www.linkedin.com/in/thomas-augot" target="_blank" rel="noreferrer">
              <IconContext.Provider
                value={{ color: "white", size: "70px", className: "linkedInLogo" }}
              >
                <div>
                  <SlSocialLinkedin />
                </div>
              </IconContext.Provider>
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "110%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-gradient"
          >
            <a href="https://github.com/thomasaugot" target="_blank" rel="noreferrer">
              <IconContext.Provider
                value={{ color: "white", size: "67px", className: "githubLogo" }}
              >
                <div>
                  <AiFillGithub />
                </div>
              </IconContext.Provider>
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "110%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="text-gradient"
          >
            <a href="https://medium.com/@thomasaugot" target="_blank" rel="noreferrer">
              <IconContext.Provider
                value={{ color: "white", size: "67px", className: "mediumLogo" }}
              >
                <div>
                  <BsMedium />
                </div>
              </IconContext.Provider>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
