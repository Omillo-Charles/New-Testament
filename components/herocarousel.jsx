'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of hero images
  const heroImages = [
    '/heroImages/hero1.png',
    '/heroImages/hero2.png',
    '/heroImages/hero3.png',
    '/heroImages/hero4.png',
    '/heroImages/hero5.png',
    '/heroImages/hero6.png',
    '/heroImages/hero7.png',
    '/heroImages/hero8.png',
    '/heroImages/hero9.png',
    '/heroImages/hero10.png',
    '/heroImages/hero11.png',
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="absolute inset-0 z-0">
      {/* Image Slides */}
      <div className="relative w-full h-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`NTCG Kenya Church ${index + 1}`}
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center 30%' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f]/90 via-[#1E4E9A]/60 to-[#0a1e3f]/30 z-10"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white/30 scale-125'
                : 'bg-white/10 hover:bg-white/20'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;