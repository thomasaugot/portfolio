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
import MouseAnimation from "./components/AnimatedMousePad/MouseAnimation";
// import BlogPage from "./pages/Blog/Blog";
// import ArticleContent from "./pages/Blog/Articles/ArticleContent/ArticleContent";
// import supabase from "../src/api/supabase";
// import Mockarticle from "./pages/Blog/Articles/ArticleContent/Mockarticle";
import backgroundImage from "./assets/wallpaper.jpg";

function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = backgroundImage;
  }, []);

  useEffect(() => {
    // // Scroll to the top of the page
    // window.scrollTo(0, 0);
    // const fetchArticles = async () => {
    //   try {
    //     const { data, error } = await supabase.from("articles").select("*");

    //     if (error) {
    //       throw new Error(error.message);
    //     } else {
    //       setArticles(data);
    //     }
    //   } catch (error) {
    //     console.error("Failed to retrieve users by ID:", error.message);
    //   }
    // };

    // fetchArticles();
    //

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
        console.log("current detected language: ", i18n.language);
      });

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isI18nInitialized || !loaded) {
    return (
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#212121" }}>
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <ProgressBar
          backgroundColor={"#212121"}
          color={"#03dac6"}
          gradient={true}
          gradientColor={"rgba(102, 255, 0, 1)"}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MouseAnimation />
                <Header />
                {isDesktop && <MouseAnimation />}
                <HomePage />
                <AboutPage />
                <CurriculumPage />
                <PortfolioPage />
                <Testimonials />
                <ContactPage />
                <Footer />
                <br />
              </>
            }
          />
          {/* <Route path="/blog" element={<BlogPage articles={articles} />} />
          <Route path="/blog/:articleUrl" element={<ArticleContent articles={articles} />} />
          <Route path="/blog/mockarticle" element={<Mockarticle />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
