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
        <>
          <Slide direction={"up"}>
            <h1 style={{ marginTop: "2vh" }}>About me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          </Slide>
          <br></br>

          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Slide direction={"up"} delay={100}>
              <p>
                I am a French web developer based on the beautiful island of Fuerteventura, where
                the summer never ends. After 10 years of travelling around the world, I found myself
                a passion for coding and quit my old job to enrol in a web development Bootcamp.
                <br />
                <br />
                Although I spent most of my professional career in the hospitality industry, which
                allowed me to develop excellent soft and interpersonal skills while also giving me
                the opportunity to travel and gain new experiences, I had always dreamed of a more
                flexible career in which I could think creatively and learn new things every day.
                With everything moving towards the digital world, I believe that I can make a
                meaningful contribution to help businesses increase their online presence and
                visibility.
                <br />
                <br />
                With experience in both front- and backend development, I found myself a particular
                taste for design and user experience. I enjoy browsing libraries, keeping up with
                web design trends, searching for new cool effects and integrate them to my projects.
              </p>
            </Slide>
            <Slide direction={"up"} delay={300}>
              <img src={require("./profile.png")} alt="profile" className="profilePicture" />
            </Slide>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutPage;
