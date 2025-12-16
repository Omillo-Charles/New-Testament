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
  const [searchQuery, setSearchQuery] = useState("");
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsPortalsDropdownOpen(false);
    setIsProgramsDropdownOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isPortalsDropdownOpen, isProgramsDropdownOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const resourcesLinks = [
    { href: "/resources/churches", label: "Our Churches" },
    { href: "/resources/gallery", label: "NTCoG Gallery" },
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
        className={`flex items-center text-sm font-semibold tracking-wide transition-all duration-300 px-3 py-2 rounded-full hover:bg-gray-100/50 ${active || isOpen
          ? "text-[#1E4E9A]"
          : "text-gray-600 hover:text-[#1E4E9A]"
          }`}
      >
        {label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#E02020]" : "text-gray-400"
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
        className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 transform transition-all duration-300 origin-top-left z-50 ${isOpen
          ? "opacity-100 scale-100 translate-y-0 visible"
          : "opacity-0 scale-95 -translate-y-2 invisible"
          }`}
      >
        <div className="p-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActiveLink(link.href)
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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg">
      {/* First Level - Contact & Social Media */}
      <div className={`bg-[#1E4E9A] text-white py-2 hidden lg:block transition-all duration-500 ease-in-out overflow-hidden ${scrolled ? 'max-h-0 opacity-0 -translate-y-full' : 'max-h-20 opacity-100 translate-y-0'
        }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+254 759 120 222</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@ntcogk.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Karen, Nairobi</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
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

              {/* Instagram */}
              <a href="#" className="hover:text-[#E02020] transition-colors" title="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
          <div className="flex items-center justify-between">
            {/* Church Name */}
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-[#1E4E9A]">NTCoGK</h1>
              <p className="text-sm text-gray-600">New Testament Church of God Kenya</p>
            </div>

            {/* Logo - Center on Desktop, Left with Text on Mobile */}
            <Link href="/" className="flex items-center">
              {/* Desktop Logo - Center */}
              <div className="hidden lg:block w-16 h-16 relative bg-white border border-gray-200 rounded-lg shadow-sm p-2 hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/mainLogo.png"
                  alt="NTCOGK Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>

              {/* Mobile Logo with Text - Left */}
              <div className="lg:hidden flex items-center space-x-3">
                <div className="w-12 h-12 relative rounded-lg shadow-md bg-white p-1">
                  <Image
                    src="/mainLogo.png"
                    alt="NTCoG Kenya Logo"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#E02020]">NTCoG</span>
                  <span className="text-lg text-[#1E4E9A] block leading-tight font-medium">
                    Kenya
                  </span>
                </div>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
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

      {/* Third Level - Navigation Links */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 hidden lg:block transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${isActiveLink(link.href)
                  ? "text-[#E02020] bg-red-50"
                  : "text-gray-600 hover:text-[#1E4E9A] hover:bg-white"
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
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${isActiveLink(link.href)
                  ? "text-[#E02020] bg-red-50"
                  : "text-gray-600 hover:text-[#1E4E9A] hover:bg-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActiveLink(link.href)
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
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActiveLink(link.href)
                  ? "bg-red-50 text-[#E02020]"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
