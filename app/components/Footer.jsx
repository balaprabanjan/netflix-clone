'use client'
import React from 'react'
import { Dropdown } from "flowbite-react";

const Footer = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap md:flex-col'>
          <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
          <p className="mt-4 text-lg md:text-xl font-light">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="container mx-auto py-10 pl-56 flex flex-row gap-3 items-center w-full">
                <input
                    type="text"
                    name="Email address"
                    placeholder="Email address"
                    className="bg-black text-white border border-white hover:border-gray-300 rounded-lg px-4 h-14 w-1/2"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium rounded px-4 py-3 w-1/4">
                    Get Started
                </button>
            </div>
        </div>
                <div>
                    <footer className="bg-black dark:bg-white mt-14">
                        <div className="mx-auto w-full max-w-screen-xl">
                        <p className='text-white font-medium'>Questions? Call <span className='underline'>000-800-919-1743</span></p>
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                            <div>
                                <ul className="text-white dark:text-white font-light">
                                    <li className="mb-4">
                                        <a href="#" className=" underline">FAQ's</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Investor relation</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Privacy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Speed test</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-white dark:text-white font-light">
                                    <li className="mb-4">
                                        <a href="#" className="underline">Help center</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Jobs</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Cookie Preferences</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Legal Notices</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-white dark:text-white font-light">
                                    <li className="mb-4">
                                        <a href="#" className="underline">Account</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Ways to Watch</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Corporate Information</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Only on Netflix</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-white dark:text-white font-light">
                                    <li className="mb-4">
                                        <a href="#" className="underline">Media Centre</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Terms of Use</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="underline">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </footer>
                </div>
                <div>
                     <div className="container mx-auto mt-14">
                                  <Dropdown label="Language">
                                    <Dropdown.Item  className='hover:bg-blue-500'>English</Dropdown.Item>
                                    <Dropdown.Item  className='hover:bg-blue-500'>Hindi</Dropdown.Item>
                                  </Dropdown>
                                  <p className='text-white mt-20 mb-14 font-light'>Netflix India</p>
                </div>
                </div>

      </div>
    </>
  )
}

export default Footer
