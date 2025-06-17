import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div 
        className="px-4 md:px-30 py-3 w-screen h-auto bg-gradient-to-r from-blue-950 to-neutral-900"
      >
        <ul className='hidden md:flex justify-between text-white text-lg font-semibold'>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">HOME</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">ABOUT US</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">ACADEMICS</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">FACULTIES</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">INFRASTRUCTURE</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">ADMISSION</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">CAREERS</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors">CONTACT US</li>
        </ul>

        <div className="md:hidden flex justify-end">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-blue-950 border-t border-blue-800 z-50">
            <ul className="flex flex-col text-white text-sm">
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                HOME
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                ABOUT US
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                ACADEMICS
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                FACULTIES
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                INFRASTRUCTURE
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                ADMISSION
              </li>
              <li className="px-4 py-3 border-b border-blue-800 cursor-pointer hover:bg-blue-800 transition-colors">
                CAREERS
              </li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-800 transition-colors">
                CONTACT US
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
