"use client"
import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FiCalendar, FiUsers, FiCreditCard } from 'react-icons/fi'
import { FaBed } from 'react-icons/fa';

const BookingSection = () => {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [roomType, setRoomType] = useState('')
  
  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: '$199' },
    { id: 'deluxe', name: 'Deluxe Room', price: '$249' },
    { id: 'premium', name: 'Premium Suite', price: '$349' },
    { id: 'family', name: 'Family Room', price: '$289' },
    { id: 'executive', name: 'Executive Suite', price: '$449' }
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    console.log({
      checkInDate,
      checkOutDate,
      adults,
      children,
      roomType
    })
    
    // Here you would typically send the data to a server
    alert('Thank you for your booking request! Our team will confirm your reservation shortly.')
  }
  
  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Reserve Your Stay</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book Your Perfect Getaway
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your reservation with our simple booking system. Special rates available for extended stays and early bookings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden fade-in-section">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Booking Image */}
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <img 
                  src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luxury hotel view" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">Best Rate Guarantee</h3>
                    <p className="text-white/80 text-sm">
                      Book directly with us for the best price and exclusive perks
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="md:col-span-3 p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Check-in Date */}
                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Check In Date
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={checkInDate}
                          onChange={date => setCheckInDate(date)}
                          selectsStart
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={new Date()}
                          placeholderText="Select date"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                        <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Check-out Date */}
                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Check Out Date
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={checkOutDate}
                          onChange={date => setCheckOutDate(date)}
                          selectsEnd
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={checkInDate || new Date()}
                          placeholderText="Select date"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                        <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Guests */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Adults
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
                          value={adults}
                          onChange={(e) => setAdults(parseInt(e.target.value))}
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                          ))}
                        </select>
                        <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Children */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Children
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
                          value={children}
                          onChange={(e) => setChildren(parseInt(e.target.value))}
                        >
                          {[0, 1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                          ))}
                        </select>
                        <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Room Type */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        Room Type
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          required
                        >
                          <option value="">Select a room type</option>
                          {roomTypes.map(room => (
                            <option key={room.id} value={room.id}>
                              {room.name} - {room.price}/night
                            </option>
                          ))}
                        </select>
                        <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Special Requests */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea 
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 h-24"
                      placeholder="Let us know if you have any special requirements..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                  >
                    <FiCreditCard className="mr-2" />
                    Book Now
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By clicking "Book Now", you agree to our <a href="#" className="text-primary-600 hover:underline">terms and conditions</a> and <a href="#" className="text-primary-600 hover:underline">privacy policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          {/* Booking Policies */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg fade-in-section">
            <h3 className="font-medium text-gray-800 mb-3">Booking Policies:</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span><strong>Check-in:</strong> From 3:00 PM to 11:00 PM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span><strong>Check-out:</strong> Until 12:00 PM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span><strong>Cancellation:</strong> Free cancellation up to 48 hours before arrival</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span><strong>Payment:</strong> First night deposit required at time of booking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection