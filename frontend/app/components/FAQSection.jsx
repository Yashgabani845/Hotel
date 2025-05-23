"use client"
import React, { useState } from 'react'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  
  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Standard check-in time is from 3:00 PM to 11:00 PM, and check-out time is by 12:00 PM (noon). Early check-in and late check-out can be arranged based on availability, potentially with an additional fee."
    },
    {
      question: "Is breakfast included in the room rate?",
      answer: "Breakfast is included in select room packages. You can check whether your rate includes breakfast during the booking process. If not included, our restaurant offers à la carte breakfast options, or you can add breakfast to your stay during check-in."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we offer airport transfer services for our guests. Please provide your flight details at least 24 hours in advance so we can arrange transportation. Additional charges may apply based on the time and distance."
    },
    {
      question: "Is there a minimum stay requirement?",
      answer: "Minimum stay requirements may apply during peak seasons, holidays, and special events. This information will be displayed during the booking process if applicable to your selected dates."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard cancellation policy allows free cancellation up to 48 hours before the scheduled arrival date. Cancellations made within 48 hours of arrival may be subject to a charge equivalent to one night's stay. Special rates or packages may have different cancellation policies."
    },
    {
      question: "Do you accommodate special dietary requirements?",
      answer: "Yes, our restaurants can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please inform us of any special dietary needs in advance, and our culinary team will be happy to assist."
    },
    {
      question: "Is Wi-Fi available at the hotel?",
      answer: "Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms, public areas, and meeting spaces."
    },
    {
      question: "Are pets allowed in the hotel?",
      answer: "We welcome well-behaved pets under 30 pounds in select pet-friendly rooms, subject to availability. A non-refundable pet fee applies per stay. Service animals are welcome throughout the hotel without additional fees."
    }
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Your Questions</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our accommodations, services, and policies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto fade-in-section">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button 
                  className={`flex justify-between items-center w-full px-6 py-4 text-left font-medium ${
                    activeIndex === index ? 'text-primary-700' : 'text-gray-800'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <FiChevronUp className="flex-shrink-0 ml-2" />
                  ) : (
                    <FiChevronDown className="flex-shrink-0 ml-2" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Support */}
          <div className="mt-12 bg-primary-50 rounded-lg p-6 text-center">
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please don't hesitate to contact our friendly staff.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="tel:+18001234567" className="btn-outline">
                Call: +1 (800) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection