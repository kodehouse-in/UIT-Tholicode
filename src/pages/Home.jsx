import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/CarouselImg'
import Section from '../components/Section'
import Courses from '../components/Courses'

export default function Home() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header/>
        <Navbar/>
        <Carousel/>
        <Section/>
        <Courses/>
      </div>
    </div>
  )
}
