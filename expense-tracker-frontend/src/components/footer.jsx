import React from 'react'
import { Instagram, Linkedin, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <div>
        

<footer className="bg-green-100/60 backdrop-blur-md border-t border-green-200 mt-16">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">

    {/* Left: Copyright */}
    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Wallet Wise. All rights reserved.</p>

    {/* Center: Links */}
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="/privacy" className="hover:text-green-700 transition">Privacy Policy</a>
      <a href="/terms" className="hover:text-green-700 transition">Terms</a>
      <a href="/contact" className="hover:text-green-700 transition">Contact</a>
    </div>

    {/* Right: Social Icons */}
    <div className="flex space-x-5">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
        <PhoneCall className="w-5 h-5" />
      </a>
    </div>

  </div>
</footer>

    </div>
  )
}

export default Footer