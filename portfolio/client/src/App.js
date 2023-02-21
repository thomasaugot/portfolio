import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CurriculumPage from "./pages/CurriculumPage/CurriculumPage";

function App() {
  return (
    <div className="App">
     <Header />
     <HomePage />
     <AboutPage />
     <CurriculumPage />
     <PortfolioPage />
     <ContactPage />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
