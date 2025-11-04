"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portals", label: "Portals" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  const ministryLinks = [
    { href: "/ministries/adults", label: "Adults" },
    { href: "/ministries/youth", label: "Youth" },
    { href: "/ministries/children", label: "Children" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isMinistryActive = () => {
    return pathname.startsWith("/ministries");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#E02020] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[#E02020]">NTCG</span>
              <span className="text-sm text-[#1E4E9A] block leading-tight font-medium">
                Kenya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? index % 2 === 0 
                      ? "text-[#E02020] font-semibold" 
                      : "text-[#1E4E9A] font-semibold"
                    : index % 2 === 0 
                      ? "text-gray-800 hover:text-[#E02020]" 
                      : "text-gray-800 hover:text-[#1E4E9A]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Ministries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center font-medium transition-colors duration-200 ${
                  isMinistryActive()
                    ? "text-[#1E4E9A] font-semibold"
                    : "text-gray-800 hover:text-[#1E4E9A]"
                }`}
              >
                Ministries
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#1E4E9A]/20 py-2 z-50">
                  {ministryLinks.map((ministry, index) => (
                    <Link
                      key={ministry.href}
                      href={ministry.href}
                      className={`block px-4 py-2 transition-colors ${
                        isActiveLink(ministry.href)
                          ? index % 2 === 0 
                            ? "text-[#E02020] font-semibold bg-gray-50" 
                            : "text-[#1E4E9A] font-semibold bg-gray-50"
                          : index % 2 === 0 
                            ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]" 
                            : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {ministry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? index % 2 === 0 
                      ? "text-[#E02020] font-semibold" 
                      : "text-[#1E4E9A] font-semibold"
                    : index % 2 === 0 
                      ? "text-gray-800 hover:text-[#E02020]" 
                      : "text-gray-800 hover:text-[#1E4E9A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/login"
                className="text-gray-800 hover:text-[#1E4E9A] font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#E02020] hover:bg-[#B81C1C] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1 ${
                    isOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 bg-white border-t border-gray-100 max-h-80 overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.slice(0, 3).map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    isActiveLink(link.href)
                      ? index % 2 === 0 
                        ? "text-[#E02020] font-semibold bg-red-50" 
                        : "text-[#1E4E9A] font-semibold bg-blue-50"
                      : index % 2 === 0 
                        ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]" 
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Ministries Section */}
              <div className="py-2 px-3">
                <span className={`font-medium ${
                  isMinistryActive() ? "text-[#1E4E9A] font-semibold" : "text-gray-800"
                }`}>Ministries</span>
                <div className="ml-4 mt-2 space-y-2">
                  {ministryLinks.map((ministry, index) => (
                    <Link
                      key={ministry.href}
                      href={ministry.href}
                      className={`block py-1 px-2 rounded transition-colors ${
                        isActiveLink(ministry.href)
                          ? index % 2 === 0 
                            ? "text-[#E02020] font-semibold bg-red-50" 
                            : "text-[#1E4E9A] font-semibold bg-blue-50"
                          : index % 2 === 0 
                            ? "text-gray-700 hover:bg-gray-50 hover:text-[#E02020]" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                    >
                      {ministry.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(3).map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    isActiveLink(link.href)
                      ? index % 2 === 0 
                        ? "text-[#E02020] font-semibold bg-red-50" 
                        : "text-[#1E4E9A] font-semibold bg-blue-50"
                      : index % 2 === 0 
                        ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]" 
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  href="/login"
                  className="text-center py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#E02020] hover:bg-[#B81C1C] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
