import React from 'react'
import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Hotel */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Luxury Resort</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience unparalleled luxury in a stunning setting. Our award-winning hotel offers exceptional service, exquisite dining, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <FiYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Meetings & Events', 'Special Offers', 'Gift Cards'].map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Beachside, CA 90210</li>
              <li>United States</li>
              <li className="pt-2">
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@luxuryresort.com" className="hover:text-white transition-colors">
                  info@luxuryresort.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive special offers and updates from our hotel.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Awards & Recognition */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-lg font-medium mb-6 text-center">Awards & Recognition</h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((award) => (
              <img 
                key={award} 
                src={`https://via.placeholder.com/100x50?text=Award${award}`} 
                alt={`Hotel Award ${award}`} 
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Luxury Resort. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer