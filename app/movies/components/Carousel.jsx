'use client'
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of trailers and movie details
  const trailers = [
    {
        title: "The Greatest of all time",
        description: "After years of successful operations, an elite agent suddenly retires, choosing a quiet, ordinary life. However, when a past mission comes back to haunt him, he reunites with his team to prevent a catastrophic disaster.",
        url: "https://www.youtube.com/embed/jxCRlebiebw?si=bMUAX5JvSAfYWvPD",
      },
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      url: "https://www.youtube.com/embed/8hP9D6kZseM?autoplay=1&mute=1",
    },
    {
      title: "Interstellar",
      description: "A journey beyond the stars.",
      url: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&mute=1",
    },
    {
      title: "The Dark Knight",
      description: "The caped crusader fights for Gotham.",
      url: "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1&mute=1",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? trailers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === trailers.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Optional: Reset scroll or other side effects if needed when the slide changes.
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {trailers.map((trailer, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 relative"
          >
            {/* YouTube Trailer */}
            {currentIndex === index && (
              <iframe
                src={trailer.url}
                title={`Trailer ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            )}

            {/* Movie Details */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-md">
              <h2 className="text-2xl font-bold">{trailer.title}</h2>
              <p className="text-sm">{trailer.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {trailers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
