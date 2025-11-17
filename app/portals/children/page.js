"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaBook,
  FaUsers,
  FaCalendarAlt,
  FaGraduationCap,
  FaPray,
  FaGamepad,
  FaMusic,
  FaStar,
  FaHandsHelping,
} from "react-icons/fa";

const ChildrenPage = () => {
  const programs = [
    {
      icon: <FaBook className="text-4xl text-[#1E4E9A]" />,
      title: "Sunday School",
      age: "Ages 3-12",
      description:
        "Interactive Bible lessons with stories, songs, and activities that make learning about God fun and memorable.",
      time: "Every Sunday 9:00 AM",
    },
    {
      icon: <FaPray className="text-4xl text-[#E02020]" />,
      title: "Little Prayers",
      age: "Ages 2-5",
      description:
        "Teaching our youngest ones to talk to God through simple prayers, songs, and gentle worship.",
      time: "Sundays 10:30 AM",
    },
    {
      icon: <FaMusic className="text-4xl text-[#1E4E9A]" />,
      title: "Kids Worship",
      age: "Ages 6-12",
      description:
        "Energetic worship sessions with praise songs, dancing, and celebrating God's love together.",
      time: "Sundays 11:00 AM",
    },
    {
      icon: <FaGamepad className="text-4xl text-[#E02020]" />,
      title: "Bible Adventures",
      age: "Ages 8-12",
      description:
        "Exciting Bible-based games, crafts, and activities that bring scripture to life in fun ways.",
      time: "Wednesdays 4:00 PM",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #ef4444, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image with Cinematic Treatment */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-20000 ease-linear hover:scale-110"
              style={{
                backgroundImage: "url('/childrenImages/child15.png')",
              }}
            ></div>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-red-600/65 to-black/75 mix-blend-multiply"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-40 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center lg:pt-20 py-8">
            <div className="w-full lg:w-3/5 lg:ml-0">
              {/* Main Headline with Stagger Animation */}
              <div className="mb-6">
                <h1 className="font-black text-white leading-none tracking-wider">
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    RAISING.
                  </div>
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in-up"
                    style={{
                      animationDelay: "0.4s",
                      textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                    }}
                  >
                    CHAMPIONS.
                  </div>
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl font-black animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    FOR CHRIST.
                  </div>
                </h1>
              </div>

              {/* Subheading */}
              <div
                className="mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <p
                  className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed tracking-wide"
                  style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
                >
                  <span className="hidden md:inline">
                    Nurturing young hearts and minds to know, love, and serve
                    Jesus from an early age. Where every child discovers they
                    are wonderfully made by God!
                  </span>
                  <span className="md:hidden">
                    Where every child discovers God's amazing love and purpose
                    for their life.
                  </span>
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-[#E02020] to-[#B81C1C] hover:from-[#B81C1C] hover:to-[#8B1A1A] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-center"
                >
                  <span className="flex items-center justify-center">
                    Join Sunday School
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#1E4E9A] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-center"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Learn More
                  </span>
                </Link>
              </div>

              {/* Stats or Quick Info - Hidden on desktop for children's page */}
              <div
                className="mt-12 flex flex-wrap gap-8 text-white/90 animate-fade-in-up lg:hidden"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-300">5000+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Happy Kids
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-300">300+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Teachers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-300">15+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Fun Programs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Ministry */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About Our Children's Ministry
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-[#1E4E9A]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaStar className="text-3xl mr-3 text-[#E02020]" />
                    Our Heart
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We believe every child is a precious gift from God. Our
                    ministry creates a safe, loving environment where children
                    can discover God's amazing love, learn Bible stories, and
                    build friendships that last a lifetime.
                  </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-[#E02020]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaGraduationCap className="text-3xl mr-3 text-[#1E4E9A]" />
                    Our Approach
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Through interactive Bible lessons, creative activities,
                    worship songs, and lots of fun, we help children understand
                    that Jesus loves them and has wonderful plans for their
                    lives.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#1E4E9A] rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Our Promise to Parents
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-800">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Safe Environment</h4>
                        <p className="text-blue-100">
                          Trained staff and secure facilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-800">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Biblical Foundation
                        </h4>
                        <p className="text-blue-100">
                          Age-appropriate Bible teaching
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-800">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Character Building
                        </h4>
                        <p className="text-blue-100">
                          Teaching values and good behavior
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Programs & Classes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Fun Programs & Classes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exciting programs designed to help children grow in their faith
                while having lots of fun!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{program.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {program.title}
                        </h3>
                        <span className="inline-block bg-[#1E4E9A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {program.age}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-blue-600 font-semibold">
                        {program.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Happy Moments Gallery
              </h2>
              <p className="text-xl text-gray-600">
                See the joy and excitement in our children's ministry
                activities!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[6, 7, 8, 9, 11, 12, 13, 14].map((item) => (
                <div
                  key={item}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-[#1E4E9A]">
                    <Image
                      src={`/childrenImages/child${item}.png`}
                      alt={`Children's Ministry Activity ${item}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-bold text-sm">Learning & Fun</h4>
                      <p className="text-xs">Growing in faith together</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/resources/gallery"
                className="inline-block bg-[#E02020] hover:bg-[#B81C1C] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View More Photos
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Exciting Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Special events and activities that your children won't want to
                miss!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
                <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No Events Scheduled
                </h3>
                <p className="text-lg text-gray-600">
                  Contact your church leadership for more information about
                  upcoming children's ministry events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1E4E9A] rounded-full mb-8">
              <FaUsers className="text-4xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Children's Ministry Family!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Give your child the gift of faith, friendship, and fun. Come and
              see how we're raising the next generation of champions for Christ!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
              >
                Visit This Sunday
              </Link>
              <Link
                href="/portals"
                className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore Other Ministries
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChildrenPage;
