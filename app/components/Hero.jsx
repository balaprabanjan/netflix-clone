'use client'
import React from 'react'
import { Dropdown } from "flowbite-react";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="/navname.png" 
                alt="Netflix Logo"
              />
            </div>
            
            {/* Right Section */}
            <div className="flex flex-wrap md:flex-row gap-5">
              <Dropdown label="Language">
                <Dropdown.Item  className='hover:bg-blue-500'>English</Dropdown.Item>
                <Dropdown.Item  className='hover:bg-blue-500'>Hindi</Dropdown.Item>
              </Dropdown>
              <div>
                <a className="bg-red-600 rounded-lg px-5 py-2 text-white">
                  <a href="/login">Sign in</a>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/herobg.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="container mx-auto py-10 pl-56 flex flex-row gap-3 items-center w-full">
                <input
                    type="text"
                    name="Email address"
                    placeholder="Email address"
                    className="bg-black text-white border border-white hover:border-gray-300 rounded-lg px-4 h-14 w-1/2"
                />
                <a href="/login" className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium rounded px-4 py-3 w-1/4">Get Started</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
