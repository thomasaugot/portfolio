import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import CurriculumPage from "./components/Curriculum/CurriculumPage";
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
    </div>
  );
}

export default App;
