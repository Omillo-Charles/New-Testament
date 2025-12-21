"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);

    const navLinks = [
        {
            href: "/",
            label: "Home",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            href: "/about",
            label: "About",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            href: "/contact",
            label: "Contact",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
    ];

    const resourcesLinks = [
        {
            href: "/resources/churches",
            label: "Our Churches",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            href: "/resources/gallery",
            label: "NTCoG Gallery",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            href: "/resources/beliefs",
            label: "Doctrinal Commitments",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
            )
        },
        {
            href: "/resources/practical-commitment",
            label: "Practical Commitment",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            href: "/resources/events-calendar",
            label: "Events Calendar",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            href: "/resources/faqs",
            label: "FAQs",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            href: "/resources/legals",
            label: "Legals",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            )
        },
    ];

    const portalsLinks = [
        {
            href: "/portals/adults",
            label: "Adult Fellowship",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            href: "/portals/youth",
            label: "Youth Ministry",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            href: "/portals/children",
            label: "Kids Ministry",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            href: "/portals/submissions",
            label: "Submissions",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            href: "/portals/clergy",
            label: "Leadership",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            href: "/portals/giving",
            label: "Support Ministry",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            href: "/portals/shop",
            label: "Ministry Store",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
    ];

    const programsLinks = [
        {
            href: "/programs/bible-college",
            label: "Bible College",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            )
        },
        {
            href: "/programs/discipleship",
            label: "Discipleship Courses",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
            )
        },
        {
            href: "/programs/events",
            label: "Conferences & Events",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
    ];

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close menu when clicking outside (mobile and desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Cleanup any styles on component unmount
    useEffect(() => {
        return () => {
            // Cleanup any styles if needed
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, []); // Empty dependency array is now consistent

    const isActiveLink = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div ref={menuRef} className="relative">
            {/* Menu Toggle Button - Now works on both mobile and desktop */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus:outline-none ${isOpen
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"
                        }`} />
                    <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4 ml-auto"
                        }`} />
                    <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5 ml-auto"
                        }`} />
                </div>
            </button>

            {/* Mobile Navigation Menu */}
            <div
                className={`lg:hidden fixed top-[112px] bottom-0 right-0 w-64 max-w-[60vw] bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out shadow-2xl ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                <div className="h-full overflow-y-auto pb-4">
                    <div className="px-4 py-6 space-y-2">
                        {/* Main Navigation Links */}
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}

                        {/* Navigation Sections */}
                        <div className="space-y-2">
                            {/* Resources Section */}
                            <div className="px-4 py-2">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">
                                    Discover
                                </div>
                                {resourcesLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-3 py-2.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Portals Section */}
                            <div className="px-4 py-2 border-t border-gray-100">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">
                                    Connect
                                </div>
                                {portalsLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-3 py-2.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Programs Section */}
                            <div className="px-4 py-2 border-t border-gray-100">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">
                                    Grow
                                </div>
                                {programsLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-3 py-2.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Link */}
                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}

                        {/* Social Media Icons */}
                        <div className="px-4 py-4 border-t border-gray-100 mt-4">
                            <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
                                Follow Us
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.facebook.com/ntcogk"
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E02020] hover:text-white transition-all duration-300"
                                    aria-label="Facebook - @ntcogk"
                                    title="Facebook - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/ntcogk"
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                    aria-label="X (Twitter) - @ntcogk"
                                    title="X (Twitter) - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/@ntcogk"
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E02020] hover:text-white transition-all duration-300"
                                    aria-label="YouTube - @ntcogk"
                                    title="YouTube - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@ntcogk"
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E4E9A] hover:text-white transition-all duration-300"
                                    aria-label="TikTok - @ntcogk"
                                    title="TikTok - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div
                className={`hidden lg:block absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 z-40 transition-all duration-300 origin-top-right ${isOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                    }`}
            >
                <div className="h-auto max-h-96 overflow-y-auto">
                    <div className="py-4 space-y-1">
                        {/* Main Navigation Links */}
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}

                        {/* Navigation Sections */}
                        <div className="space-y-1">
                            {/* Resources Section */}
                            <div className="px-2 py-1">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">
                                    Discover
                                </div>
                                {resourcesLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-2 py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Portals Section */}
                            <div className="px-2 py-1">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">
                                    Connect
                                </div>
                                {portalsLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-2 py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Programs Section */}
                            <div className="px-2 py-1">
                                <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">
                                    Grow
                                </div>
                                {programsLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-2 py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Link */}
                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}

                        {/* Social Media Icons */}
                        <div className="px-2 py-3 border-t border-gray-100 mt-2">
                            <div className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">
                                Follow Us
                            </div>
                            <div className="flex space-x-2 px-2">
                                <a
                                    href="https://www.facebook.com/ntcogk"
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E02020] hover:text-white transition-all duration-300"
                                    aria-label="Facebook - @ntcogk"
                                    title="Facebook - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/ntcogk"
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                    aria-label="X (Twitter) - @ntcogk"
                                    title="X (Twitter) - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/@ntcogk"
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E02020] hover:text-white transition-all duration-300"
                                    aria-label="YouTube - @ntcogk"
                                    title="YouTube - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@ntcogk"
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E4E9A] hover:text-white transition-all duration-300"
                                    aria-label="TikTok - @ntcogk"
                                    title="TikTok - @ntcogk"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavLinks;