"use client"
import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className={`font-serif text-2xl font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
              Luxury Resort
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Rooms', 'Amenities', 'Gallery', 'Dining', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gold-500 animated-underline transition-colors font-medium`}
            >
              {item}
            </Link>
          ))}
          <a 
            href="#booking" 
            className="btn-primary"
          >
            Book Now
          </a>
        </nav>

        {/* Phone number for desktop */}
        <div className={`hidden md:flex items-center ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
          <FiPhone className="mr-2" />
          <span>+1 (800) 123-4567</span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 
            <FiX className={isScrolled ? 'text-gray-800' : 'text-white'} /> : 
            <FiMenu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-20 animate-fade-in">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {['Home', 'Rooms', 'Amenities', 'Gallery', 'Dining', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-primary-600 py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a 
              href="#booking" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
            <div className="flex items-center text-primary-700 py-2 px-4">
              <FiPhone className="mr-2" />
              <span>+1 (800) 123-4567</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar