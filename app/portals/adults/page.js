"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaBook,
  FaPray,
  FaHandsHelping,
  FaHeart,
  FaCalendarAlt,
  FaComments,
  FaGraduationCap,
  FaUserFriends,
  FaMale,
  FaFemale,
} from "react-icons/fa";

const AdultsPage = () => {
  const ministries = [
    {
      icon: <FaMale className="text-4xl text-[#1E4E9A]" />,
      title: "Men's Fellowship",
      description: "Building strong, godly men who lead their families and communities with integrity and faith.",
      activities: ["Men's Bible Study", "Leadership Training", "Mentorship Programs", "Community Service"]
    },
    {
      icon: <FaFemale className="text-4xl text-[#E02020]" />,
      title: "Women's Fellowship",
      description: "Empowering women to grow spiritually, support one another, and make a difference in their communities.",
      activities: ["Women's Prayer Groups", "Bible Study", "Skills Training", "Outreach Programs"]
    },
    {
      icon: <FaUserFriends className="text-4xl text-[#1E4E9A]" />,
      title: "Couples Ministry",
      description: "Strengthening marriages and families through biblical principles and practical support.",
      activities: ["Marriage Enrichment", "Family Devotions", "Couples Retreats", "Parenting Workshops"]
    },
    {
      icon: <FaGraduationCap className="text-4xl text-[#E02020]" />,
      title: "Adult Education",
      description: "Continuing spiritual growth through structured learning and discipleship programs.",
      activities: ["Bible College", "Theology Classes", "Leadership Development", "Ministry Training"]
    }
  ];

  const programs = [
    {
      title: "Sunday Adult Classes",
      time: "Every Sunday, 9:00 AM",
      description: "In-depth Bible study and discussion groups for spiritual growth and fellowship."
    },
    {
      title: "Midweek Prayer Meetings",
      time: "Wednesdays, 6:00 PM",
      description: "Corporate prayer sessions for personal needs, church vision, and national concerns."
    },
    {
      title: "Joint Fellowship",
      time: "First Sunday of the Month",
      description: "Combined fellowship gathering bringing together all adults for worship, teaching, and community building."
    }
  ];

  const upcomingEvents = [
    {
      title: "Men's Conference 2025",
      date: "February 20-22, 2025",
      location: "Nakuru Conference Center",
      description: "Three days of powerful teaching, worship, and fellowship for men of all ages.",
      category: "men"
    },
    {
      title: "Women's Day Celebration",
      date: "March 8, 2025",
      location: "National Headquarters",
      description: "Celebrating and honoring the women of NTCG Kenya with special services and activities.",
      category: "women"
    },
    {
      title: "Marriage Enrichment Seminar",
      date: "April 12-13, 2025",
      location: "Various Branches",
      description: "Practical workshops to strengthen marriages and build godly families.",
      category: "couples"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/clergyImages/clergy10.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaUsers className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Adults Ministry
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Growing together in faith, fellowship, and service - Building strong families and communities for Christ
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Adults Ministry
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Adults Ministry is designed to help men and women grow in their relationship with Christ, 
              build meaningful connections with fellow believers, and discover their purpose in God's kingdom. 
              Whether you're single, married, a parent, or an empty-nester, there's a place for you here.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe that spiritual growth doesn't stop after youth. Through Bible studies, fellowship 
              groups, service opportunities, and special events, we provide a supportive community where 
              adults can deepen their faith, strengthen their families, and make a lasting impact.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#1E4E9A] p-6 rounded-lg">
              <p className="text-lg font-semibold text-[#1E4E9A] italic">
                "Iron sharpens iron, and one man sharpens another." - Proverbs 27:17
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ministry Areas
            </h2>
            <p className="text-xl text-gray-600">
              Diverse programs designed to meet the unique needs of adults
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">{ministry.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {ministry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                  <ul className="space-y-2">
                    {ministry.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600">
                        <span className="w-2 h-2 bg-[#E02020] rounded-full"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regular Programs
            </h2>
            <p className="text-xl text-gray-600">
              Weekly and monthly activities to keep you connected and growing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-2 text-[#1E4E9A] mb-3">
                  <FaCalendarAlt />
                  <span className="font-semibold text-sm">{program.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Special events and gatherings you won't want to miss
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Events Scheduled
              </h3>
              <p className="text-lg text-gray-600">
                Contact your church leadership for more information about
                upcoming adults ministry events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community in Action
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating fellowship, growth, and service in our adults ministry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-gray-200">
                  <Image
                    src={`/clergyImages/clergy${num}.png`}
                    alt={`Adults Ministry ${num}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-semibold text-sm">Fellowship & Growth</p>
                  </div>
                </div>
              </div>
            ))}
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
            Join us and be part of a vibrant community of believers growing together in faith and fellowship.
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
              Explore Other Ministries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultsPage;
