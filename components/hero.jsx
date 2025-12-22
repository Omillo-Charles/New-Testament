"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../lib/auth";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

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
        <div className={`hidden lg:block transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 inline-flex items-center">
            <span className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {user.picture && (
                  <img
                    src={user.picture}
                    alt={user.fullName}
                    className="w-6 h-6 rounded-full border border-white/50"
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
      <div className={`hidden lg:block transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="/auth/signin"
          className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 inline-flex items-center"
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
            <ActionButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;