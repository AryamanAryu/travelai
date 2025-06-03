import React from 'react';
import { Plane, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">
                Travel<span className="text-orange-500">AI</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered travel planning for your perfect Indian adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-orange-500 transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#itinerary" className="text-gray-400 hover:text-orange-500 transition-colors">Plan Trip</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Jaipur, Rajasthan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Goa</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Kerala Backwaters</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Varanasi, Uttar Pradesh</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Agra, Uttar Pradesh</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-400">aryamandps@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-400">+91 9341911822</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BharatBrahma All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;