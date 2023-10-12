import React, { useRef } from "react";
import profileImage from "./profile.png";
import { useEffect, useState } from "react";
import "./AboutPage.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AboutPage() {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current = document.getElementById("AboutPage");
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`AboutPage ${isDesktop ? "visible" : ""}`} id="AboutPage">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <h1 className="gradient-underline" style={{ marginTop: "2vh" }}>
          {t("About me")}
        </h1>
      </motion.div>
      <br />
      <div className="about__content">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.7,
            ease: "easeOut",
          }}
        >
          <p>
            {t(
              "I am a Full-Stack developer from France, specializing in React.js, currently based in sunny Fuerteventura."
            )}
            <br />
            <br />
            {t(
              "Being an ex-globetrotter, I bring a global perspective and the ability to tackle any challenges. As everything transitions to the digital realm, I am dedicated to making a meaningful contribution to enhance online presence and visibility for businesses and individuals alike."
            )}
            <br />
            <br />
            {t(
              "I enjoy working on both the front-end and back-end, crafting seamless digital experiences. Keeping up with the latest trends helps me ensure my work aligns with modern design and follows the best practices in web development."
            )}
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: "100%", opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 20,
            delay: 1.0,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.9 }}
        >
          <img src={profileImage} alt="profile" className="profilePicture" />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
