"use client"
import React, { useState } from 'react'

import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hello! I\'m your virtual concierge. How can I assist you with your stay today?',
      options: ['Room Booking', 'Amenities', 'Check-in/Check-out', 'Local Attractions']
    }
  ])
  const [inputValue, setInputValue] = useState('')
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleOptionClick = (option) => {
    // Add user message
    const newMessages = [...messages, { sender: 'user', text: option }]
    
    // Add bot response based on option
    let botResponse
    
    switch (option) {
      case 'Room Booking':
        botResponse = {
          sender: 'bot',
          text: 'To book a room, you can use our booking widget on the website or call our reservations team at +1 (800) 123-4567. Would you like me to help with anything else?',
          options: ['Check Availability', 'Room Types', 'Special Offers', 'Other Question']
        }
        break
      case 'Amenities':
        botResponse = {
          sender: 'bot',
          text: 'Our hotel features a range of amenities including a swimming pool, spa, fitness center, and 24/7 room service. What specific amenity would you like to know more about?',
          options: ['Pool Hours', 'Spa Services', 'Fitness Center', 'Room Service Menu']
        }
        break
      case 'Check-in/Check-out':
        botResponse = {
          sender: 'bot',
          text: 'Our standard check-in time is 3:00 PM and check-out is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.',
          options: ['Request Early Check-in', 'Request Late Check-out', 'Luggage Storage', 'Other Question']
        }
        break
      case 'Local Attractions':
        botResponse = {
          sender: 'bot',
          text: 'There are many wonderful attractions near our hotel! Would you like recommendations for restaurants, shopping, cultural sites, or outdoor activities?',
          options: ['Restaurants', 'Shopping', 'Cultural Sites', 'Outdoor Activities']
        }
        break
      default:
        botResponse = {
          sender: 'bot',
          text: 'Thank you for your question. Our concierge team will be happy to assist you further. Is there anything else I can help with?',
          options: ['Room Booking', 'Amenities', 'Check-in/Check-out', 'Local Attractions']
        }
    }
    
    setMessages([...newMessages, botResponse])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (inputValue.trim() === '') return
    
    // Add user message
    const newMessages = [...messages, { sender: 'user', text: inputValue }]
    
    // Add generic bot response
    const botResponse = {
      sender: 'bot',
      text: 'Thank you for your question. Our concierge team will get back to you soon. Is there anything else I can help with in the meantime?',
      options: ['Room Booking', 'Amenities', 'Check-in/Check-out', 'Local Attractions']
    }
    
    setMessages([...newMessages, botResponse])
    setInputValue('')
  }

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <div 
        className="chatbot-button"
        onClick={toggleChatbot}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </div>
      
      {/* Chat Panel */}
      <div 
        className={`chatbot-panel ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        style={{ height: isOpen ? '500px' : '0' }}
      >
        {/* Chat Header */}
        <div className="bg-primary-700 p-4 flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <FiMessageSquare className="text-primary-700" size={20} />
          </div>
          <div>
            <h3 className="text-white font-medium">Virtual Concierge</h3>
            <p className="text-primary-100 text-xs">Online | Ask me anything</p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="h-[380px] overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
              
              {/* Options buttons for bot messages */}
              {message.sender === 'bot' && message.options && (
                <div className="mt-2 ml-2 flex flex-wrap gap-2">
                  {message.options.map((option, optIndex) => (
                    <button 
                      key={optIndex}
                      className="bg-white text-primary-600 text-sm border border-primary-300 rounded-full px-3 py-1 hover:bg-primary-50 transition-colors"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Chat Input */}
        <div className="p-3 bg-white border-t">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input 
              type="text" 
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question here..." 
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <button 
              type="submit" 
              className="bg-primary-600 text-white p-2 rounded-r-md hover:bg-primary-700 transition-colors"
            >
              <FiSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatbotUI