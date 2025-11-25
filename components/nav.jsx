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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const accessToken = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");
      
      if (accessToken && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("❌ Error parsing user data:", error);
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
    
    window.addEventListener("storage", checkAuth);
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
      label: "Bible College",
    },
    { href: "/programs/discipleship", label: "Discipleship Courses" },
    { href: "/programs/events", label: "Conferences & Events" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isResourcesActive = () => pathname.startsWith("/resources");
  const isPortalsActive = () => pathname.startsWith("/portals");
  const isProgramsActive = () => pathname.startsWith("/programs");

  // Reusable Dropdown Component
  const NavDropdown = ({ label, isOpen, toggle, links, active }) => (
    <div className={`relative ${label.toLowerCase()}-dropdown group`}>
      <button
        onClick={toggle}
        className={`flex items-center text-sm font-semibold tracking-wide transition-all duration-300 px-3 py-2 rounded-full hover:bg-gray-100/50 ${
          active || isOpen
            ? "text-[#1E4E9A]"
            : "text-gray-600 hover:text-[#1E4E9A]"
        }`}
      >
        {label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#E02020]" : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 transform transition-all duration-300 origin-top-left z-50 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 visible"
            : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        <div className="p-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActiveLink(link.href)
                  ? "bg-blue-50 text-[#1E4E9A]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#E02020] hover:pl-6"
              }`}
              onClick={() => toggle(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2" 
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 mr-3 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E02020]/10 to-[#1E4E9A]/10 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-white rounded-xl shadow-sm p-1.5 border border-gray-100">
                <Image
                  src="/mainLogo.png"
                  alt="NTCG Kenya Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#E02020] leading-none tracking-tight">NTCG</span>
              <span className="text-sm font-semibold text-[#1E4E9A] tracking-widest uppercase">Kenya</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? "text-[#E02020] bg-red-50"
                    : "text-gray-600 hover:text-[#1E4E9A] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <NavDropdown 
              label="Resources" 
              isOpen={isDropdownOpen} 
              toggle={() => setIsDropdownOpen(!isDropdownOpen)} 
              links={resourcesLinks} 
              active={isResourcesActive()} 
            />

            <NavDropdown 
              label="Portals" 
              isOpen={isPortalsDropdownOpen} 
              toggle={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)} 
              links={portalsLinks} 
              active={isPortalsActive()} 
            />

            <NavDropdown 
              label="Programs" 
              isOpen={isProgramsDropdownOpen} 
              toggle={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)} 
              links={programsLinks} 
              active={isProgramsActive()} 
            />

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? "text-[#E02020] bg-red-50"
                    : "text-gray-600 hover:text-[#1E4E9A] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons & Profile */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-3 pl-2 pr-1 py-1 rounded-full border border-gray-200 hover:border-[#1E4E9A]/30 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E4E9A] to-[#163E7A] flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    {user?.firstName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
                  </div>
                  <svg
                    className={`h-4 w-4 text-gray-400 mr-2 transition-transform duration-300 ${
                      isProfileDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 py-2 z-50 transform origin-top-right animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {user?.firstName && user?.lastName 
                          ? `${user.firstName} ${user.lastName}`
                          : "User Account"}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{user?.email}</p>
                    </div>
                    
                    <div className="p-2">
                      {(user?.role === "admin" || user?.role === "super-admin") && (
                        <Link
                          href="/admin"
                          className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-[#1E4E9A] transition-colors mb-1"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Admin Dashboard
                        </Link>
                      )}
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </Link>
                      <Link
                        href="/profile/settings"
                        className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:text-[#1E4E9A] transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                         <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </Link>
                      <div className="h-px bg-gray-100 my-2"></div>
                      <button
                        onClick={handleLogoutClick}
                        className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-gray-700 hover:text-[#1E4E9A] transition-colors px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="group relative px-6 py-2.5 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E02020] to-[#B81C1C] transition-all duration-300 group-hover:scale-105"></div>
                  <span className="relative text-sm font-bold text-white group-hover:tracking-wide transition-all">Register</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Auth & Profile Section */}
          <div className="flex items-center space-x-3 lg:hidden">
            {isAuthenticated && (
              <div className="relative profile-dropdown-mobile">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-1 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Profile menu"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1E4E9A] flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {user?.firstName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4 ml-auto"}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5 ml-auto"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActiveLink(link.href)
                    ? "bg-red-50 text-[#E02020]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Accordions */}
            <div className="space-y-2">
              <div className="px-4 py-2">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Discover</div>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-base font-medium text-gray-600 hover:text-[#1E4E9A] hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-4 py-2 border-t border-gray-100">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Connect</div>
                {portalsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-base font-medium text-gray-600 hover:text-[#1E4E9A] hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-gray-100">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Grow</div>
                {programsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-base font-medium text-gray-600 hover:text-[#1E4E9A] hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActiveLink(link.href)
                    ? "bg-red-50 text-[#E02020]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Auth */}
          {!isAuthenticated && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/login"
                  className="flex items-center justify-center px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-[#E02020] text-white font-semibold hover:bg-[#B81C1C] transition-colors shadow-lg shadow-red-200"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
          
          {isAuthenticated && (
             <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm mb-4">
                   <div className="w-10 h-10 rounded-full bg-[#1E4E9A] flex items-center justify-center text-white font-bold mr-3">
                      {user?.firstName?.[0]?.toUpperCase() || "U"}
                   </div>
                   <div>
                      <div className="font-bold text-gray-900">{user?.firstName} {user?.lastName}</div>
                      <div className="text-xs text-gray-500">{user?.email}</div>
                   </div>
                </div>
                <button
                  onClick={handleLogoutClick}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors"
                >
                  Logout
                </button>
             </div>
          )}
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform scale-100 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Signing Out?
            </h3>
            <p className="text-gray-500 text-center mb-6 text-sm">
              You'll need to sign in again to access your account.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={cancelLogout}
                className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2.5 bg-[#E02020] hover:bg-[#B81C1C] text-white rounded-xl font-semibold shadow-lg shadow-red-100 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
