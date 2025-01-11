'use client';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { supabase } from '@/supabaseClient';

const Trending = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const slides = [
    [
      "/luckybhaskar.jpg",
      "/carry-on-2.jpg",
      "/amaran.jpg",
      "/vicky.jpg",
      "/yoyo.jpg",
    ],
    [
      "/jigra.jpg",
      "/sikandar.jpg",
      "thangalan.jpg",
      "/devara.jpg",
      "/that.jpg",
    ],
  ];

  useEffect(() => {
    // Fetch movie data from Supabase
    const fetchMovies = async () => {
      const { data, error } = await supabase.from('movies').select('*');
      if (error) console.error('Error fetching movies:', error);
      else setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMovieClick = async (movieId) => {
    // Fetch movie details on click
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .eq('id', movieId)
      .single();
    if (error) console.error('Error fetching movie details:', error);
    else setSelectedMovie(data);
  };

  return (
    <div className="container mx-auto bg-black mt-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-3xl">Trending now</h1>
        <div className="flex flex-row mt-10 gap-2">
          <Dropdown label="India">
            <Dropdown.Item className="hover:bg-blue-500">India</Dropdown.Item>
            <Dropdown.Item className="hover:bg-blue-500">Global</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Movies">
            <Dropdown.Item className="hover:bg-blue-500">Movies</Dropdown.Item>
            <Dropdown.Item className="hover:bg-blue-500">TV shows</Dropdown.Item>
          </Dropdown>
        </div>

      <div className="relative mt-5">
        <div className="flex flex-row py-20 gap-8 overflow-hidden ml-10">
          {slides[currentSlide].map((src, index) => (
            <div
              key={index}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={() => handleMovieClick(index + 1)} // Simulated ID for demo purposes
            >
              <img
                src={src}
                className="h-64 rounded-lg cursor-pointer"
                alt={`Movie ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute top-0 left-4 h-full bg-transparent hover:bg-transparent text-white flex items-center px-4 py-2 rounded-full"
          >
            <IoIosArrowBack className="text-5xl" />
          </button>
        )}

        {/* Next Button */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute top-0 right-4 h-full bg-transparent hover:bg-transparent text-white flex items-center px-4 py-2 rounded-full"
          >
            <IoIosArrowForward className="text-5xl" />
          </button>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 container mx-auto bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-transparent p-6 rounded-lg text-white text-2xl">
            <h2 className="text-3xl font-extrabold text-red-600">{selectedMovie.title}</h2>
            <p className="mt-4">{selectedMovie.description}</p>
            <p className="mt-4">
              <strong>Rating:</strong> {selectedMovie.rating} / 5
            </p>
            <button
              onClick={() => setSelectedMovie(null)}
              className="mt-6 bg-red-700 text-white text-xl px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Trending;
