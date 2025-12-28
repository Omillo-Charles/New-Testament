"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../lib/auth";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images from different folders
  const carouselImages = [
    "/heroImages/hero1.png",
    "/clergyImages/clergy1.png",
    "/youthImages/youth1.png",
    "/childrenImages/child1.png",
    "/aboutImages/about1.png",
    "/heroImages/hero2.png",
    "/clergyImages/clergy2.png",
    "/youthImages/youth2.png",
    "/childrenImages/child2.png",
    "/heroImages/hero3.png",
    "/clergyImages/clergy3.png",
    "/youthImages/youth3.png",
  ];

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);

    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const ActionButton = () => {
    if (!mounted) {
      // Loading state
      return (
        <div className="hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 py-3 px-8 rounded-full animate-pulse">
            <div className="w-24 h-6 bg-white/20 rounded"></div>
          </div>
        </div>
      );
    }

    if (isAuthenticated && user) {
      return (
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 inline-flex items-center text-sm lg:text-base">
            <span className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {user.picture && (
                  <img
                    src={user.picture}
                    alt={user.fullName}
                    className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-white/50"
                  />
                )}
                <span>Welcome, {user.fullName?.split(' ')[0] || 'Friend'}!</span>
              </div>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="/auth/signin"
          className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 inline-flex items-center text-sm lg:text-base"
        >
          <span className="flex items-center gap-2">
            Join NTCoGK
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    );
  };

  return (
    <section className="relative h-[calc(100vh-108px)] lg:h-[calc(100vh-128px)] flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Church community ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Very dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 lg:left-8 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 lg:right-8 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Welcome Text */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight">
              WELCOME TO
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400 mb-4 lg:mb-6 leading-tight">
              New Testament Church<br />
              Of God Kenya
            </h2>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-2">
              An integral part of the Church of God World Missions, headquartered in Cleveland, Tennessee, USA.
              Established in Kenya in 1977, we are a beacon of faith, community care, evangelism, and integrity across the nation.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mb-6 lg:mb-0">
            <ActionButton />
          </div>

          {/* Scripture Quote - Mobile/Tablet */}
          <div className={`lg:hidden mt-6 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="text-sm sm:text-base font-light text-white/80 mb-2 leading-relaxed">
              "Come, let us bow down in worship,<br />
              let us kneel before the Lord our Maker."
            </blockquote>
            <cite className="text-xs sm:text-sm text-amber-200 font-medium">
              — Psalm 95:6
            </cite>
          </div>
        </div>
      </div>

      {/* Scripture Quote - Desktop (Bottom Left) */}
      <div className="hidden lg:block absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-20">
        <div className={`transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-base xl:text-lg font-light text-white/90 mb-2 leading-relaxed">
            "Come, let us bow down in worship,<br />
            let us kneel before the Lord our Maker."
          </blockquote>
          <cite className="text-sm xl:text-base text-amber-200 font-medium">
            — Psalm 95:6
          </cite>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;