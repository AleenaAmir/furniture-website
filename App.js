import "./App.css";
import BeautifySpace from "./components/BeautifySpace";
import Collection from "./components/Collection";
import Email from "./components/Email";
import Footer from "./components/Footer";
import LivingRange from "./components/LivingRange";
import Working from "./components/Working";
import Delevery from "./components/navbar/Delevery";
import HeroSection from "./components/navbar/HeroSection";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Delevery />
      <Collection />
      <BeautifySpace />
      <LivingRange />
      <Working />
      <Email />
      <Footer />
    </>
  );
}

export default App;
