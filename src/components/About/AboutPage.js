import "./AboutPage.scss";
import { Fade } from "react-awesome-reveal";

function AboutPage() {
  return (
    <div className="AboutPage" id="AboutPage">
      <Fade duration={2000}>
        <h1 style={{ marginTop: "2vh" }}>About me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <br></br>

        <h2>&nbsp;My story</h2>

        <p>
          I was born in Saint-Nazaire, a little city on the North-Western coast of France, and grew
          up in a nearby country-side town. I enrolled at University and graduated in Business and
          languages at age 20. But I always wanted to see the world. So I chose to leave uni instead
          of pursuing a Master degree and spent the next 10 years around the world, exploring and
          experiencing life abroad, far from home. I am now living in the sunny Fuerteventura,
          Spain.
        </p>
        <br></br>
        <h2>&nbsp;Why Web Development?</h2>

        <p>
          My thirst for more freedom and creativity brought me to the world of web development. I
          wanted a flexible job that keeps me out of my routine and comfort zone, always teaching me
          and allowing me to create great things, to think outside the box. I started coding as a
          hobby first and then decided to build a career out of it. In a world where everything
          becomes digital, I really feel like I can contribute in a meaningful way and help
          increasing businesses online visibility.
        </p>
      </Fade>
    </div>
  );
}

export default AboutPage;
