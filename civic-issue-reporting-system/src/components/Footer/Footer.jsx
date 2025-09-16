import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import UrbanFixLogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Browse Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Our Company</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press Release</a></li>
            <li><a href="#" className="hover:text-white transition-colors">What we have done</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Support Forum</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Get in Touch</h4>
          <address className="not-italic space-y-2 text-sm">
            <p className="text-gray-300">UrbanFix</p>
            <p>ABC Area</p>
            <p>Delhi-110095</p>
            <p>Mob: <a href="tel:+91983274328947" className="hover:text-white transition-colors">+91 983274328947</a></p>
            <p>Mail: <a href="mailto:urbanfix.netlify.com" className="hover:text-white transition-colors">urbanfix.netlify.com</a></p>
          </address>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Subscribe Newsletter</h4>
          <p className="mb-4 text-sm leading-relaxed">
            Keep updated for new releases and freebies. Enter your e-mail and subscribe to our newsletter.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="gauravgod@example.com" 
              className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-800 text-white border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
            <FaRegPaperPlane className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <img src={UrbanFixLogo} alt="UrbanFix Logo" className="h-30 mx-auto mb-4" />
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} UrbanFix. MADE BY TEAM FAITH.</p>
      </div>
    </footer>
  );
};

export default Footer;
