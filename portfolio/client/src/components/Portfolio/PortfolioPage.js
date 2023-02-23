import Carousel from "react-bootstrap/Carousel";
import "./PortfolioPage.scss";

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      image: "./partymates-logo.PNG",
      name: "Partymates",
      description: "gggggggggg gggggggggggggg gggggggggggg ggggggggggggg ggggggggggg ggggggg ggg",
      stack: "",
      linkRepo: "",
      linkDemo: "",
    },
    {
      id: 2,
      image: "./brokeglob.png",
      name: "The Broke Globetrotter",
      description: "lorem shsd ssa asd",
      stack: "",
      linkRepo: "",
      linkDemo: "",
    },
    {
      id: 3,
      image: "./gamerick.png",
      name: "Pickle Rick vs Rats - The Game",
      description: "zdzad, zadzdzadzdjzhdzd zjzuzb",
      stack: "",
      linkRepo: "",
      linkDemo: "",
    },
  ];

  return (
    <div className="PortfolioPage">
      <h1>My work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      <br></br>
      <Carousel className="carousel">
        <Carousel.Item>
          <div class="card">
            <img src={require("./partymates-logo.PNG")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="card">
            <img src={require("./brokeglob.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="card">
            <img src={require("./gamerick.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PortfolioPage;
