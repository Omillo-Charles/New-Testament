"use client";
import React from "react";
import Link from "next/link";
import {
  FaChurch,
  FaImages,
  FaBook,
  FaHandshake,
  FaCalendarAlt,
  FaQuestionCircle,
  FaGavel,
  FaArrowRight,
} from "react-icons/fa";

const ResourcesPage = () => {
  const resources = [
    {
      title: "Our Churches",
      description: "Discover NTCG churches across Kenya. Find a branch near you and connect with our vibrant community.",
      icon: <FaChurch className="text-5xl" />,
      link: "/resources/churches",
      color: "bg-[#1E4E9A]",
      stats: "224+ Churches Nationwide"
    },
    {
      title: "NTCG Gallery",
      description: "Explore photos and videos from our services, events, and community activities across Kenya.",
      icon: <FaImages className="text-5xl" />,
      link: "/resources/gallery",
      color: "bg-[#E02020]",
      stats: "Moments & Memories"
    },
    {
      title: "Doctrinal Commitments",
      description: "Learn about our core beliefs, theological foundations, and what we stand for as a church.",
      icon: <FaBook className="text-5xl" />,
      link: "/resources/beliefs",
      color: "bg-[#1E4E9A]",
      stats: "Our Faith & Beliefs"
    },
    {
      title: "Practical Commitment",
      description: "Discover how we live out our faith through community service, outreach, and practical ministry.",
      icon: <FaHandshake className="text-5xl" />,
      link: "/resources/practical-commitment",
      color: "bg-[#E02020]",
      stats: "Faith in Action"
    },
    {
      title: "Events Calendar",
      description: "Stay updated with upcoming services, conferences, meetings, and special church events.",
      icon: <FaCalendarAlt className="text-5xl" />,
      link: "/resources/events-calendar",
      color: "bg-[#1E4E9A]",
      stats: "Upcoming Events"
    },
    {
      title: "FAQs",
      description: "Find answers to frequently asked questions about NTCG Kenya, our services, and ministries.",
      icon: <FaQuestionCircle className="text-5xl" />,
      link: "/resources/faqs",
      color: "bg-[#E02020]",
      stats: "Quick Answers"
    },
    {
      title: "Legals",
      description: "Access our privacy policy, terms of service, and other legal documents and information.",
      icon: <FaGavel className="text-5xl" />,
      link: "/resources/legals",
      color: "bg-[#1E4E9A]",
      stats: "Policies & Terms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero2.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Church Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know about NTCG Kenya - from our beliefs to our branches
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover NTCG Kenya
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our resources hub! Here you'll find everything you need to learn about 
            NTCG Kenya - our churches, beliefs, upcoming events, and more. Whether you're a 
            new visitor, a long-time member, or simply curious about who we are, these resources 
            will help you connect with our community and understand our mission.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon Header */}
                <div className={`${resource.color} p-8 text-white text-center`}>
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <div className="text-[#E02020]">
                      {resource.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold drop-shadow-md">{resource.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed text-base">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      {resource.stats}
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
                Looking for Something Else?
              </h2>
              <p className="text-xl text-blue-100">
                Explore more ways to connect with NTCG Kenya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ministry Portals</h3>
                <p className="text-gray-700 mb-4">
                  Connect with youth, children, adults, and clergy ministries.
                </p>
                <Link
                  href="/portals"
                  className="inline-flex items-center space-x-2 text-[#E02020] hover:text-[#B81C1C] font-semibold transition-colors"
                >
                  <span>View Portals</span>
                  <FaArrowRight />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Programs</h3>
                <p className="text-gray-700 mb-4">
                  Explore our Bible college, discipleship courses, and events.
                </p>
                <Link
                  href="/programs/bible-college"
                  className="inline-flex items-center space-x-2 text-[#E02020] hover:text-[#B81C1C] font-semibold transition-colors"
                >
                  <span>Learn More</span>
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
            Join Us This Sunday
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the warmth of our community and the power of worship. 
            Everyone is welcome at NTCG Kenya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources/churches"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              Find a Church Near You
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
