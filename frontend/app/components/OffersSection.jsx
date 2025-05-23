import React from 'react'
import { FiCalendar, FiClock, FiTag } from 'react-icons/fi'

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book 30 days in advance and save up to 25% on your stay. Includes complimentary breakfast and welcome drink.",
      discount: "25% OFF",
      validUntil: "December 31, 2025",
      image: "https://images.pexels.com/photos/3639540/pexels-photo-3639540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      code: "EARLYBIRD25"
    },
    {
      id: 2,
      title: "Weekend Escape Package",
      description: "Enjoy a relaxing weekend getaway with spa credits, late checkout, and romantic dinner for two.",
      discount: "Special Package",
      validUntil: "Ongoing",
      image: "https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      code: "WEEKEND23"
    },
    {
      id: 3,
      title: "Extended Stay Discount",
      description: "Stay 5 nights or more and receive a 15% discount plus complimentary airport transfer.",
      discount: "15% OFF",
      validUntil: "March 31, 2026",
      image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      code: "EXTENDED15"
    }
  ]

  return (
    <section id="offers" className="section-padding bg-primary-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Special Deals</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exclusive Offers & Promotions
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our limited-time offers and special packages designed to enhance your stay and provide exceptional value.
          </p>
        </div>
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map(offer => (
            <div 
              key={offer.id} 
              className="fade-in-section bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Offer Image */}
              <div className="relative h-48">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary-600 text-white py-1 px-4 rounded-bl-lg font-medium">
                  {offer.discount}
                </div>
              </div>
              
              {/* Offer Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{offer.description}</p>
                
                {/* Offer Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-2 text-primary-600" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiTag className="mr-2 text-primary-600" />
                    <span>Promo code: <span className="font-medium">{offer.code}</span></span>
                  </div>
                </div>
                
                <a 
                  href="#booking" 
                  className="btn-primary text-center"
                >
                  Book This Offer
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Limited Time Offer Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl overflow-hidden shadow-lg fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="p-8 md:p-10 md:col-span-3 flex flex-col justify-center">
              <div className="bg-gold-500 text-primary-900 py-1 px-4 rounded-full inline-block text-sm font-medium mb-4 self-start">
                Limited Time Offer
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                Summer Vacation Special: 30% Off + Free Upgrades
              </h3>
              <p className="text-primary-50 mb-6">
                Plan your summer getaway now and enjoy our best rates of the season, complimentary room upgrades (subject to availability), and special amenities for children.
              </p>
              <div className="flex items-center text-white/80 mb-6">
                <FiClock className="mr-2" />
                <span>Offer ends in:</span>
                <div className="ml-3 flex space-x-2">
                  <div className="bg-white/10 rounded px-2 py-1">
                    <span className="text-white font-medium">14</span>
                    <span className="text-xs text-white/60 block">Days</span>
                  </div>
                  <div className="bg-white/10 rounded px-2 py-1">
                    <span className="text-white font-medium">22</span>
                    <span className="text-xs text-white/60 block">Hours</span>
                  </div>
                  <div className="bg-white/10 rounded px-2 py-1">
                    <span className="text-white font-medium">45</span>
                    <span className="text-xs text-white/60 block">Mins</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#booking" 
                  className="btn-secondary"
                >
                  Book Now
                </a>
                <button className="text-white hover:text-gold-300 font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative md:col-span-2 h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Summer offer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersSection