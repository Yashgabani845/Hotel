import React from 'react'
import { FiCalendar, FiUsers, FiSearch } from 'react-icons/fi'
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://ak04-video-cdn.slidely.com/media/videos/8b/28/8b28322d2bcc8911f78669e4448d0ab0-720p-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Experience Luxury <br className="hidden md:block" />
            <span className="text-gold-400">Beyond Imagination</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Where unforgettable moments are crafted with the finest attention to detail
          </p>
          
          <a href="#booking" className="btn-secondary text-lg px-8 py-3 shadow-lg">
            Book Your Stay
          </a>
        </div>

        <div className="absolute bottom-12 left-0 right-0 mx-auto max-w-4xl bg-white/95 backdrop-blur rounded-lg shadow-xl p-4 md:p-6 transform translate-y-0 animate-slide-up hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1 font-medium">Check In</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
                <FiCalendar className="text-primary-500 mr-2" />
                <input 
                  type="date" 
                  className="outline-none w-full"
                  placeholder="Arrival Date"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1 font-medium">Check Out</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
                <FiCalendar className="text-primary-500 mr-2" />
                <input 
                  type="date" 
                  className="outline-none w-full"
                  placeholder="Departure Date"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1 font-medium">Guests</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
                <FiUsers className="text-primary-500 mr-2" />
                <select className="outline-none w-full bg-transparent">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-md flex items-center justify-center space-x-2 px-4 py-2 mt-5 transition duration-300">
              <FiSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection