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
  FaPhone,
} from "react-icons/fa";

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events", icon: <FaCalendarAlt /> },
    { id: "adults", name: "Adults Events", icon: <FaUsers /> },
    { id: "youth", name: "Youth Events", icon: <FaUsers /> },
    { id: "children", name: "Children's Events", icon: <FaChild /> },
    { id: "special", name: "Special Events", icon: <FaMusic /> },
  ];

  const events = [
    // Adults Events
    {
      id: 1,
      title: "Sunday Adult Bible Study",
      category: "adults",
      date: "Every Sunday",
      time: "9:00 AM",
      location: "Fellowship Hall",
      description:
        "In-depth Bible study and discussion groups for spiritual growth and fellowship.",
      image: "/clergyImages/clergy10.png",
      recurring: true,
    },
    {
      id: 2,
      title: "Midweek Prayer Meeting",
      category: "adults",
      date: "Every Wednesday",
      time: "6:00 PM",
      location: "Prayer Hall",
      description:
        "Corporate prayer for personal needs, church vision, and national concerns.",
      image: "/heroImages/hero2.png",
      recurring: true,
    },
    {
      id: 11,
      title: "Men's Fellowship Breakfast",
      category: "adults",
      date: "First Saturday of Month",
      time: "8:00 AM",
      location: "Church Hall",
      description:
        "Monthly gathering for men to fellowship, share, and encourage one another.",
      image: "/clergyImages/clergy5.png",
      recurring: true,
    },
    {
      id: 12,
      title: "Women's Prayer Circle",
      category: "adults",
      date: "Every Friday",
      time: "10:00 AM",
      location: "Prayer Room",
      description:
        "Weekly prayer meeting for women to intercede and support one another.",
      image: "/clergyImages/clergy15.png",
      recurring: true,
    },
    {
      id: 3,
      title: "Youth Explosion",
      category: "youth",
      date: "December 8-13, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "LifeSpring Academy",
      description:
        "An explosive week of worship, teaching, and fellowship for young people. Registration Fee: KSh 1,500. Expected Attendance: 2,000.",
      image: "/youthImages/youth1.png",
      recurring: false,
    },
    {
      id: 13,
      title: "Youth Revival Night",
      category: "youth",
      date: "December 15, 2025",
      time: "6:00 PM",
      location: "Main Sanctuary",
      description:
        "A powerful night of worship, prayer, and testimonies for young people.",
      image: "/youthImages/youth1.png",
      recurring: false,
    },
    {
      id: 4,
      title: "Children's Day Celebration",
      category: "children",
      date: "June 1, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Church Grounds",
      description:
        "Special service celebrating our children with performances, games, and treats.",
      image: "/childrenImages/child10.png",
      recurring: false,
    },
    {
      id: 5,
      title: "Easter Sunday Service",
      category: "special",
      date: "April 20, 2025",
      time: "7:00 AM & 10:00 AM",
      location: "Main Sanctuary",
      description:
        "Celebrate the resurrection of Jesus Christ with special worship and communion.",
      image: "/heroImages/hero3.png",
      recurring: false,
    },
    {
      id: 6,
      title: "Christmas Carol Service",
      category: "special",
      date: "December 24, 2025",
      time: "6:00 PM",
      location: "Main Sanctuary",
      description:
        "Traditional carol service celebrating the birth of our Savior.",
      image: "/heroImages/hero4.png",
      recurring: false,
    },
    {
      id: 7,
      title: "Men's Conference",
      category: "special",
      date: "February 20-22, 2025",
      time: "All Day",
      location: "Nakuru Conference Center",
      description:
        "Three days of powerful teaching, worship, and fellowship for men.",
      image: "/clergyImages/clergy5.png",
      recurring: false,
    },
    {
      id: 8,
      title: "Women's Day Celebration",
      category: "special",
      date: "March 8, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "National Headquarters",
      description: "Celebrating and honoring the women of NTCG Kenya.",
      image: "/clergyImages/clergy10.png",
      recurring: false,
    },
    {
      id: 9,
      title: "Kids Summer Camp",
      category: "children",
      date: "July 15-19, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Church Grounds",
      description:
        "A week of fun activities, Bible stories, crafts, and making new friends.",
      image: "/childrenImages/child15.png",
      recurring: false,
    },
    {
      id: 10,
      title: "Youth Retreat",
      category: "youth",
      date: "January 5-7, 2025",
      time: "All Day",
      location: "Nakuru Retreat Center",
      description: "3-day spiritual retreat to start the year with purpose.",
      image: "/youthImages/youth5.png",
      recurring: false,
    },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm ${
                    selectedCategory === category.id
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
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Events Scheduled on Website
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                For information about upcoming church events and activities, please contact the National Office.
              </p>
              <a
                href="tel:+254759120222"
                className="inline-flex items-center bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaPhone className="mr-2" />
                Call National Office
              </a>
            </div>
          </div>
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
