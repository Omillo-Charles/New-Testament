"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

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

    const isActiveLink = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 focus:outline-none ${isOpen
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

                        {/* Mobile Accordions */}
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
        </>
    );
};

export default NavLinks;