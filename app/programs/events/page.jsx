"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaChurch,
  FaChild,
  FaMusic,
  FaChevronDown,
  FaChevronUp,
  FaMobileAlt,
} from "react-icons/fa";

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showRegistration, setShowRegistration] = useState({});

  const categories = [
    { id: "all", name: "All Events", icon: <FaCalendarAlt /> },
    { id: "adults", name: "Adults Events", icon: <FaUsers /> },
    { id: "youth", name: "Youth Events", icon: <FaUsers /> },
    { id: "children", name: "Children's Events", icon: <FaChild /> },
    { id: "special", name: "Special Events", icon: <FaMusic /> },
  ];

  // No events currently scheduled
  const upcomingEvents = [];

  const filteredEvents =
    selectedCategory === "all"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero7.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaCalendarAlt className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Church Events</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join us for worship services, special events, and community
            gatherings throughout the year
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-[1600px] mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm ${selectedCategory === category.id
                    ? "bg-[#E02020] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Events in This Category
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Check other categories or contact the National Office for more information.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    {event.recurring && (
                      <div className="absolute top-4 right-4 bg-[#E02020] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Recurring
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-[#1E4E9A]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2 text-[#1E4E9A]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-[#1E4E9A]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Registration Button - Only show for events with registration */}
                    {event.hasRegistration && (
                      <div className="border-t pt-4">
                        <button
                          onClick={() => window.open("https://events.ntcogk.org", "_blank")}
                          className="w-full flex items-center justify-center gap-2 bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Register for Event</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2">
                          Opens registration portal in new tab
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <FaChurch className="text-5xl text-[#1E4E9A] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us for an Event
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the warmth of our community and grow in your faith.
            Everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/portals"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Explore Ministries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
