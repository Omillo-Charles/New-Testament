"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { searchSite } from "../lib/searchData";

const SearchBar = ({ className = "", placeholder = "Search..." }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef(null);
    const resultsRef = useRef(null);

    // Handle search
    useEffect(() => {
        if (searchQuery.trim().length >= 2) {
            const results = searchSite(searchQuery);
            setSearchResults(results);
            setIsOpen(results.length > 0);
            setSelectedIndex(-1);
        } else {
            setSearchResults([]);
            setIsOpen(false);
            setSelectedIndex(-1);
        }
    }, [searchQuery]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!isOpen || searchResults.length === 0) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev < searchResults.length - 1 ? prev + 1 : 0
                );
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev > 0 ? prev - 1 : searchResults.length - 1
                );
                break;
            case "Enter":
                e.preventDefault();
                if (selectedIndex >= 0 && searchResults[selectedIndex]) {
                    window.location.href = searchResults[selectedIndex].url;
                }
                break;
            case "Escape":
                setIsOpen(false);
                setSelectedIndex(-1);
                searchRef.current?.blur();
                break;
        }
    };

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle result click
    const handleResultClick = (url) => {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(-1);
    };

    // Get category color
    const getCategoryColor = (category) => {
        switch (category) {
            case "Main": return "text-[#E02020]";
            case "Resources": return "text-[#1E4E9A]";
            case "Portals": return "text-green-600";
            case "Programs": return "text-purple-600";
            case "Legal": return "text-gray-600";
            case "Quick Links": return "text-orange-600";
            default: return "text-gray-500";
        }
    };

    return (
        <div ref={searchRef} className={`relative ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        if (searchResults.length > 0) setIsOpen(true);
                    }}
                    className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900 placeholder-gray-500 bg-white transition-all duration-200"
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                {/* Clear button */}
                {searchQuery && (
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setIsOpen(false);
                            setSelectedIndex(-1);
                        }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Search Results Dropdown */}
            {isOpen && searchResults.length > 0 && (
                <div
                    ref={resultsRef}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 z-50 max-h-96 overflow-y-auto"
                >
                    <div className="p-2">
                        {/* Search header */}
                        <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-xs text-gray-500 font-medium">
                                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                            </p>
                        </div>

                        {/* Results */}
                        <div className="py-2">
                            {searchResults.map((result, index) => (
                                <Link
                                    key={`${result.url}-${index}`}
                                    href={result.url}
                                    onClick={() => handleResultClick(result.url)}
                                    className={`block px-4 py-3 rounded-xl transition-all duration-200 ${selectedIndex === index
                                        ? "bg-blue-50 text-[#1E4E9A]"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="search-result-title text-gray-900 truncate">
                                                {result.title}
                                            </h4>
                                            <p className="search-result-description text-gray-600 mt-1 line-clamp-2">
                                                {result.description}
                                            </p>
                                            <div className="flex items-center mt-2 space-x-2">
                                                <span className={`search-result-meta font-medium ${getCategoryColor(result.category)}`}>
                                                    {result.category}
                                                </span>
                                                <span className="search-result-meta text-gray-400">•</span>
                                                <span className="search-result-meta text-gray-500 truncate">
                                                    {result.url}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ml-3 flex-shrink-0">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Search footer */}
                        <div className="px-4 py-2 border-t border-gray-100">
                            <p className="text-xs text-gray-500">
                                Use ↑↓ to navigate, Enter to select, Esc to close
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* No results */}
            {isOpen && searchQuery.length >= 2 && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 z-50">
                    <div className="p-4 text-center">
                        <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="text-sm text-gray-600 mb-1">No results found for "{searchQuery}"</p>
                        <p className="text-xs text-gray-500">Try searching for "church", "contact", or "about"</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;