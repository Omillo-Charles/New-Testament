"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./herocarousel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Carousel */}
      <HeroCarousel />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-in fade-in zoom-in duration-1000">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <Image
                src="/ntcogkLogo.jpeg"
                alt="NTCG Kenya Logo"
                width={180}
                height={180}
                priority
                quality={90}
                className="relative mx-auto rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">NTCG</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Kenya</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
            Building faith, community, and hope across Kenya. Join us as we
            worship together, grow in faith, and serve our communities with
            love.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 w-full max-w-md sm:max-w-none mx-auto animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-500">
            <Link
              href="/about"
              className="w-full sm:w-auto bg-white text-[#E02020] hover:bg-gray-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Learn About Us
            </Link>
            <Link
              href="/portals"
              className="w-full sm:w-auto bg-[#1E4E9A] hover:bg-[#163E7A] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/10"
            >
              Find a Branch
            </Link>
            <Link
              href="/programs/events"
              className="w-full sm:w-auto backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Upcoming Events
            </Link>
          </div>

          {/* Key Features - Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-in slide-in-from-bottom-12 fade-in duration-1000 delay-700">
            <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                Community
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Join a loving community of believers across Kenya
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                Scripture
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Grow in faith through God's word and biblical teaching
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                Service
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Serve others with love and make a difference in our communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
