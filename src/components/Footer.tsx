import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HOCX</h3>
            <p className="text-gray-400 mb-2 text-sm">House Of CodeX</p>
            <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Modern software and website solutions for businesses. Building digital excellence since day one.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Website Development</li>
              <li>E-Commerce Solutions</li>
              <li>UI/UX Design</li>
              <li>Branding Services</li>
              <li>Custom Software</li>
              <li>IT Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Get In Touch</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <Mail size={18} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <a href="mailto:houseofcodexindia@gmail.com" className="hover:text-white transition-colors break-all">
                  houseofcodexindia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <Phone size={18} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <a href="tel:7909308210" className="hover:text-white transition-colors">
                  +91 79093 08210
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 House Of CodeX (HOCX). All rights reserved. MSME Registered Company.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}