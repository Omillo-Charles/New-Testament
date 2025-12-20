"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

const Navbar = () => {







  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg">
      {/* First Level - Contact & Social Media */}
      <div className="bg-[#1E4E9A] text-white py-2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-3 lg:space-x-6">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xs lg:text-sm">+254 759 120 222</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xs lg:text-sm">info@ntcogk.org</span>
              </div>
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs lg:text-sm">Karen, Nairobi</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Facebook */}
              <a href="#" className="hover:text-[#E02020] transition-colors" title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" className="hover:text-[#E02020] transition-colors" title="X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="hover:text-[#E02020] transition-colors" title="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="hover:text-[#E02020] transition-colors" title="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Level - Logo, Church Name & Search */}
      <div className="bg-white border-b border-gray-200 py-4 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="flex items-center justify-between lg:hidden">
            {/* Mobile Logo - Left */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 relative rounded-lg shadow-md bg-white p-1">
                <Image
                  src="/mainLogo.png"
                  alt="NTCoG Kenya Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </Link>

            {/* Mobile Center Section - Profile Icon and Search */}
            <div className="flex items-center space-x-3 flex-1 max-w-md mx-4">
              {/* Profile Icon */}
              <a
                href="https://auth.ntcogk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-200"
                title="Sign In / Sign Up"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>

              {/* Search Bar */}
              <div className="flex-1">
                <SearchBar className="text-sm" placeholder="Search..." />
              </div>
            </div>

            {/* Mobile Menu Toggle - Using NavLinks Component */}
            <NavLinks />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:items-center">
            {/* Church Name - Left */}
            <div>
              <h1 className="text-2xl font-bold text-[#1E4E9A]">NTCoGK</h1>
              <p className="text-sm text-gray-600">New Testament Church of God Kenya</p>
            </div>

            {/* Logo - Center */}
            <div className="flex justify-center">
              <Link href="/" className="flex items-center">
                <div className="w-16 h-16 relative bg-white border border-gray-200 rounded-lg shadow-sm p-2 hover:shadow-md transition-shadow duration-300">
                  <Image
                    src="/mainLogo.png"
                    alt="NTCOGK Logo"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </Link>
            </div>

            {/* Search Bar, Profile Icon & Menu - Right */}
            <div className="flex justify-end items-center space-x-3">
              <SearchBar className="w-64" placeholder="Search..." />

              {/* Profile Icon */}
              <a
                href="https://auth.ntcogk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-200"
                title="Sign In / Sign Up"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>

              <div className="relative">
                <NavLinks />
              </div>
            </div>
          </div>
        </div>
      </div>




    </nav >
  );
};

export default Navbar;
