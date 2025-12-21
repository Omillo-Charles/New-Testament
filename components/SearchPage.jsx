"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchSite } from "../lib/searchData";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();

    // Website content summary with images
    const websiteContent = [
        {
            title: "About Us",
            description: "Learn about our church history, mission, and vision. Discover how NTCoG Kenya has been serving communities since 1977.",
            image: "/aboutImages/about1.png",
            url: "/about",
            category: "Main"
        },
        {
            title: "Youth Ministry",
            description: "Dynamic programs for young people to grow in faith, build friendships, and discover their purpose through worship and teaching.",
            image: "/youthImages/youth1.png",
            url: "/portals/youth",
            category: "Ministries"
        },
        {
            title: "Children Ministry",
            description: "Safe, fun environment where children learn about God's love through age-appropriate activities and interactive worship.",
            image: "/childrenImages/child1.png",
            url: "/portals/children",
            category: "Ministries"
        },
        {
            title: "Adult Fellowship",
            description: "Deepen your faith through Bible study, fellowship, and service opportunities designed for spiritual growth.",
            image: "/aboutImages/about2.png",
            url: "/portals/adults",
            category: "Ministries"
        },
        {
            title: "Leadership Ministry",
            description: "Equipping clergy, pastors, and church leaders with training, resources, and fellowship for effective ministry.",
            image: "/clergyImages/clergy1.png",
            url: "/portals/clergy",
            category: "Ministries"
        },
        {
            title: "Our Churches",
            description: "Find a church near you from our 224+ branches across Kenya. Connect with your local NTCoG community.",
            image: "/aboutImages/about1.png",
            url: "/resources/churches",
            category: "Resources"
        },
        {
            title: "Events & Programs",
            description: "Stay updated with our conferences, special events, and programs happening across our church network.",
            image: "/youthImages/youth2.png",
            url: "/programs/events",
            category: "Programs"
        },
        {
            title: "Contact Us",
            description: "Get in touch with us for any questions, prayer requests, or to learn more about joining our community.",
            image: "/contactImages/contact1.png",
            url: "/contact",
            category: "Main"
        }
    ];

    // Handle search
    useEffect(() => {
        if (searchQuery.trim().length >= 2) {
            setIsSearching(true);
            const results = searchSite(searchQuery);
            setSearchResults(results);
            setIsSearching(false);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    // Get category color
    const getCategoryColor = (category) => {
        switch (category) {
            case "Main": return "text-[#E02020]";
            case "Ministries": return "text-[#1E4E9A]";
            case "Resources": return "text-green-600";
            case "Programs": return "text-purple-600";
            default: return "text-gray-500";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" style={{ paddingTop: '50px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:pt-6">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search our website..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pl-14 pr-6 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900 placeholder-gray-500 bg-white shadow-sm"
                            autoFocus
                        />
                        <svg
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
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
                    </div>
                </div>

                {/* Search Results */}
                {searchQuery.trim().length >= 2 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Search Results
                        </h2>
                        {isSearching ? (
                            <div className="text-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E4E9A] mx-auto"></div>
                                <p className="text-gray-500 mt-2">Searching...</p>
                            </div>
                        ) : searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {searchResults.map((result, index) => (
                                    <Link
                                        key={`${result.url}-${index}`}
                                        href={result.url}
                                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <span className={`text-sm font-medium ${getCategoryColor(result.category)}`}>
                                                {result.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {result.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                            {result.description}
                                        </p>
                                        <p className="text-xs text-gray-500">{result.url}</p>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <p className="text-lg text-gray-600 mb-2">No results found for "{searchQuery}"</p>
                                <p className="text-sm text-gray-500">Try searching for "church", "contact", or "about"</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Website Content Summary */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        {searchQuery.trim().length >= 2 ? "Browse Our Content" : "Explore Our Website"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websiteContent.map((content, index) => (
                            <Link
                                key={index}
                                href={content.url}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] relative">
                                    <img
                                        src={content.image}
                                        alt={content.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="mb-2">
                                            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm ${getCategoryColor(content.category).replace('text-', 'text-white')}`}>
                                                {content.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-3">
                                            {content.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;