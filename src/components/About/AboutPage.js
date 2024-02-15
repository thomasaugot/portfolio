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
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="gradient-underline"
        style={{ marginTop: "2vh" }}
      >
        {t("About me")}
      </motion.h1>
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
              "Hi there! I am Thomas, a Full-Stack developer hailing from Nantes, France. As an ex-globetrotter, I bring a global perspective and an insatiable appetite for challenges to the world of web development."
            )}
            <br />
            <br />
            {t(
              "In this ever-evolving digital landscape, my mission is crystal clear: elevate online presence and visibility for businesses and individuals alike. Whether it's crafting seamless front-end magic or diving deep into the back-end abyss, I enjoy creating remarkable digital experiences. Staying on the cutting edge of tech trends ensures that my work is always in sync with modern design principles and the best practices in web development."
            )}
            <br />
            <br />
            {t(
              "While my playground primarily revolves around Javascript and its captivating frameworks, I am never confined by boundaries and always seek to expand my skillset!"
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
