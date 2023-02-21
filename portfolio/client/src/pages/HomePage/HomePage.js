import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage" id="HomePage">
      <div className="topContent">
        <h1 className="homepageTitle">
          Hi! I am Thomas, <br />
          Web Developer
        </h1>
        <img
          src={require("./profile-picture.png")}
          alt="profile"
          className="profilePicure"
        />
      </div>

      <p className="homepageP">
        I create your design
        using the latest development technologies
      </p>
    </div>
  );
}

export default HomePage;
