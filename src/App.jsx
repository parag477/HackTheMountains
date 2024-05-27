import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Tracks from "./components/Tracks";
import History from "./components/History";
import Footer from "./components/Footer";
import Prizes from "./components/Prizes";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <About />
        <Tracks />
        <History />
        <Prizes />
        <Footer />
      </div>
    </>
  );
};

export default App;
