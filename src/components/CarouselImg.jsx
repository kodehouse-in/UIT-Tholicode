import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const isFirstImage = currentIndex === 0;

  useEffect(() => {
    const interval = setInterval(goToNext, 10000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="relative w-screen mx-auto">
      <div className="relative sm:h-100 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
            isFirstImage ? 'opacity-50' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            isFirstImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center text-white px-8">
            <p className="sm:text-3xl text-lg font-semibold mb-10">Welcome to</p>
            <p className="sm:text-5xl text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              UNIVERSITY INSTITUTE OF TECHNOLOGY
            </p>
            <p className="sm:text-5xl text-xl font-bold mt-3">THOLICODE, NEDUMANGAD</p>
            <p className="sm:text-2xl text-sm mt-10">
              Join us and be part of a journey that blends knowledge with nature!
            </p>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-950 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-950 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarouselImg;
