"use client"
import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import RoomsSection from './components/RoomsSection'
import AmenitiesSection from './components/AmenitiesSection'
import GallerySection from './components/GallerySection'
import BookingSection from './components/BookingSection'
import AttractionsSection from './components/AttractionsSection'
import OffersSection from './components/OffersSection'
import DiningSection from './components/DiningSection'
import ContactSection from './components/ContactSection'
import FAQSection from './components/FAQSection'
import ChatbotUI from './components/ChatbotUI'


export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.fade-in-section')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      {/* <GallerySection /> */}
      <BookingSection />
      <DiningSection />
      <OffersSection />
      <AttractionsSection />
      <FAQSection />
      <ContactSection />
      <ChatbotUI />
    </div>
  )

}
