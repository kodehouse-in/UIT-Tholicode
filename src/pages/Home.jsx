import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/CarouselImg'
import Section from '../components/Section'
import { FaWhatsapp } from 'react-icons/fa'
import ChatBot from '../components/ChatBot'
import { usePage } from '../contexts/PageContext'
import Footer from '../components/Footer'
import Courses from '../components/Courses'
import FacultyIntro from '../components/FacultyIntro'

export default function Home() {
  const { page, setPage } = usePage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    setPage('/');
  }, [page])

  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Carousel />
        <Section />
        <Courses/>
        <FacultyIntro/>
        <ChatBot />
        <Footer/>
      </div>
      
      <a
        href="https://wa.me/919074311597" 
        target="_blank"
        className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  )
}