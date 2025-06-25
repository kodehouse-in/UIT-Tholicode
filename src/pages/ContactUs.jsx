import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

const ContactUs = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header/>
        <Navbar/>
        <ContactSection/>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs
