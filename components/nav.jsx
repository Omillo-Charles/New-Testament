"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { useAuth } from "../lib/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ProfileSection = ({ isMobile = false }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { signOut } = useAuth();

    if (!mounted) {
      // Show loading state
      return (
        <div className={`flex items-center justify-center ${isMobile ? 'w-9 h-9' : 'w-10 h-10'} bg-gray-300 rounded-full animate-pulse`}>
        </div>
      );
    }

    if (isAuthenticated && user) {
      return (
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`flex items-center justify-center ${isMobile ? 'w-9 h-9' : 'w-10 h-10'} rounded-full transition-all duration-200 ${user.picture ? '' : 'bg-[#E02020] text-white'} hover:ring-2 hover:ring-offset-2 hover:ring-[#1E4E9A] focus:outline-none`}
          >
            {user.picture ? (
              <img
                src={user.picture}
                alt={user.fullName}
                className={`${isMobile ? 'w-9 h-9' : 'w-10 h-10'} rounded-full border-2 border-gray-300`}
              />
            ) : (
              <span className="text-sm font-medium">
                {user.fullName?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}
          </button>

          {showDropdown && (
            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[110] border border-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none ${isMobile ? 'bottom-full mb-2 origin-bottom-right' : 'top-full origin-top-right'}`}>
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900 truncate">{user.fullName}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  signOut();
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href="/auth/signin"
        className={`flex items-center justify-center ${isMobile ? 'w-9 h-9' : 'w-10 h-10'} text-white bg-gray-500 hover:bg-gray-600 rounded-full transition-all duration-200`}
        title="Sign In / Sign Up"
      >
        <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </Link>
    );
  };

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
                <span className="text-xs lg:text-sm italic">+254 759 120 222</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xs lg:text-sm italic">info@ntcogk.org</span>
              </div>
            </div>

            {/* Location Info */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs lg:text-sm font-thin italic">Karen, Nairobi</span>
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

            {/* Mobile Center Section - Profile Icon and Search Icon */}
            <div className="flex items-center space-x-3 flex-1 justify-end max-w-md mx-4">
              {/* Search Icon */}
              <Link
                href="/search"
                className="flex items-center justify-center p-2 text-gray-600 hover:text-[#1E4E9A] hover:bg-gray-100 rounded-lg transition-all duration-200"
                title="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              {/* Profile Icon */}
              <ProfileSection isMobile={true} />
            </div>

            {/* Mobile Menu Toggle - Using NavLinks Component */}
            <NavLinks />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:items-center">
            {/* Church Name - Left */}
            <div>
              <h1 className="text-xl font-bold text-[#1E4E9A]">NTCoGK</h1>
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

            {/* Search Icon, Profile Icon & Menu - Right */}
            <div className="flex justify-end items-center space-x-3">
              {/* Search Icon */}
              <Link
                href="/search"
                className="flex items-center justify-center p-2 text-gray-600 hover:text-[#1E4E9A] hover:bg-gray-100 rounded-lg transition-all duration-200"
                title="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              {/* Profile Icon */}
              <ProfileSection isMobile={false} />

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
