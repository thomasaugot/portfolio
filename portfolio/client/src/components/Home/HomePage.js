import "animate.css";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage" id="HomePage">
      <div className="topContent">
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
        <img src={require("./profile-picture.png")} alt="profile" className="profilePicure" />
      </div>
      <br></br>
      <p className="homepageP">
        I bring your design to life using the latest development technologies
      </p>
      <a href="#AboutPage">
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </a>
    </div>
  );
}

export default HomePage;
