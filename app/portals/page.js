"use client";
import React from "react";
import Link from "next/link";
import {
  FaUsers,
  FaChild,
  FaChurch,
  FaUserTie,
  FaFileUpload,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";

const PortalsPage = () => {
  const portals = [
    {
      title: "Youth Ministry",
      description: "Empowering the next generation for Christ through dynamic programs, worship, and fellowship.",
      icon: <FaUsers className="text-5xl" />,
      link: "/portals/youth",
      color: "bg-[#1E4E9A]",
      stats: "Ages 13-25 • 500+ Active Members"
    },
    {
      title: "Children's Ministry",
      description: "Raising champions for Christ through fun, engaging, and age-appropriate biblical teaching.",
      icon: <FaChild className="text-5xl" />,
      link: "/portals/children",
      color: "bg-[#E02020]",
      stats: "Ages 2-12 • 200+ Happy Kids"
    },
    {
      title: "Adults Ministry",
      description: "Growing together in faith, fellowship, and service for men, women, and families.",
      icon: <FaUsers className="text-5xl" />,
      link: "/portals/adults",
      color: "bg-[#1E4E9A]",
      stats: "All Adults • Multiple Programs"
    },
    {
      title: "Clergy Portal",
      description: "Resources, training, and support for pastors, ministers, and church leaders.",
      icon: <FaChurch className="text-5xl" />,
      link: "/portals/clergy",
      color: "bg-[#E02020]",
      stats: "Pastors & Leaders Only"
    },
    {
      title: "Document Submissions",
      description: "Submit reports, credentials, and official documents to the National Office.",
      icon: <FaFileUpload className="text-5xl" />,
      link: "/portals/submissions",
      color: "bg-[#1E4E9A]",
      stats: "Secure & Confidential"
    },
    {
      title: "Church Shop",
      description: "Browse and purchase church resources, books, merchandise, and ministry materials.",
      icon: <FaShoppingCart className="text-5xl" />,
      link: "/portals/shop",
      color: "bg-[#E02020]",
      stats: "Books, Resources & More"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero1.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ministry Portals
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse ministries and find your place in the NTCG Kenya family
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Find Your Ministry Home
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At NTCG Kenya, we believe everyone has a place to belong, grow, and serve. 
            Whether you're a young person seeking purpose, a parent looking for quality 
            children's programs, an adult wanting to deepen your faith, or a church leader 
            needing resources - we have a portal designed just for you.
          </p>
        </div>
      </section>

      {/* Portals Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Link
                key={index}
                href={portal.link}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon Header */}
                <div className={`${portal.color} p-8 text-white text-center`}>
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <div className="text-[#E02020]">
                      {portal.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold drop-shadow-md">{portal.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed text-base">
                    {portal.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      {portal.stats}
                    </span>
                    <div className="flex items-center space-x-2 text-[#E02020] font-bold group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#1E4E9A] to-[#163E7A] rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-xl text-blue-100">
                We're here to help you find the right ministry for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">New to NTCG?</h3>
                <p className="text-gray-700 mb-4">
                  Learn about our church, beliefs, and how to get connected.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-[#E02020] hover:text-[#B81C1C] font-semibold transition-colors"
                >
                  <span>About Us</span>
                  <FaArrowRight />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Find a Branch</h3>
                <p className="text-gray-700 mb-4">
                  Locate an NTCG church near you across Kenya.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-[#E02020] hover:text-[#B81C1C] font-semibold transition-colors"
                >
                  <span>Locations</span>
                  <FaArrowRight />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get in Touch</h3>
                <p className="text-gray-700 mb-4">
                  Have questions? Contact us and we'll be happy to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-[#E02020] hover:text-[#B81C1C] font-semibold transition-colors"
                >
                  <span>Contact Us</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us this Sunday and experience the warmth of our community. 
            Everyone is welcome at NTCG Kenya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalsPage;
