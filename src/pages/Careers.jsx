import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa";
import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer";
import CareerContent from "../components/CareerContent";
gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  return (
    <div>
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        <CareerContent/>
        <ChatBot/>
        <Footer/>
      </div>
      <a
            href="https://wa.me/919946667727"
            target="_blank"
            className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <FaWhatsapp size={30} />
          </a>
    </div>
  );
}
