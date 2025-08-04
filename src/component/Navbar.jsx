import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import CardCount from './CardCount';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        
          <div className="text-lg font-bold text-gray-800 hover:text-blue-600">
            MyApp
          </div>

         
          <div className="flex items-center space-x-2 sm:space-x-4 ">
         
            <div className="relative hidden xs:flex sm:flex  ">
              <input 
                type="text"
                placeholder="Search..."
                className="px-2 py-1  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                <FaSearch />
              </span>
            </div>

    
            <FaSearch className="block sm:hidden text-gray-600 text-lg" /> {/* Visible only on small screens */}
            <FaUserCircle className="text-gray-700 text-xl  hover:text-blue-600" />
            <div >
          
              <CardCount  />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
