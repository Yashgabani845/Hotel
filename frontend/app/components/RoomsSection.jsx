import React from 'react'
import { FiUser, FiMaximize, FiWifi, FiMonitor } from 'react-icons/fi'

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe King Room",
      description: "Our spacious Deluxe King Rooms offer modern comfort with elegant decor and premium amenities.",
      price: "$199",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: "2 Guests",
      size: "40 m²",
      amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Room Service"]
    },
    {
      id: 2,
      title: "Premium Ocean Suite",
      description: "Indulge in luxury with our Premium Ocean Suites, featuring breathtaking views and exclusive amenities.",
      price: "$349",
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: "2-3 Guests",
      size: "65 m²",
      amenities: ["Ocean View", "Living Area", "Premium Toiletries", "Evening Turndown"]
    },
    {
      id: 3,
      title: "Family Comfort Room",
      description: "Perfect for families, our spacious Comfort Rooms provide ample space and amenities for all ages.",
      price: "$289",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: "4 Guests",
      size: "55 m²",
      amenities: ["2 Queen Beds", "Kid's Amenities", "Entertainment System", "Refrigerator"]
    }
  ]

  return (
    <section id="rooms" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Luxury Accommodations</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elegant Room & Suites
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in the perfect blend of comfort and luxury in our meticulously designed rooms and suites, each crafted to provide an unforgettable stay experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div key={room.id} className="room-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-in-section">
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {room.price}/night
                </div>
              </div>
              
              {/* Room Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{room.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                
                {/* Room Details */}
                <div className="flex space-x-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <FiUser className="mr-1" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiMaximize className="mr-1" />
                    <span>{room.size}</span>
                  </div>
                </div>
                
                {/* Room Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Room Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="flex space-x-3">
                  <a href="#booking" className="btn-primary flex-1 text-center text-sm">
                    Book Now
                  </a>
                  <a href="#" className="btn-outline flex-1 text-center text-sm">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </section>
  )
}

export default RoomsSection