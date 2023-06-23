import { useInView } from "react-intersection-observer";
import ReactCardFlip from "react-card-flip";
import { TbPointFilled, TbPoint } from "react-icons/tb";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import "./PortfolioPage.scss";

function PortfolioPage() {
  const projects = [
    {
      id: 8,
      capture1: require("./cheftom.png"),
      name: "Chef Tom",
      description:
        "Beside coding, I love cooking. So I built my own first Native app where I can keep my best recipes! Introducing: Tom Chef",
      stack: "React-Native, useContext for State management",
      linkRepo: "https://github.com/thomasaugot/recipes-react-native",
      linkDemo: "https://github.com/thomasaugot/recipes-react-native",
    },
    {
      id: 7,
      capture1: require("./eurafrique.png"),
      name: "Eurafrique",
      description:
        "A fully responsive, multilingual website (French, English, Spanish and Arabic) I am developing for the association Eurafrique.eu. I am also taking part in the designing process. ",
      stack:
        "React, react-router, SCSS, i18next (for the multilingual functionality), useContext (for State management) & Cpanel (for the hosting). The server is still under planning.",
      linkRepo: "https://github.com/Eurafrique-eu/eurafrique-client",
      linkDemo: "https://eurafrique.netlify.app/",
    },
    {
      id: 6,
      capture1: require("./kingpad.png"),
      name: "Kingpad",
      description:
        "A  complex, fully responsive landing page I built in collaboration with a team of designers & developers for a crypto startup, pixel-perfectly duplicating a Figma design",
      stack:
        "Next.JS, Tailwind CSS, Typescript, Material UI, Figma. The app is fully responsive following the mobile-first workflow",
      linkRepo: "https://github.com/thomasaugot/kp-next.js",
      linkDemo: "https://kingpad-v1-1-new-figma.vercel.app/",
    },
    {
      id: 4,
      capture1: require("./farmhouse (2).png"),
      name: "Farmhouse Table",
      description: "A restaurant website integrating Google Maps API and a reservation form",
      stack:
        "React, SCSS, Typescript, Bootstrap, external API integration, responsive layouts. The app is fully responsive following the mobile-first workflow",
      linkRepo: "https://github.com/thomasaugot/farmhouse-table-website",
      linkDemo: "https://farmhouse-table.netlify.app/",
    },
    {
      id: 5,
      capture1: require("./mobile-overlay.png"),
      name: "Todayzzz Todos",
      description:
        "!!UNDER CONSTRUCTION!! A simple drag & drop todo app to organize your daily tasks I built to practice Typescript, adding some cool React libraries",
      stack:
        "React, SCSS, Typescript. The app offers a dark/light mode switch. I am planning to develop the backend to enable account creation & save collections of todos.",
      linkRepo: "https://github.com/thomasaugot/typescript-todo-app",
      linkDemo: "https://todayzzz-todos.netlify.app/",
    },
    {
      id: 1,
      capture1: require("./partymates1.png"),
      name: "Partymates",
      description:
        "A full-stack MERN sort of social media app I created to connect people so they can travel to festivals together. Users can create an account, save or subscribe to events and interact with other users",
      stack:
        "MongoDB, Express.js, React.js, Node.js, REST API (built by me), Postman. The app is fully responsive, following the mobile first workflow",
      linkRepo: "https://github.com/thomasaugot/app-partymates-client",
      linkDemo: "https://partymates.netlify.app/",
    },
    {
      id: 2,
      capture1: require("./responsive-BGtrotter.png"),
      name: "The Broke Globetrotter",
      description:
        " An app created in pairs, gathering collections of free stuff to do in cities worldwide featuring back-end technologies, for broke travellers (story of my life..!)",
      stack: "MongoDB, Express.js, Node.js, Bootstrap, Handlebars, Postman",
      linkRepo: "https://github.com/project-web-app-cities/the-broke-globetrotter",
      linkDemo: "https://the-broke-globetrotter.adaptable.app/",
    },
    {
      id: 3,
      capture1: require("./game-capture1.png"),
      name: "Pickle Rick vs Rats - The Game",
      description: "My first coding project, a cool Javascript shooting game, kill the angry rats!",
      stack:
        "HTML, CSS, Javascript. Since you need a keypad for the commands, it is only playable on desktop",
      linkRepo: "https://github.com/thomasaugot/project-js-shooting-game",
      linkDemo: "https://pickle-rick-shooting-game.netlify.app/",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  const slidesPerView = isMobile
    ? 1
    : window.innerWidth >= 768 && window.innerWidth <= 1024
    ? 2
    : 3;

  return (
    <div className="PortfolioPage" id="PortfolioPage" ref={ref}>
      {isVisible && (
        <>
          <h1>My projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <br></br>
          <div className="portfolioContent">
            {isMobile ? (
              <div className="project-cards-container">
                {projects.map((project, index) => (
                  <div>
                    <ReactCardFlip
                      isFlipped={activeCardIndex === index}
                      flipDirection="horizontal"
                      className={`project-card ${index === activeCardIndex ? "flipped" : ""} card`}
                      alignHeight={true}
                    >
                      <div className="card-front card" onClick={() => handleCardClick(index)}>
                        <img src={project.capture1} alt="project" />
                        <h1 className="card-title">{project.name}</h1>
                        <p>{project.description}</p>
                        <h4>more details</h4>
                        <div className="page__dots">
                          <TbPointFilled />
                          <TbPoint />
                        </div>
                      </div>
                      <div className="card-back card" onClick={() => handleCardClick(index)}>
                        <h2>Tech Stack:</h2>
                        {project.stack}
                        <div className="project__buttons">
                          <a
                            href={project.linkRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="blueBtn "
                          >
                            View Code
                          </a>
                          <a
                            href={project.linkDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whiteBtn"
                          >
                            Visit page
                          </a>
                        </div>

                        <h4>back</h4>
                        <div className="page__dots">
                          <TbPoint />
                          <TbPointFilled />
                        </div>
                      </div>
                    </ReactCardFlip>
                  </div>
                ))}
              </div>
            ) : (
              <Swiper
                effect={"coverflow"}
                initialSlide={1}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <div>
                      <ReactCardFlip
                        isFlipped={activeCardIndex === index}
                        flipDirection="horizontal"
                        className={`project-card ${
                          index === activeCardIndex ? "flipped" : ""
                        } card`}
                        alignHeight={true}
                      >
                        <div className="card-front card" onClick={() => handleCardClick(index)}>
                          <img src={project.capture1} alt="project" />
                          <h1 className="card-title">{project.name}</h1>
                          <p>{project.description}</p>
                          <h4>more details</h4>
                          <div className="page__dots">
                            <TbPointFilled />
                            <TbPoint />
                          </div>
                        </div>
                        <div className="card-back card" onClick={() => handleCardClick(index)}>
                          <h2>Tech Stack:</h2>
                          {project.stack}
                          <div className="project__buttons">
                            <a href={project.linkRepo} class="blueBtn">
                              View Code
                            </a>
                            <a href={project.linkDemo} class="whiteBtn">
                              Visit page
                            </a>
                          </div>

                          <h4>back</h4>
                          <div className="page__dots">
                            <TbPoint />
                            <TbPointFilled />
                          </div>
                        </div>
                      </ReactCardFlip>
                    </div>
                  </SwiperSlide>
                ))}
                <div class="swiper-pagination"></div>
              </Swiper>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PortfolioPage;
