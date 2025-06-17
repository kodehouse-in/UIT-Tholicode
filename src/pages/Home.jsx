import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/CarouselImg'
import Section from '../components/Section'
import { FaWhatsapp } from 'react-icons/fa' 

export default function Home() {
  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Header />
        <Navbar />
        <Carousel />
        <Section />
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

