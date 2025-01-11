'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/supabaseClient';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    
    const fetchFavorites = async () => {
      const { data, error } = await supabase.from('favorites').select('*');
      if (error) {
        console.error('Error fetching favorites:', error);
      } else {
        setFavorites(data);
      }
    };
    fetchFavorites();
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      const fetchMovieDetails = async () => {
        const movieIds = favorites.map(fav => fav.item_id);
        const { data, error } = await supabase
          .from('movies')
          .select('*')
          .in('id', movieIds); 

        if (error) {
          console.error('Error fetching movie details:', error);
        } else {
          setMovieDetails(data);
        }
      };

      fetchMovieDetails();
    }
  }, [favorites]);

  if (movieDetails.length === 0) {
    return <div className="container mx-auto"><h1 className="text-red-600 text-3xl">No Favorites Yet</h1></div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 py-10 font-semibold text-3xl text-red-600">My Favorites</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {movieDetails.map((movie) => (
          <li key={movie.id} className="bg-transparent p-4 rounded-lg">
            <img
              src={movie.image_url} 
              alt={movie.title}
              className="rounded-lg h-64 mb-4 w-full object-cover"
            />
            <h2 className="text-xl text-white font-bold">{movie.title}</h2>
            <p className="mt-2 text-white">{movie.description}</p>
            <p className="mt-2 text-white">
              <strong>Rating:</strong> {movie.rating} / 5
            </p>
            {/* Additional fields for TV Shows */}
            <p className="mt-2 text-white">
              <strong>Seasons:</strong> {movie.seasons || 'N/A'}
            </p>
            <p className="mt-2 text-white">
              <strong>Release Year:</strong> {movie.release_year || 'N/A'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
