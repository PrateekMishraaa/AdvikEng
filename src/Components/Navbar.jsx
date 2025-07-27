// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdown(null); // Reset dropdowns when menu opens/closes
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold italic text-white">
          <a href="#">
            Advik <span className="text-blue-600 hover:text-blue-800 transition">Engineering</span>
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 relative">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>

          <li className="relative">
            <button
              onClick={() => handleDropdown('about')}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              About <FaAngleDown />
            </button>
            {dropdown === 'about' && (
              <ul className="absolute top-10 left-0 bg-white text-black py-2 w-48 shadow-md z-50 rounded" onMouseLeave={closeDropdown}>
                <li><Link to="/company" className="block px-4 py-2 hover:bg-gray-100">Company</Link></li>
                <li><Link to="/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link></li>
                <li><Link to="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => handleDropdown('products')}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Products <FaAngleDown />
            </button>
            {dropdown === 'products' && (
              <ul className="absolute top-10 left-0 bg-white text-black py-2 w-56 shadow-md z-50 rounded" onMouseLeave={closeDropdown}>
                <li><Link to="/hydraulic-pumps" className="block px-4 py-2 hover:bg-gray-100">Hydraulic Pumps</Link></li>
                <li><Link to="/valves" className="block px-4 py-2 hover:bg-gray-100">Valves</Link></li>
                <li><Link to="/automation-systems" className="block px-4 py-2 hover:bg-gray-100">Automation Systems</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 p-4 rounded shadow-lg space-y-4">
          <Link to="/" onClick={toggleMobileMenu} className="block hover:text-gray-300">Home</Link>

          <div>
            <button onClick={() => handleDropdown('about')} className="flex items-center justify-between w-full hover:text-gray-300">
              About <FaAngleDown />
            </button>
            {dropdown === 'about' && (
              <ul className="bg-white text-black mt-2 rounded shadow">
                <li><Link to="/company" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Company</Link></li>
                <li><Link to="/team" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Team</Link></li>
                <li><Link to="/careers" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
              </ul>
            )}
          </div>

          <div>
            <button onClick={() => handleDropdown('products')} className="flex items-center justify-between w-full hover:text-gray-300">
              Products <FaAngleDown />
            </button>
            {dropdown === 'products' && (
              <ul className="bg-white text-black mt-2 rounded shadow">
                <li><Link to="/hydraulic-pumps" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Hydraulic Pumps</Link></li>
                <li><Link to="/valves" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Valves</Link></li>
                <li><Link to="/automation-systems" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Automation Systems</Link></li>
              </ul>
            )}
          </div>

          <Link to="/contact" onClick={toggleMobileMenu} className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
