import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import Loading from "../src/components/Loading/Loading";
import { useEffect, useState } from "react";
import ProgressBar from "react-progressbar-on-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProgressBar color={"yellow"} />
          <Header />
          <HomePage />
          <AboutPage />
          <CurriculumPage />
          <PortfolioPage />
          <ContactPage />
          <Footer />!
        </>
      )}
    </div>
  );
}

export default App;
