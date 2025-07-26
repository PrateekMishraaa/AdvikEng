import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close mobile menu when switching to desktop
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
      setAboutOpen(false);
      setProductsOpen(false);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (isMobile) {
      if (dropdown === 'about') {
        setAboutOpen(!aboutOpen);
        setProductsOpen(false);
      } else if (dropdown === 'products') {
        setProductsOpen(!productsOpen);
        setAboutOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold italic flex-shrink-0">
            <a href="#" className="text-gray-900" onClick={handleLinkClick}>
              <span className="block sm:inline">Advik</span>{' '}
              <span className="text-blue-600 hover:text-blue-800 transition">Engineering</span>{' '}
              <span className="text-xs block sm:inline">Pvt. Ltd.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </a>

            {/* About Dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => !isMobile && setAboutOpen(true)}
              onMouseLeave={() => !isMobile && setAboutOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                About
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Company
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Team
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={() => !isMobile && setProductsOpen(true)}
              onMouseLeave={() => !isMobile && setProductsOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Hydraulic Pumps
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Valves
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Automation Systems
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Clientele
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Events
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Reach Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-100 mt-4">
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
            >
              Home
            </a>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-colors duration-200"
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Hydraulic Pumps
                  </a>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Valves
                  </a>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Automation Systems
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
            >
              Clientele
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
            >
              Events
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
            >
              Reach Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;