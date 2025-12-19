"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);

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
        { href: "/programs/bible-college", label: "Bible College" },
        { href: "/programs/discipleship", label: "Discipleship Courses" },
        { href: "/programs/events", label: "Conferences & Events" },
    ];

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close menu when clicking outside (desktop only)
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isDesktop = window.innerWidth >= 1024; // lg breakpoint

            if (isDesktop && isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
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

    // Prevent body scroll when mobile menu is open (only on mobile)
    useEffect(() => {
        const handleBodyScroll = () => {
            const isMobile = window.innerWidth < 1024; // lg breakpoint

            if (isOpen && isMobile) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                const scrollY = document.body.style.top;
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';

                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
        };

        handleBodyScroll();

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [isOpen]);

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
                className={`lg:hidden fixed inset-x-0 top-[112px] bottom-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                <div className="h-full overflow-y-auto pb-20">
                    <div className="px-4 py-6 space-y-2">
                        {/* Main Navigation Links */}
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
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
                                        className={`block py-2.5 text-base font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
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
                                        className={`block py-2.5 text-base font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
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
                                        className={`block py-2.5 text-base font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Link */}
                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
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
                                className={`block px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
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
                                        className={`block py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
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
                                        className={`block py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
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
                                        className={`block py-1.5 text-sm font-medium transition-all ${isActiveLink(link.href)
                                            ? "text-[#1E4E9A] font-semibold pl-2"
                                            : "text-gray-600 hover:text-[#1E4E9A] hover:pl-2"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Link */}
                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActiveLink(link.href)
                                    ? "bg-red-50 text-[#E02020]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavLinks;