"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/newHero/hero.jpg"
          alt="Church worship background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            {/* Scripture Quote - Left Side */}
            <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <blockquote className="text-lg md:text-xl font-light text-white mb-2 leading-relaxed">
                "Come, let us bow down in worship,<br />
                let us kneel before the Lord our Maker."
              </blockquote>
              <cite className="text-sm md:text-base text-blue-200 font-medium">
                — Psalm 95:6
              </cite>
            </div>

            {/* Welcome Button - Right Side (Desktop only) */}
            <div className={`hidden lg:block transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="/auth/signin"
                className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  Welcome Today
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;