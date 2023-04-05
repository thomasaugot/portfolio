import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

import "./PortfolioPage.scss";
import { useEffect, useState } from "react";

function PortfolioPage() {
  const projects = [
    {
      id: 5,
      capture1: require("./mobile-overlay.png"),
      capture2: require("./mobile-overlay.png"),
      capture3: require("./mobile-overlay.png"),
      name: "Todayzzz Todos",
      description:
        "!!UNDER CONSTRUCTION!! A simple drag & drop todo app to organize your daily tasks I built to practice Typescript, adding some cool React libraries",
      stack:
        "Tech stack: React, SCSS/SASS, Typescript. The app offers a dark/light mode switch. I am currently developing the backend to enable account creation & save collections of todos.",
      linkRepo: "https://github.com/thomasaugot/typescript-todo-app",
      linkDemo: "https://todayzzz-todos.netlify.app/",
    },
    {
      id: 4,
      capture1: require("./farmhouse (2).png"),
      capture2: require("./farmhouse (1).png"),
      capture3: require("./farmhouse.png"),
      name: "Farmhouse Table",
      description: "A restaurant website integrating Google Maps API and a reservation form",
      stack:
        "Tech stack: React, SCSS/SASS, Typescript, Bootstrap, external API integration, responsive layouts. The app is fully responsive following the mobile-first workflow",
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
        "A full-stack MERN sort of social media app I created to connect people so they can travel to festivals together",
      stack:
        "Tech stack: MongoDB, Express.js, React.js, Node.js, REST API (built by me), Postman. The app is fully responsive, following the mobile first workflow",
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
        " An app created in pairs, gathering collections of free stuff to do in cities worldwide featuring back-end technologies, for broke travellers (story of my life..!)",
      stack: "Tech stack: MongoDB, Express.js, Node.js, Bootstrap, Handlebars, Postman",
      linkRepo: "https://github.com/project-web-app-cities/the-broke-globetrotter",
      linkDemo: "https://the-broke-globetrotter.adaptable.app/",
    },
    {
      id: 3,
      capture1: require("./game-capture1.png"),
      capture2: require("./game-capture2.png"),
      capture3: require("./game-capture3.png"),
      name: "Pickle Rick vs Rats - The Game",
      description: "My first coding project, a cool Javascript shooting game, kill the angry rats!",
      stack:
        "Tech stack: HTML, CSS, Javascript. Since you need a keypad for the commands, it is only playable on desktop",
      linkRepo: "https://github.com/thomasaugot/project-js-shooting-game",
      linkDemo: "https://pickle-rick-shooting-game.netlify.app/",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="PortfolioPage" id="PortfolioPage" ref={ref}>
      {isVisible && (
        <Fade>
          <h1>My work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <br></br>
          <div className="portfolioContent">
            {projects.map((project) => {
              return (
                <div className="portfolioItem">
                  <Carousel className="carousel noBootstrap" interval={null}>
                    <Carousel.Item className="noBootstrap carouselItem">
                      <div class="card" id={project.id} style={{ border: "transparent 1px solid" }}>
                        <img src={project.capture1} alt="..." />
                        <h5 class="card-title bg-transparent">{project.name}</h5>
                        <p class="card-text bg-transparent">{project.description}</p>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-transparent carouselItem">
                      <div class="card" style={{ border: "transparent 1px solid" }}>
                        <img src={project.capture2} alt="..." />
                        <p class="card-text">{project.stack}</p>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-transparent carouselItem">
                      <div class="card" style={{ border: "transparent 1px solid" }}>
                        <img src={project.capture3} alt="..." />
                        <a href={project.linkRepo} class="blueBtn">
                          View Code
                        </a>
                        <a href={project.linkDemo} class="whiteBtn">
                          Visit page
                        </a>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              );
            })}
          </div>
          <br></br>
        </Fade>
      )}
    </div>
  );
}

export default PortfolioPage;
