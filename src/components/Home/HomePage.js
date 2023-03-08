import "animate.css";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage" id="HomePage">
      <div className="topContent">
        <div className="firstColumn">
          <div className="titleDiv">
            <h1
              className="animate__animated animate__fadeInLeft homepageTitle"
              style={{ textDecoration: "none" }}
            >
              &lt; Hi! I am Thomas,
            </h1>
            <h1
              className="animate__animated animate__fadeInLeft animate__delay-1s homepageTitle bluetext"
              style={{ textDecoration: "none" }}
            >
              Web Developer /&gt;
            </h1>
          </div>
          <p className="homepageP">
            I bring your project to life using the latest development technologies
          </p>
        </div>
        <br></br>

        <div className="secondColumn">
          <img src={require("./profile-picture.png")} alt="profile" className="profilePicure" />
        </div>
      </div>

      <div className="position-relative linkDiv">
        <a href="#AboutPage" className="stretched-link linkAbout">
          <div class="container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
