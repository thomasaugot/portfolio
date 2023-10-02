import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import profileImage from "./profile.png";
import { useEffect, useState } from "react";
import "./AboutPage.scss";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

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
    <div className={`AboutPage ${isDesktop && inView ? "visible" : ""}`} ref={ref} id="AboutPage">
      <Slide direction="down" triggerOnce={true} fraction={1} delay={100}>
        <h1 className="gradient-underline" style={{ marginTop: "2vh" }}>
          {t("About me")}
        </h1>
      </Slide>
      <br />
      <div className="about__content">
        <Slide direction="down" triggerOnce={true} fraction={1}>
          <p>
            {t(
              "I am a French Full-Stack developer with a specialization in React.js, currently based on the beautiful island of Fuerteventura. After 10 years of travelling around the world, I found myself a passion for coding so I decided to enroll in a web development bootcamp at Ironhack."
            )}
            <br />
            <br />
            {t(
              "Although I spent most of my professional career in hospitality, which gave me the opportunity to travel, work anywhere and experience the life of a globetrotter, I had always dreamed of something more flexible, in which I could think creatively, feel proud of and learn new things every day. With everything moving towards the digital world, I believe that I can make a meaningful contribution to help businesses, people and whoever needs it increase their online presence and visibility."
            )}
            <br />
            <br />
            {t(
              "With experience in both front- and back-end development, I have found myself particularly interested in design and user experience. I enjoy browsing libraries, keeping up with web design trends, and searching for creative ways of solving complex challenges through my code. Eager to become a front-end wizard one day, I also recently started using serverless technologies so I can focus on what I consider the fun part."
            )}
            <br />
            <br />
            {t(
              "Recently, I also started learning and building native mobile apps using React Native CLI & Expo."
            )}
          </p>
        </Slide>
        <Slide direction="up" triggerOnce={true} fraction={1}>
          <img src={profileImage} alt="profile" className="profilePicture" />
        </Slide>
      </div>
    </div>
  );
}

export default AboutPage;
