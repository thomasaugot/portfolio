import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Header />
      <Fade duration={2000}>
        <HomePage />
        <AboutPage />
        <CurriculumPage />
        <PortfolioPage />
        <ContactPage />
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
