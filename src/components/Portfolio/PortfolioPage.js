import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-awesome-reveal";

import "./PortfolioPage.scss";

function PortfolioPage() {
  const projects = [
    {
      id: 5,
      capture1: require("./mobile-overlay.png"),
      capture2: require("./mobile-overlay.png"),
      capture3: require("./mobile-overlay.png"),
      name: "Todayzzz Todos",
      description:
        "!!UNDER CONSTRUCTION!! Just a simple todo app to practice Typescript and SCSS further, adding some cool React libraries",
      stack:
        "The app features: React, Typescript, SCSS, a drag & drop functionnality, a dark/light mode switch. I am currently developing the backend to enable account creation to save collections of todos.",
      linkRepo: "https://github.com/thomasaugot/typescript-todo-app",
      linkDemo: "https://todayzzz-todos.netlify.app/",
    },
    {
      id: 4,
      capture1: require("./farmhouse (2).png"),
      capture2: require("./farmhouse (1).png"),
      capture3: require("./farmhouse.png"),
      name: "Farmhouse Table",
      description:
        "I developed this fully responsive restaurant website to practice Typescript, responsive layouts and SASS",
      stack:
        "To build this app I used React, Typescript, SASS/SCSS and applied the mobile first workflow for styling. I also integrated Google Maps API and built the frontend of a reservation form, ready to be integrated to a server.",
      linkRepo: "https://github.com/thomasaugot/farmhouse-table-website",
      linkDemo: "https://farmhouse-table.netlify.app/",
    },
    {
      id: 1,
      capture1: require("./partymates1.png"),
      capture2: require("./partymates2.png"),
      capture3: require("./partymates3.png"),
      name: "Partymates",
      description:
        "I developed this full-stack application as my third and last project during a web development program at Ironhack. It is a social media platform that connects users looking for party mates",
      stack:
        "The app is fully responsive, following the mobile first workflow and features Bootstrap, React, Express, Node.js, MongoDB and is interacting with a REST API that I builded.",
      linkRepo: "https://github.com/thomasaugot/app-partymates-client",
      linkDemo: "https://partymates.netlify.app/",
    },
    {
      id: 2,
      capture1: require("./responsive-BGtrotter.png"),
      capture2: require("./BGtrotterCapture3.png"),
      capture3: require("./BGtrotterCapture2.png"),
      name: "The Broke Globetrotter",
      description:
        "I developed this full stack web application together with a classmate as a project during the web development program at Ironhack.",
      stack:
        "It is a platform gathering collections of free stuff to do in cities worldwide for budget travellers. It features backend technologies: Nodejs, Express.js, MongoDB. The frontend is rendered using Handlebars. Styling was made using CSS & Bootstrap",
      linkRepo: "https://github.com/project-web-app-cities/the-broke-globetrotter",
      linkDemo: "https://the-broke-globetrotter.adaptable.app/",
    },
    {
      id: 3,
      capture1: require("./game-capture1.png"),
      capture2: require("./game-capture2.png"),
      capture3: require("./game-capture3.png"),
      name: "Pickle Rick vs Rats - The Game",
      description:
        "I developed this shooting game as my first project during a web development program at Ironhack",
      stack:
        "Being a huge fan of Rick & Morty, no wonder I chose this theme! The game was entirely built using HTML, CSS & Javascript, and since you need a keypad for the commands, it is only playable on desktop",
      linkRepo: "https://github.com/thomasaugot/project-js-shooting-game",
      linkDemo: "https://pickle-rick-shooting-game.netlify.app/",
    },
  ];

  return (
    <div className="PortfolioPage" id="PortfolioPage">
      <Fade duration={2000}>
        <h1>My work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <br></br>
        <div className="portfolioContent">
          {projects.map((project) => {
            return (
              <div className="portfolioItem">
                <Carousel className="carousel bg-transparent noBootstrap">
                  <Carousel.Item className="noBootstrap carouselItem">
                    <div class="card" id={project.id}>
                      <img src={project.capture1} alt="..." />
                      <div class="card-body bg-transparent">
                        <h5 class="card-title bg-transparent">{project.name}</h5>
                        <p class="card-text bg-transparent">{project.description}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="bg-transparent carouselItem">
                    <div class="card">
                      <img src={project.capture2} alt="..." />
                      <div class="card-body">
                        <p class="card-text">{project.stack}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="bg-transparent carouselItem">
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
              </div>
            );
          })}
        </div>
        <br></br>
      </Fade>
    </div>
  );
}

export default PortfolioPage;
