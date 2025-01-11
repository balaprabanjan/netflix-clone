'use client';
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md bg-black w-full">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 text-left text-white font-medium hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-gray-300"
      >
        <span>{title}</span>
        <IoMdAdd/>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-6 py-4 text-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const data = [
    { title: 'What is Netflix?', content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!" },
    { title: 'How much does netflix cost?', content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
    { title: 'Where i can watch?', content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
    { title: 'How do i cancel?' , content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
    { title: 'Where i can watch on Netflix?' , content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
    { title: 'Is Netflix good for kids?' , content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."},
  ];

  return (
    <div className="w-full container mx-auto mt-24 bg-black py-10">
      {/* Title Section */}
      <div className="ml-10 mb-8 text-white">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4 text-3xl px-4">
        {data.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
