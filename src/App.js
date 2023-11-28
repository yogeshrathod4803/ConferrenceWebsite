import "./App.css";
import HeroSection from "./components/herosection/HeroSection.js";
import NavBar from "./components/navbar/NavBar";
import KeySpeakerSection from "./components/key-speaker-section/KeySpeakerSection.js";
import Testimonials from "./components/testimonials/Testimonials.js";
import Marquee from "./components/marque/Marquee.js";
import TicketList from "./components/tickets/TicketList.js";
import JoinUsSection from "./components/joinUsSection/JoinUsSection.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <KeySpeakerSection />
      <Testimonials />
      <Marquee />
      <TicketList />
      <JoinUsSection />
      <Footer />
    </>
  );
}

export default App;
