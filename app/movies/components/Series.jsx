'use client'
import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';

const Series = () => {
  const [tvShows, setTvShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const images = [
    "/breaking.jpg",
    "/peakyb.jpg",
    "/vikings.jpg",
    "/friends.jpg",
    "/mh.jpg",
  ];

  useEffect(() => {
    const fetchTvShows = async () => {
      const { data, error } = await supabase.from('tv_shows').select('*');
      if (error) console.error('Error fetching TV shows:', error);
      else setTvShows(data);
    };
    fetchTvShows();
  }, []);

  const addToFavorites = async (itemId, itemType) => {
    const { error } = await supabase.from('favorites').insert([{ item_id: itemId, item_type: itemType }]);
    if (error) console.error('Error adding to favorites:', error);
    else alert('Added to favorites!');
  };

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 py-10 font-semibold text-3xl text-red-600">Famous TV-Shows</h1>
      <ul className="flex flex-wrap items-center justify-center gap-16">
        {tvShows.map((show, index) => (
          <li key={show.id} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src={images[index % images.length]}
              alt={show.title}
              className="rounded-lg h-64 cursor-pointer"
              onClick={() => setSelectedShow(show)}
            />
          </li>
        ))}
      </ul>

      {selectedShow && (
        <div className="fixed inset-0 container mx-auto bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-transparent p-6 rounded-lg text-white text-2xl">
            <h2 className="text-3xl font-extrabold text-red-600">{selectedShow.title}</h2>
            <p className="mt-4">{selectedShow.description}</p>
            <p className="mt-4"><strong>Seasons:</strong> {selectedShow.seasons}</p>
            <p className="mt-4"><strong>Rating:</strong> {selectedShow.rating} / 5</p>
            <button
              onClick={() => addToFavorites(selectedShow.id, 'tv_show')}
              className="mt-4 mr-4 bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Add to Favorites
            </button>
            <button
              onClick={() => setSelectedShow(null)}
              className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Series;
