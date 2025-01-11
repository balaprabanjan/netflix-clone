'use client'
import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
         <img src="/navname.png" alt=""/>
        </div>
        <div className='hidden md:flex space-x-4'>
          <a href="/" className="text-white px-3 py-2 rounded-md hover:text-red-600">Home</a>
          <a href="/about" className="text-white px-3 py-2 rounded-md hover:text-red-600">About</a>
          <a href="/services" className="text-white px-3 py-2 rounded-md hover:text-red-600">Services</a>
          <a href="/contact" className="text-white px-3 py-2 rounded-md hover:text-red-600">Contact</a>
          <a href="/favorites" className="text-white px-3 py-2 rounded-md hover:text-red-600">Favorites</a>
        </div>
       <div className="flex flex-wrap md:flex-row gap-5">
                     <Dropdown label="Language">
                       <Dropdown.Item  className='hover:bg-blue-500'>English</Dropdown.Item>
                       <Dropdown.Item  className='hover:bg-blue-500'>Hindi</Dropdown.Item>
                     </Dropdown>
                     <div>
                       <button className="bg-red-600 rounded-lg px-5 py-2 text-white">
                         <a href="">Sign out</a>
                       </button>
                     </div>
                   </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-4">
          <a href="/" className="text-white block px-3 py-2 rounded-md hover:text-red-600">Home</a>
          <a href="/about" className="text-white block px-3 py-2 rounded-md hover:text-red-600">About</a>
          <a href="/services" className="text-white block px-3 py-2 rounded-md hover:text-red-600">Services</a>
          <a href="/contact" className="text-white block px-3 py-2 rounded-md hover:text-red-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
