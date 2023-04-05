import { useEffect, useState } from "react";
import "./AboutPage.scss";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="AboutPage" id="AboutPage" ref={ref}>
      {isVisible && (
        <Slide direction={"left"}>
          <h1 style={{ marginTop: "2vh" }}>About me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <br></br>

          <p>
            I am a French web developer based in the beautiful island of Fuerteventura, where the
            summer never ends. After 10 years travelling around the world I found myself a passion
            for coding and quit my old job to enroll in a web development bootcamp. Although I spent
            most of my professional career in the hospitality industry, which gave me the
            opportunity to develop excellent soft and interpersonal skills while also giving me the
            opportunity to travel and gain new experiences, I always dreamed of a more flexible
            career that would allow me to think creatively and learn new things every day. With
            everything moving towards the digital world, I believe that I can make a meaningful
            contribution to help businesses increase their online presence and visibility.
          </p>
        </Slide>
      )}
    </div>
  );
}

export default AboutPage;
