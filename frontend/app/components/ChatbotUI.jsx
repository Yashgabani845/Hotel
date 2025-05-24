"use client"
import React, { useState } from 'react'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hi! How can I help you today?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (inputValue.trim() === '') return
    
    const userMessage = { sender: 'user', text: inputValue }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    
    try {
      const response = await fetch('https://hotel-j3ob.onrender.com/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: inputValue }),
    });
      
     if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const botResponse = {
      sender: 'bot',
      text: data.answer || 'Sorry, no answer received.',
    };

    setMessages(prev => [...prev, botResponse]);
  } catch (error) {
    console.error('Error:', error);
    const errorResponse = {
      sender: 'bot',
      text: 'Sorry, I encountered an error. Please try again.',
    };
    setMessages(prev => [...prev, errorResponse]);
  } finally {
    setIsTyping(false);
  }
};


  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <div 
        className={`w-16 h-16 bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isOpen ? 'rotate-180' : ''
        }`}
        onClick={toggleChatbot}
      >
        <div className="text-white transition-transform duration-300">
          {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
        </div>
      </div>
      
      <div 
        className={`absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ height: isOpen ? '500px' : '0' }}
      >
        <div className="bg-primary-700 p-4 flex items-center">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 border border-white/30">
            <FiMessageSquare className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">Chat Assistant</h3>
           
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-xs rounded-2xl px-4 py-3 shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-md' 
                    : 'bg-white text-gray-800 rounded-tl-md border border-gray-100'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..." 
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
              disabled={isTyping}
            />
            <button 
              type="submit" 
              disabled={isTyping || !inputValue.trim()}
              className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              <FiSend size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatbotUI