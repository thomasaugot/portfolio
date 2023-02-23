import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <AboutPage />
      <CurriculumPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
