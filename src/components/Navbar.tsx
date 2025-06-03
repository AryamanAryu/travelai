import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Plane className="h-8 w-8 text-orange-600" />
            <span className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Bharat<span className="text-orange-600">Brahma </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500 transition-colors`}
            >
              Home
            </a>
            <a 
              href="#destinations" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500 transition-colors`}
            >
              Destinations
            </a>
            <a 
              href="#itinerary" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500 transition-colors`}
            >
              Plan Trip
            </a>
            <a 
              href="#about" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500 transition-colors`}
            >
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#destinations"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#itinerary"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan Trip
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;