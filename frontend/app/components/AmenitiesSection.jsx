import React from 'react'
import { 
  FiWifi, FiCoffee, FiAward, FiSun, FiHeart, 
  FiMapPin, FiShield, FiStar, FiTruck, FiUmbrella 
} from 'react-icons/fi'

const AmenitiesSection = () => {
  const amenities = [
    { icon: <FiWifi size={24} />, title: "Free High-Speed WiFi", description: "Stay connected with complimentary high-speed internet throughout the property" },
    { icon: <FiCoffee size={24} />, title: "24/7 Room Service", description: "Enjoy delicious meals and refreshments in the comfort of your room any time" },
    { icon: <FiSun size={24} />, title: "Outdoor Pool", description: "Relax by our pristine swimming pool with comfortable loungers and poolside service" },
    { icon: <FiHeart size={24} />, title: "Spa & Wellness", description: "Rejuvenate your body and mind with our range of spa treatments and wellness facilities" },
    { icon: <FiStar size={24} />, title: "Fine Dining", description: "Experience exceptional cuisine at our award-winning restaurants and bars" },
    { icon: <FiShield size={24} />, title: "24-Hour Security", description: "Feel safe with our round-the-clock security and modern safety features" },
    { icon: <FiMapPin size={24} />, title: "Concierge Service", description: "Our knowledgeable concierge team is available to assist with all your needs" },
    { icon: <FiTruck size={24} />, title: "Airport Transfer", description: "Enjoy hassle-free transportation between the airport and our hotel" },
    { icon: <FiUmbrella size={24} />, title: "Private Beach Access", description: "Exclusive access to our private beach area with complimentary loungers" },
    { icon: <FiAward size={24} />, title: "Fitness Center", description: "State-of-the-art fitness center with personal training options available" }
  ]

  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Hotel Features</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium Amenities & Services
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of exceptional amenities and services designed to make your stay as comfortable and memorable as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="fade-in-section bg-gray-50 hover:bg-primary-50 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white text-primary-600 group-hover:text-white group-hover:bg-primary-600 rounded-full shadow-sm transition-colors duration-300">
                {amenity.icon}
              </div>
              <h3 className="font-medium text-gray-800 mb-2 group-hover:text-primary-700">{amenity.title}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Large Feature Highlight */}
        <div className="mt-16 bg-primary-700 rounded-xl overflow-hidden shadow-xl fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                Experience Our Exclusive Spa & Wellness Center
              </h3>
              <p className="text-primary-100 mb-6">
                Indulge in a world of relaxation and rejuvenation at our award-winning spa. From signature massages to holistic treatments, our skilled therapists will help you achieve total wellbeing.
              </p>
              <ul className="mb-8 space-y-2 text-primary-100">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Luxurious treatment rooms
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Steam room and sauna
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Heated indoor pool
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Premium organic products
                </li>
              </ul>
              <a href="#booking" className="btn-secondary self-start">
                Book a Spa Experience
              </a>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury spa" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection