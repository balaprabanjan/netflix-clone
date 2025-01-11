'use client';
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { supabase } from '@/supabaseClient';

const Trending = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data from the trendingmovies table
    const fetchMovies = async () => {
      try {
        const { data, error } = await supabase.from('trendingmovies').select('*');
        if (error) {
          console.error('Error fetching movies:', error);
        } else {
          setMovies(data);
        }
      } catch (err) {
        console.error('Unhandled error:', err);
      }
    };
    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(movies.length / 5));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(movies.length / 5)) % Math.ceil(movies.length / 5));
  };

  const handleMovieClick = async (movieId) => {
    if (!movieId) {
      console.error('Invalid movie ID:', movieId);
      return;
    }
  
    try {
      const { data, error } = await supabase
        .from('Trendingmovies')
        .select('*')
        .eq('id', movieId)
        .single();
  
      if (error) {
        console.error('Error fetching movie details:', error.message || error);
        return;
      }
  
      if (!data) {
        console.error('No movie found with the given ID:', movieId);
        return;
      }
  
      setSelectedMovie(data);
    } catch (err) {
      console.error('Unhandled error in handleMovieClick:', err);
    }
  };
  

  return (
    <div className="container mx-auto w-screen bg-black mt-10 relative overflow-hidden">
      {/* Trending Movies Title */}
      <div className="absolute top-2 right-8 text-white text-2xl font-semibold">
        Trending Movies
      </div>

      <div className="relative mt-10">
        <div className="flex flex-row gap-8 overflow-hidden ml-10">
          {movies.slice(currentSlide * 5, currentSlide * 5 + 5).map((movie) => (
            <div
              key={movie.id}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={movie.poster_url}
                className="h-64 rounded-lg cursor-pointer"
                alt={movie.title}
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute top-0 left-4 h-full bg-transparent hover:bg-slate-600 text-white flex items-center px-4 py-2 rounded-full"
          >
            <IoIosArrowBack className="text-5xl" />
          </button>
        )}

        {/* Next Button */}
        {currentSlide < Math.ceil(movies.length / 5) - 1 && (
          <button
            onClick={handleNext}
            className="absolute top-0 right-4 h-full bg-transparent hover:bg-slate-600 text-white flex items-center px-4 py-2 rounded-full"
          >
            <IoIosArrowForward className="text-5xl" />
          </button>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-black">
            <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
            <p className="mt-4">{selectedMovie.description}</p>
            <p className="mt-2 text-gray-600">Genre: {selectedMovie.genre}</p>
            <p className="mt-2 text-gray-600">
              Release Date: {new Date(selectedMovie.release_date).toLocaleDateString()}
            </p>
            <button
              onClick={() => setSelectedMovie(null)}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
