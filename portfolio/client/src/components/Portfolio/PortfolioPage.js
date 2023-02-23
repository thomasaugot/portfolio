import Carousel from "react-bootstrap/Carousel";
import "./PortfolioPage.scss";

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      capture1: require("./partymates1.png"),
      capture2: require("./partymates2.png"),
      capture3: require("./partymates3.png"),
      name: "Partymates",
      description:
        "I developed this application as my third and last project during a full stack web development program at Ironhack. It is a social media platform that connects users looking for party mates",
      stack:
        "The application is fully responsive, following the mobile first approach and uses the following technologies: HTML, CSS, Bootstrap, React, Express, Node.js, MongoDB and is interacting with a REST API that I builded.",
      linkRepo: "https://github.com/thomasaugot/app-partymates-client",
      linkDemo: "https://partymates.netlify.app/",
    },
    // {
    //   id: 2,
    //   capture1: require(""),
    //   capture2: require(""),
    //   capture3: require(""),
    //   name: "The Broke Globetrotter",
    //   description: "lorem shsd ssa asd",
    //   stack: "",
    //   linkRepo: "",
    //   linkDemo: "",
    // },
    // {
    //   id: 3,
    //   capture1: require(""),
    //   capture2: require(""),
    //   capture3: require(""),
    //   name: "Pickle Rick vs Rats - The Game",
    //   description: "zdzad, zadzdzadzdjzhdzd zjzuzb",
    //   stack: "",
    //   linkRepo: "",
    //   linkDemo: "",
    // },
  ];

  return (
    <div className="PortfolioPage">
      <h1>My work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      <br></br>
      <div className="portfolioContent">
        {projects.map((project) => {
          return (
            <>
              <Carousel className="carousel bg-transparent">
                <Carousel.Item className=" carouselItem">
                  <div class="card" id={project.id}>
                    <img src={project.capture1} alt="..." />
                    <div class="card-body bg-transparent">
                      <h5 class="card-title bg-transparent">{project.name}</h5>
                      <p class="card-text bg-transparent">{project.description}</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                  <div class="card">
                    <img src={project.capture2} alt="..." />
                    <div class="card-body">
                      <p class="card-text">{project.stack}</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                  <div class="card">
                    <img src={project.capture3} alt="..." />
                    <div class="card-body">
                      <a href={project.linkRepo} class="blueBtn">
                        View Code
                      </a>
                      <a href={project.linkDemo} class="whiteBtn">
                        Visit page
                      </a>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </>
          );
        })}
      </div>
      <br></br>
    </div>
  );
}

export default PortfolioPage;
