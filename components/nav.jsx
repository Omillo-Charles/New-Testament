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
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm py-4"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative rounded-lg shadow-md bg-white p-1">
              <Image
                src="/mainLogo.png"
                alt="NTCG Kenya Logo"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#E02020]">NTCG</span>
              <span className="text-lg text-[#1E4E9A] block leading-tight font-medium">
                Kenya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${isActiveLink(link.href)
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
                className={`text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${isActiveLink(link.href)
                  ? "text-[#E02020] bg-red-50"
                  : "text-gray-600 hover:text-[#1E4E9A] hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
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
