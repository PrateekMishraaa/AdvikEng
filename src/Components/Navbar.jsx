// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setDropdown(null);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
       <div className="text-center sm:text-left">
          <a href="#" className="text-2xl font-semibold italic text-white">
            Advik <span className="text-blue-600 hover:text-blue-800 transition">Engineering</span>
          </a>
        </div>
        <ul className="flex space-x-6 relative">
          <li><a href="">Home</a></li>
          <li className="relative">
            <button
              onClick={() => handleDropdown('about')}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              About <FaAngleDown />
            </button>
            {dropdown === 'about' && (
              <ul
                className="absolute top-10 left-0 bg-white text-black py-2 w-48 shadow-md z-50 rounded"
                onMouseLeave={closeDropdown}
              >
                <li>
                  <Link to="/company" className="block px-4 py-2 hover:bg-gray-100">
                    Company
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="block px-4 py-2 hover:bg-gray-100">
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={() => handleDropdown('products')}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Products <FaAngleDown />
            </button>
            {dropdown === 'products' && (
              <ul
                className="absolute top-10 left-0 bg-white text-black py-2 w-56 shadow-md z-50 rounded"
                onMouseLeave={closeDropdown}
              >
                <li>
                  <Link to="/hydraulic-pumps" className="block px-4 py-2 hover:bg-gray-100">
                    Hydraulic Pumps
                  </Link>
                </li>
                <li>
                  <Link to="/valves" className="block px-4 py-2 hover:bg-gray-100">
                    Valves
                  </Link>
                </li>
                <li>
                  <Link to="/automation-systems" className="block px-4 py-2 hover:bg-gray-100">
                    Automation Systems
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Link */}
          <li>
            <Link to="/" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
