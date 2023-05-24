import React from "react";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import profileImage from "./profile.png";
import "./AboutPage.scss";

function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div className={`AboutPage ${inView ? "visible" : ""}`} ref={ref} id="AboutPage">
      <Slide direction="down" triggerOnce={true} fraction={1} delay={100}>
        <h1 style={{ marginTop: "2vh" }}>About me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      </Slide>
      <br />
      <div className="about__content">
        <Slide direction="down" triggerOnce={true} fraction={1}>
          <p>
            I am a French web developer with a specialization in React, currently based on the
            beautiful island of Fuerteventura, where the summer never ends. After 10 years of
            travelling around the world, I found myself a passion for coding and quit my old job to
            enroll in a web development Bootcamp.
            <br />
            <br />
            Although I spent most of my professional career in the hospitality industry, which
            allowed me to develop excellent soft and interpersonal skills while also giving me the
            opportunity to travel and gain new experiences, I had always dreamed of a more flexible
            career in which I could think creatively and learn new things every day. With everything
            moving towards the digital world, I believe that I can make a meaningful contribution to
            help businesses increase their online presence and visibility.
            <br />
            <br />
            With experience in both front- and backend development, I have found myself particularly
            interested in design and user experience. I enjoy browsing libraries, keeping up with
            web design trends, and searching for creative ways of solving complex challenges through
            my code.
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
