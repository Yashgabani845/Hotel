"use client"
import React from 'react'

import { FiClock, FiPhone, FiStar } from 'react-icons/fi'

const DiningSection = () => {
  const restaurants = [
    {
      id: 1,
      name: "Azure",
      type: "Fine Dining",
      description: "Experience exquisite Mediterranean cuisine with panoramic ocean views. Our award-winning chefs create culinary masterpieces using the freshest local ingredients.",
      hours: "6:00 PM - 10:30 PM",
      reservation: "+1 (800) 123-4567 ext. 1",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "The Terrace",
      type: "Casual Dining",
      description: "Enjoy all-day dining in a relaxed atmosphere with both indoor and outdoor seating options. International cuisine featuring local favorites and comfort food classics.",
      hours: "6:30 AM - 10:00 PM",
      reservation: "+1 (800) 123-4567 ext. 2",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Aqua Lounge",
      type: "Bar & Lounge",
      description: "Unwind with signature cocktails, premium spirits, and light bites in our sophisticated bar and lounge. Live music on weekends.",
      hours: "4:00 PM - 12:00 AM",
      reservation: "+1 (800) 123-4567 ext. 3",
      image: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section id="dining" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Culinary Experience</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exceptional Dining Options
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in a diverse range of culinary experiences at our hotel, from casual bites to fine dining and specialty cuisines.
          </p>
        </div>
        
        {/* Dining Options */}
        <div className="space-y-12">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id} 
              className={`fade-in-section grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                    <span className="text-primary-700 font-medium">{restaurant.type}</span>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="h-1 w-6 bg-gold-500"></span>
                  <span className="text-gold-500 font-medium uppercase tracking-wider text-xs">Restaurant & Bar</span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  {restaurant.name}
                </h3>
                
                <div className="flex text-gold-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {restaurant.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <FiClock className="mr-2 text-primary-600" />
                    <span>Hours: {restaurant.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiPhone className="mr-2 text-primary-600" />
                    <span>Reservations: {restaurant.reservation}</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="btn-primary">
                    Reserve a Table
                  </a>
                  <a href="#" className="btn-outline">
                    View Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special Dining Experiences */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-section">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
              Private Dining
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Exclusive dining experiences in elegant private rooms, perfect for special celebrations or intimate gatherings.
            </p>
            <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Inquire Now
            </a>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
              In-Room Dining
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Enjoy our exceptional cuisine in the comfort and privacy of your own room, available 24/7.
            </p>
            <a href="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View Menu
            </a>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
              Chef's Table Experience
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              An exclusive culinary journey with our executive chef featuring a personalized tasting menu.
            </p>
            <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Book Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiningSection