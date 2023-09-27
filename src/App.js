import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import esTranslation from "./locales/es.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Loading from "./components/Loading/Loading";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import ProgressBar from "react-progressbar-on-scroll";
import Testimonials from "./components/Testimonials/TestimonialsPage";
import BlogPage from "./pages/Blog/Blog";
import WhichBaaSToChooseIn2023 from "./pages/Blog/Articles/which-baas-to-choose-in-2023/Content_WhichBaaSToChooseIn2023";

function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("translate", "no");

    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: enTranslation },
          fr: { translation: frTranslation },
          es: { translation: esTranslation },
        },
        fallbackLng: "en",
        detection: {
          order: ["localStorage", "navigator"],
          caches: ["localStorage"],
        },
      })
      .then(() => {
        setIsI18nInitialized(true);
      });
  }, []);

  if (!isI18nInitialized) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <ProgressBar color={"#03dac6"} gradient={true} gradientColor={"rgba(102, 255, 0, 1)"} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <AboutPage />
                <CurriculumPage />
                <PortfolioPage />
                <Testimonials />
                <ContactPage />
                <Footer />!
              </>
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/which-baas-to-choose-in-2023" element={<WhichBaaSToChooseIn2023 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
