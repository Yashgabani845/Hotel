"use client"
import React, { useState } from 'react'

import { FiX, FiArrowRight, FiArrowLeft } from 'react-icons/fi'

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Hotel Lobby",
      category: "Interior"
    },
    {
      src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Luxury Suite",
      category: "Rooms"
    },
    {
      src: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Swimming Pool",
      category: "Amenities"
    },
    {
      src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Fine Dining Restaurant",
      category: "Dining"
    },
    {
      src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Hotel Exterior",
      category: "Exterior"
    },
    {
      src: "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Spa Treatment Room",
      category: "Wellness"
    },
    {
      src: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Beach View",
      category: "Views"
    },
    {
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Fitness Center",
      category: "Amenities"
    }
  ]

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    const newIndex = (currentImage + direction + images.length) % images.length
    setCurrentImage(newIndex)
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gold-500"></span>
            <span className="text-gold-500 font-medium uppercase tracking-wider text-sm">Visual Tour</span>
            <span className="h-1 w-12 bg-gold-500"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience Our Hotel Through Images
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exquisite property through this curated collection of images showcasing our accommodations, amenities, and surroundings.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`fade-in-section group relative cursor-pointer overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
      
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold-300 transition-colors"
            onClick={closeLightbox}
          >
            <FiX size={28} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-300 transition-colors"
            onClick={() => navigateImage(-1)}
          >
            <FiArrowLeft size={28} />
          </button>
          
          <img 
            src={images[currentImage].src} 
            alt={images[currentImage].alt} 
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-300 transition-colors"
            onClick={() => navigateImage(1)}
          >
            <FiArrowRight size={28} />
          </button>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="font-medium text-lg">{images[currentImage].alt}</p>
            <p className="text-sm text-white/70">{images[currentImage].category}</p>
            <p className="text-sm text-white/70 mt-1">{currentImage + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection