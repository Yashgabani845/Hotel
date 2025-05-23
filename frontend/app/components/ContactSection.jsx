"use client"
import React from 'react'

import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi'

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Get In Touch</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you may have about our hotel and services. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-section bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Please provide as much detail as possible..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="fade-in-section">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-full mr-4">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                    <address className="not-italic text-gray-600">
                      123 Luxury Avenue<br />
                      Beachside, CA 90210<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-full mr-4">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      Reservations: +1 (800) 123-4567<br />
                      Front Desk: +1 (800) 123-4568<br />
                      Concierge: +1 (800) 123-4569
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-full mr-4">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      Reservations: reservations@luxuryresort.com<br />
                      Customer Service: info@luxuryresort.com<br />
                      Events: events@luxuryresort.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-full mr-4">
                    <FiClock />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Check-in: 3:00 PM - 11:00 PM<br />
                      Check-out: Until 12:00 PM<br />
                      Front Desk: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7311984738!2d-122.41941638435198!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5358da5!2sHotel%20Zetta%20San%20Francisco!5e0!3m2!1sen!2sus!4v1633531262065!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Hotel Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection