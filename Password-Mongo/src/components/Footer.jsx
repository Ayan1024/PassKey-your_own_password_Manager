// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Passkey</h2>
          <p className="text-sm">Your trusted password manager.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/features" className="hover:text-white transition-colors">Features</a>
          <a href="/security" className="hover:text-white transition-colors">Security</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Passkey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
