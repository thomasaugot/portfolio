/* eslint-disable react/jsx-pascal-case */
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
import ArticleContent from "./pages/Blog/Articles/ArticleContent/ArticleContent";
import supabase from "../src/api/supabase";

function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.from("articles").select("*");

        if (error) {
          throw new Error(error.message);
        } else {
          setArticles(data);
        }
      } catch (error) {
        console.error("Failed to retrieve users by ID:", error.message);
      }
    };

    fetchArticles();

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
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#212121" }}>
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
          <Route path="/blog" element={<BlogPage articles={articles} />} />
          <Route path="/blog/:articleUrl" element={<ArticleContent articles={articles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
