"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./herocarousel";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 lg:pt-0">
      {/* Background Carousel */}
      <HeroCarousel />

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-600/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl transition-all duration-700 ease-out"
          style={{
            right: `${mousePosition.x * 0.01}%`,
            bottom: `${mousePosition.y * 0.01}%`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">



          {/* Enhanced Main Heading */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1] tracking-tight">
              <span className="inline-block animate-pulse">Welcome</span>{" "}
              <span className="inline-block animate-pulse">to</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E02020] via-red-400 to-orange-500 inline-block drop-shadow-2xl animate-bounce">
                NTCoG
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4E9A] via-blue-400 to-cyan-300 inline-block drop-shadow-2xl animate-bounce">
                Kenya
              </span>
            </h1>

            {/* Enhanced Decorative Line with Animation */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full animate-pulse shadow-lg shadow-amber-600/50"></div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className={`mb-12 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl md:text-3xl text-blue-50 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
              Building <span className="text-[#E02020] font-semibold">faith</span>,
              <span className="text-amber-600 font-semibold"> community</span>, and
              <span className="text-[#1E4E9A] font-semibold"> hope</span> across Kenya
            </p>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join us as we worship together, grow in faith, and serve our communities with love and purpose
            </p>
          </div>

          {/* Enhanced Call to Action Buttons */}
          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <Link
                href="/about"
                className="w-[85%] sm:w-auto bg-white text-[#E02020] font-bold py-5 px-12 rounded-xl shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn About Us
                </span>
              </Link>

              <Link
                href="/portals"
                className="w-[85%] sm:w-auto bg-[#1E4E9A] text-white font-bold py-5 px-12 rounded-xl shadow-2xl border border-white/20"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find a Branch
                </span>
              </Link>

              <Link
                href="/programs/events"
                className="w-[85%] sm:w-auto bg-transparent border-2 border-white text-white font-bold py-5 px-12 rounded-xl shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  Upcoming Events
                </span>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;