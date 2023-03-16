import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import { Fade } from "react-awesome-reveal";
import Loading from "../src/components/Loading/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <HomePage />
          <Fade duration={2000}>
            <AboutPage />
            <CurriculumPage />
            <PortfolioPage />
            <ContactPage />
            <Footer />
          </Fade>
        </>
      )}
    </div>
  );
}

export default App;
