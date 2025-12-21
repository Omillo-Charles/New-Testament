"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "scripture",
      background: "/newHero/hero.jpg",
      content: {
        quote: "Come, let us bow down in worship, let us kneel before the Lord our Maker.",
        reference: "— Psalm 95:6"
      }
    },
    {
      type: "bishop",
      background: "/clergyImages/clergy1.png",
      content: {
        title: "Welcome to NTCoGK",
        message: "Grace and peace to you in the name of our Lord Jesus Christ. We are delighted to welcome you to the New Testament Church of God Kenya family. Here, you will find a community rooted in faith, love, and service to God and one another.",
        author: "Bishop Francis Wamweya",
        position: "National Bishop, NTCoGK"
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance slides every 8 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-1500 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.background}
            alt={slide.type === 'scripture' ? 'Church worship background' : 'Bishop Francis Wamweya'}
            className={`w-full h-full ${slide.type === 'bishop' ? 'object-cover' : 'object-cover'
              }`}
            style={slide.type === 'bishop' ? { objectPosition: 'center 25%' } : {}}
          />
          <div className={`absolute inset-0 ${slide.type === 'bishop'
            ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/30'
            : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
            }`}></div>
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 w-full pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            {/* Left Content */}
            <div className="relative">
              {/* Scripture Slide Content */}
              <div className={`transition-all duration-1500 ease-in-out ${currentSlide === 0
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute inset-0'
                }`}>
                <div>
                  <blockquote className="text-lg md:text-xl font-light text-white mb-2 leading-relaxed">
                    {slides[0].content.quote}
                  </blockquote>
                  <cite className="text-sm md:text-base text-blue-200 font-medium">
                    {slides[0].content.reference}
                  </cite>
                </div>
              </div>

              {/* Bishop Welcome Slide Content */}
              <div className={`transition-all duration-1500 ease-in-out ${currentSlide === 1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute inset-0'
                }`}>
                <div className="max-w-2xl">
                  <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed">
                    {slides[1].content.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Welcome Button and Carousel Dots */}
            <div className="flex flex-col items-end gap-4">
              {/* Welcome Button (only on scripture slide) or Bishop Name (on bishop slide) */}
              <div className="relative">
                {/* Welcome Button for Scripture Slide */}
                <div className={`transition-all duration-1500 ease-in-out ${currentSlide === 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0'
                  }`}>
                  <button className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20">
                    <span className="flex items-center gap-2">
                      Welcome Today
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Bishop Name for Bishop Slide */}
                <div className={`transition-all duration-1500 ease-in-out ${currentSlide === 1
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0'
                  }`}>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      Bishop Francis Wamweya
                    </p>
                    <p className="text-sm md:text-base text-blue-200">
                      National Bishop, NTCoGK
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-white w-6'
                      : 'bg-white/40 hover:bg-white/60'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;