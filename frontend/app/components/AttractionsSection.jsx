import React from 'react'
import { FiMapPin, FiClock, FiExternalLink } from 'react-icons/fi'

const AttractionsSection = () => {
  const attractions = [
    {
      name: "Crystal Clear Beach",
      description: "Pristine white sand beach with crystal clear waters perfect for swimming and sunbathing.",
      distance: "5 min walk",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Nature"
    },
    {
      name: "Heritage Museum",
      description: "Explore local history and culture through fascinating exhibits and artifacts.",
      distance: "15 min drive",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Culture"
    },
    {
      name: "Marina Boardwalk",
      description: "Scenic promenade with shops, restaurants, and beautiful sunset views over the harbor.",
      distance: "10 min walk",
      image: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Entertainment"
    },
    {
      name: "Sunrise Mountain Trail",
      description: "Popular hiking trail offering breathtaking views of the surrounding landscape.",
      distance: "25 min drive",
      image: "https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Adventure"
    }
  ]

  return (
    <section id="attractions" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Explore The Area</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nearby Attractions & Activities
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best local experiences and attractions around our hotel, all within easy reach for our guests.
          </p>
        </div>
        
        {/* Map Section */}
        <div className="mb-16 fade-in-section">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7311984738!2d-122.41941638435198!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5358da5!2sHotel%20Zetta%20San%20Francisco!5e0!3m2!1sen!2sus!4v1633531262065!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Hotel Location Map"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">
                Perfectly situated in the heart of the city, our hotel offers easy access to major attractions, shopping, dining, and entertainment venues.
              </p>
              <div className="flex items-center text-primary-600">
                <FiMapPin className="mr-2" />
                <address className="not-italic">123 Luxury Avenue, Beachside, CA 90210</address>
              </div>
            </div>
          </div>
        </div>
        
        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <div 
              key={index} 
              className="fade-in-section bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs">
                  {attraction.type}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-gray-800 mb-2">{attraction.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    <span>{attraction.distance}</span>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    <span className="mr-1">Details</span>
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Transportation Info */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md fade-in-section">
          <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Transportation Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 rounded-full text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Airport Transfer</h4>
                <p className="text-gray-600 text-sm">Complimentary airport shuttle service available for all guests.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 rounded-full text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Car Rental</h4>
                <p className="text-gray-600 text-sm">Car rental service available at the hotel with special guest rates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 rounded-full text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Public Transport</h4>
                <p className="text-gray-600 text-sm">Bus and metro stations within 5 minutes walking distance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AttractionsSection