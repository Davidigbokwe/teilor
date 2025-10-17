import { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src="/Teilor.png" alt="Teilor Logo" className="w-28 h-10 md:w-36 md:h-12 object-contain" />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          <a href="https://apps.apple.com/ng/app/teilorr/id6753590166" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>App Store</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.hallatech.teilorr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
            </svg>
            <span>Play Store</span>
          </a>
          <a href="#contact" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6.75A2.25 2.25 0 0 0 18.75 4.5h-13.5A2.25 2.25 0 0 0 3 6.75v10.5A2.25 2.25 0 0 0 5.25 19.5h13.5A2.25 2.25 0 0 0 21 17.25V13.5m-9 0 3-3m0 0-3-3m3 3H9"/></svg>
            <span>Contact</span>
          </a>
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg flex flex-col items-start p-6 space-y-4 md:hidden z-50 border border-gray-100">
            <a href="https://apps.apple.com/ng/app/teilorr/id6753590166" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1" onClick={() => setMenuOpen(false)}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.hallatech.teilorr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1" onClick={() => setMenuOpen(false)}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
              </svg>
              <span>Play Store</span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-tealor-blue transition-colors font-medium flex items-center space-x-1" onClick={() => setMenuOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6.75A2.25 2.25 0 0 0 18.75 4.5h-13.5A2.25 2.25 0 0 0 3 6.75v10.5A2.25 2.25 0 0 0 5.25 19.5h13.5A2.25 2.25 0 0 0 21 17.25V13.5m-9 0 3-3m0 0-3-3m3 3H9"/></svg>
              <span>Contact</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}