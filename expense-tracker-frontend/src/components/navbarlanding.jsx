import React, { useState } from 'react';
import { Menu, X, ChevronRight, Star, Users, Zap, Shield, ArrowRight, Check } from 'lucide-react';

const Navbarlanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                  Wallet-Wise
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Home</a>
                <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Features</a>
                <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300">Features</a>
              <button className="w-full mt-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbarlanding;
