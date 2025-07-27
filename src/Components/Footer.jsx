import React from 'react';
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full border-t border-gray-300 py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <a href="#" className="text-2xl font-semibold italic text-gray-900">
            Advik <span className="text-blue-600 hover:text-blue-800 transition">Engineering</span>
          </a>
        </div>

        {/* First Column */}
        <div className="text-center sm:text-left">
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Clientele</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Awards</a></li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="text-center sm:text-left">
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition">Events</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Products</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg mb-2">Contact Info</p>
          <p className="font-semibold text-sm">Advik Engineering</p>
          <p className="text-sm font-medium leading-relaxed">
            Plot No 20, WMDC Chakan Ambethan Road,<br />
            Behind Chakan Telephone Exchange Tower,<br />
            Taluka - Khed, Dist - Pune,<br />
            Maharashtra, India.<br />
            Pin Code - 410505
          </p>
          <div className='flex justify-center sm:justify-start items-center gap-2 mt-3'>
            <FaEnvelope className='text-gray-700 hover:text-red-800 transition text-lg' />
            <a
              href="mailto:pm921670@gmail.com"
              className='font-medium text-sm text-gray-800 hover:text-red-800 transition break-all'
              rel="noopener noreferrer"
            >
              pm921670@gmail.com
            </a>
          </div>
        </div>

      </section>
    </footer>
  );
};

export default Footer;
