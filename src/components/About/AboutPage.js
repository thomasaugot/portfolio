import React from "react";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import profileImage from "./profile.png";
import { useEffect, useState } from "react";
import "./AboutPage.scss";

function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isDesktop, setIsDesktop] = useState(false);

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
        <h1 style={{ marginTop: "2vh" }}>About me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      </Slide>
      <br />
      <div className="about__content">
        <Slide direction="down" triggerOnce={true} fraction={1}>
          <p>
            I am a French Full-Stack developer with a specialization in React.js, currently based on
            the beautiful island of Fuerteventura. After 10 years of travelling around the world, I
            found myself a passion for coding and after losing my old job I decided to enroll in a
            web development bootcamp at Ironhack.
            <br />
            <br />
            Although I spent most of my professional career in the hospitality industry, which
            allowed me to develop excellent soft and interpersonal skills while also giving me the
            opportunity to travel and gain new experiences, I had always dreamed of a more flexible
            career in which I could think creatively and learn new things every day. With everything
            moving towards the digital world, I believe that I can make a meaningful contribution to
            help people and businesses increase their online presence and visibility.
            <br />
            <br />
            With experience in both front- and back-end development, I have found myself
            particularly interested in design and user experience. I enjoy browsing libraries,
            keeping up with web design trends, and searching for creative ways of solving complex
            challenges through my code. Eager to become a front-end wizard one day, I also recently
            started using serverless technologies so I can focus on what I call "the fun part".
            <br />
            <br />
            To explore a bit more, I also learned and started building native mobile apps using
            React Native CLI & Expo, see my work below!
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
