"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortalsDropdownOpen, setIsPortalsDropdownOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const pathname = usePathname();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const accessToken = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");
      
      console.log('🔍 Checking auth status:', { 
        hasToken: !!accessToken, 
        hasUserData: !!userData 
      });
      
      if (accessToken && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
          console.log('✅ User authenticated:', parsedUser.email);
        } catch (error) {
          console.error("❌ Error parsing user data:", error);
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
        console.log('❌ User not authenticated');
      }
    };

    checkAuth();
    
    // Listen for storage changes (login/logout in other tabs)
    window.addEventListener("storage", checkAuth);
    
    // Listen for custom auth state change events
    window.addEventListener("authStateChanged", checkAuth);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authStateChanged", checkAuth);
    };
  }, [pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsPortalsDropdownOpen(false);
    setIsProgramsDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".resources-dropdown")) {
        setIsDropdownOpen(false);
      }
      if (isPortalsDropdownOpen && !event.target.closest(".portals-dropdown")) {
        setIsPortalsDropdownOpen(false);
      }
      if (
        isProgramsDropdownOpen &&
        !event.target.closest(".programs-dropdown")
      ) {
        setIsProgramsDropdownOpen(false);
      }
      if (isProfileDropdownOpen && !event.target.closest(".profile-dropdown") && !event.target.closest(".profile-dropdown-mobile")) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isPortalsDropdownOpen, isProgramsDropdownOpen, isProfileDropdownOpen]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsProfileDropdownOpen(false);
  };

  const confirmLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    localStorage.removeItem("authProvider");
    setIsAuthenticated(false);
    setUser(null);
    setShowLogoutModal(false);
    
    // Trigger auth state change event
    window.dispatchEvent(new Event('authStateChanged'));
    
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const resourcesLinks = [
    { href: "/resources/churches", label: "Our Churches" },
    { href: "/resources/gallery", label: "NTCG Gallery" },
    { href: "/resources/beliefs", label: "Doctrinal Commitments" },
    { href: "/resources/practical-commitment", label: "Practical Commitment" },
    { href: "/resources/events-calendar", label: "Events Calendar" },
    { href: "/resources/faqs", label: "FAQs" },
    { href: "/resources/legals", label: "Legals" },
  ];

  const portalsLinks = [
    { href: "/portals/adults", label: "Adult Fellowship" },
    { href: "/portals/youth", label: "Youth Ministry" },
    { href: "/portals/children", label: "Kids Ministry" },
    { href: "/portals/submissions", label: "Submissions" },
    { href: "/portals/clergy", label: "Leadership" },
    { href: "/portals/giving", label: "Support Ministry" },
    { href: "/portals/shop", label: "Ministry Store" },
  ];

  const programsLinks = [
    {
      href: "/programs/bible-college",
      label: "Bible College / Training Center",
    },
    { href: "/programs/discipleship", label: "Discipleship Courses" },
    { href: "/programs/events", label: "Conferences & Events" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isResourcesActive = () => {
    return pathname.startsWith("/resources");
  };

  const isPortalsActive = () => {
    return pathname.startsWith("/portals");
  };

  const isProgramsActive = () => {
    return pathname.startsWith("/programs");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative rounded-lg shadow-md bg-white p-1">
              <Image
                src="/mainLogo.png"
                alt="NTCG Kenya Logo"
                fill
                className="object-contain rounded-md"
              />
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
            {navLinks.slice(0, 2).map((link, index) => (
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

            {/* Resources Dropdown */}
            <div className="relative resources-dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center font-medium transition-colors duration-200 ${
                  isResourcesActive()
                    ? "text-[#1E4E9A] font-semibold"
                    : "text-gray-800 hover:text-[#1E4E9A]"
                }`}
              >
                Resources
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
                  {resourcesLinks.map((resource, index) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className={`block px-4 py-2 transition-colors ${
                        isActiveLink(resource.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-gray-50"
                            : "text-[#1E4E9A] font-semibold bg-gray-50"
                          : index % 2 === 0
                          ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {resource.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portals Dropdown */}
            <div className="relative portals-dropdown">
              <button
                onClick={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)}
                className={`flex items-center font-medium transition-colors duration-200 ${
                  isPortalsActive()
                    ? "text-[#E02020] font-semibold"
                    : "text-gray-800 hover:text-[#E02020]"
                }`}
              >
                Portals
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isPortalsDropdownOpen ? "rotate-180" : ""
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
              {isPortalsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E02020]/20 py-2 z-50">
                  {portalsLinks.map((portal, index) => (
                    <Link
                      key={portal.href}
                      href={portal.href}
                      className={`block px-4 py-2 transition-colors ${
                        isActiveLink(portal.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-gray-50"
                            : "text-[#1E4E9A] font-semibold bg-gray-50"
                          : index % 2 === 0
                          ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                      onClick={() => setIsPortalsDropdownOpen(false)}
                    >
                      {portal.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative programs-dropdown">
              <button
                onClick={() =>
                  setIsProgramsDropdownOpen(!isProgramsDropdownOpen)
                }
                className={`flex items-center font-medium transition-colors duration-200 ${
                  isProgramsActive()
                    ? "text-[#1E4E9A] font-semibold"
                    : "text-gray-800 hover:text-[#1E4E9A]"
                }`}
              >
                Programs
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isProgramsDropdownOpen ? "rotate-180" : ""
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
              {isProgramsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#1E4E9A]/20 py-2 z-50">
                  {programsLinks.map((program, index) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className={`block px-4 py-2 transition-colors ${
                        isActiveLink(program.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-gray-50"
                            : "text-[#1E4E9A] font-semibold bg-gray-50"
                          : index % 2 === 0
                          ? "text-gray-800 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-800 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                      onClick={() => setIsProgramsDropdownOpen(false)}
                    >
                      {program.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link, index) => (
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
            {/* Desktop Auth/Profile */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative profile-dropdown">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Profile menu"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E4E9A] border-2 border-[#E02020] flex items-center justify-center text-white font-semibold">
                      {user?.firstName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
                    </div>
                    <svg
                      className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                        isProfileDropdownOpen ? "rotate-180" : ""
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

                  {/* Profile Dropdown Menu */}
                  {isProfileDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {user?.firstName && user?.lastName 
                            ? `${user.firstName} ${user.lastName}`
                            : user?.email}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
                      </div>
                      {(user?.role === "admin" || user?.role === "super-admin") && (
                        <Link
                          href="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors border-b border-gray-100"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Admin Dashboard
                          </span>
                        </Link>
                      )}
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/profile/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogoutClick}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
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
            )}

            {/* Mobile Profile Icon (beside hamburger) */}
            {isAuthenticated && (
              <div className="md:hidden relative profile-dropdown-mobile">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="w-8 h-8 rounded-full bg-[#1E4E9A] border-2 border-[#E02020] flex items-center justify-center text-white font-semibold text-sm"
                  aria-label="Profile menu"
                >
                  {user?.firstName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
                </button>

                {/* Mobile Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">
                        {user?.firstName && user?.lastName 
                          ? `${user.firstName} ${user.lastName}`
                          : user?.email}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
                    </div>
                    {(user?.role === "admin" || user?.role === "super-admin") && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors border-b border-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Admin Dashboard
                        </span>
                      </Link>
                    )}
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/profile/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

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
              {navLinks.slice(0, 2).map((link, index) => (
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

              {/* Mobile Resources Section */}
              <div className="py-2 px-3">
                <span
                  className={`font-medium ${
                    isResourcesActive()
                      ? "text-[#1E4E9A] font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  Resources
                </span>
                <div className="ml-4 mt-2 space-y-2">
                  {resourcesLinks.map((resource, index) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className={`block py-1 px-2 rounded transition-colors ${
                        isActiveLink(resource.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-red-50"
                            : "text-[#1E4E9A] font-semibold bg-blue-50"
                          : index % 2 === 0
                          ? "text-gray-700 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                    >
                      {resource.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Portals Section */}
              <div className="py-2 px-3">
                <span
                  className={`font-medium ${
                    isPortalsActive()
                      ? "text-[#E02020] font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  Portals
                </span>
                <div className="ml-4 mt-2 space-y-2">
                  {portalsLinks.map((portal, index) => (
                    <Link
                      key={portal.href}
                      href={portal.href}
                      className={`block py-1 px-2 rounded transition-colors ${
                        isActiveLink(portal.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-red-50"
                            : "text-[#1E4E9A] font-semibold bg-blue-50"
                          : index % 2 === 0
                          ? "text-gray-700 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                    >
                      {portal.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Programs Section */}
              <div className="py-2 px-3">
                <span
                  className={`font-medium ${
                    isProgramsActive()
                      ? "text-[#1E4E9A] font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  Programs
                </span>
                <div className="ml-4 mt-2 space-y-2">
                  {programsLinks.map((program, index) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className={`block py-1 px-2 rounded transition-colors ${
                        isActiveLink(program.href)
                          ? index % 2 === 0
                            ? "text-[#E02020] font-semibold bg-red-50"
                            : "text-[#1E4E9A] font-semibold bg-blue-50"
                          : index % 2 === 0
                          ? "text-gray-700 hover:bg-gray-50 hover:text-[#E02020]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#1E4E9A]"
                      }`}
                    >
                      {program.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(2).map((link, index) => (
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
            </div>
          </div>
        </div>

        {/* Mobile Auth Buttons - Below Menu (when not authenticated) */}
        {isOpen && !isAuthenticated && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/login"
                className="text-center py-2 px-4 rounded-lg text-gray-800 hover:bg-white hover:text-[#1E4E9A] transition-colors"
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
        )}

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to logout? You'll need to sign in again to access your account.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={cancelLogout}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2 bg-[#E02020] hover:bg-[#B81C1C] text-white rounded-lg transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
