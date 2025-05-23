"use client"

import React from 'react'
import { FiAward, FiStar, FiClock, FiMapPin } from 'react-icons/fi'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="fade-in-section order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <img 
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hotel exterior" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-8 border-gold-300 rounded-lg -z-10"></div>
              
              {/* Stats box */}
              <div className="absolute -top-8 -right-8 bg-white p-5 rounded-lg shadow-xl">
                <p className="text-4xl font-serif font-bold text-primary-700">25+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="fade-in-section order-1 lg:order-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-1 w-12 bg-gold-500"></span>
              <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">About Our Hotel</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              A Sanctuary of Luxury <br />
              <span className="text-primary-600">& Timeless Elegance</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nestled in the heart of [Location], our five-star luxury hotel offers an unparalleled blend of opulence, comfort, and impeccable service. Since our establishment in 1998, we have been dedicated to providing our guests with extraordinary experiences that transcend conventional hospitality.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                  <FiAward size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Award Winning</h3>
                  <p className="text-gray-600 text-sm">Five-time recipient of the Luxury Hotel Award</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                  <FiStar size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">5-Star Rating</h3>
                  <p className="text-gray-600 text-sm">Consistently rated 5-stars by our guests</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                  <FiClock size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">24/7 Service</h3>
                  <p className="text-gray-600 text-sm">Round-the-clock concierge and room service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Prime Location</h3>
                  <p className="text-gray-600 text-sm">Minutes away from major attractions</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection