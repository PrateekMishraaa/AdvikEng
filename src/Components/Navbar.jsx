import React, { useState } from 'react';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold italic">
          <a href="#" className="text-gray-900">
            Advik <span className="text-blue-600 hover:text-blue-800 transition">Engineering</span>{' '}
            <span className="text-xs">Pvt. Ltd.</span>
          </a>
        </div>
        <ul className="flex items-center space-x-8 text-lg font-serif font-medium relative">
          <li className="hover:text-blue-600 transition">
            <a href="#">Home</a>
          </li>

          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
            {aboutOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-md rounded-lg py-2 w-40 z-10">
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Company</a></li>
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Team</a></li>
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Careers</a></li>
              </ul>
            )}
          </li>

          {/* Products Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a href="#" className="hover:text-blue-600 transition">
              Products
            </a>
            {productsOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-md rounded-lg py-2 w-44 z-10">
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Hydraulic Pumps</a></li>
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Valves</a></li>
                <li className="px-4 py-2 hover:bg-blue-50 transition"><a href="#">Automation Systems</a></li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-600 transition">
            <a href="#">Clientele</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#">Events</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#">Reach-Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
