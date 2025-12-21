"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMusic,
  FaHandsHelping,
  FaBook,
  FaRunning,
  FaTheaterMasks,
  FaLaptop,
  FaBullseye,
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const YouthPage = () => {

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 85vh;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden pt-28">
          {/* Background Image with Cinematic Treatment */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-20000 ease-linear hover:scale-110"
              style={{
                backgroundImage: "url('/youthImages/youth7.png')",
              }}
            ></div>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/85 via-orange-600/65 to-black/75 mix-blend-multiply"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-40 h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-8">
            <div className="w-full lg:w-3/5 lg:ml-0">
              {/* Main Headline with Stagger Animation */}
              <div className="mb-6">
                <h1 className="font-black text-white leading-none tracking-wider">
                  <div
                    className="text-5xl md:text-6xl lg:text-7xl mb-2 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ARISE.
                  </div>
                  <div
                    className="text-5xl md:text-6xl lg:text-7xl mb-2 animate-fade-in-up"
                    style={{
                      animationDelay: "0.4s",
                      textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                    }}
                  >
                    SHINE.
                  </div>
                  <div
                    className="text-5xl md:text-6xl lg:text-7xl font-black animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    IMPACT.
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
                    Join thousands of young people across Kenya discovering
                    purpose, building community, and transforming lives through
                    Christ.
                  </span>
                  <span className="md:hidden">
                    Discover purpose. Build community. Transform lives through
                    Christ.
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
                    Join the Movement
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
                <a
                  href="tel:+254721549789"
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#1E4E9A] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-center"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Youth Pastor
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Youth Ministry */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Our Youth Ministry
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E02020] to-[#1E4E9A] rounded-full mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#E02020]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaBullseye className="text-3xl mr-3 text-[#E02020]" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To raise up a generation of young people who are deeply
                    rooted in Christ, equipped for service, and passionate about
                    transforming their communities through the power of the
                    Gospel.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#1E4E9A]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaStar className="text-3xl mr-3 text-[#1E4E9A]" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A vibrant youth ministry that produces Christ-centered
                    leaders who impact their generation and beyond, living out
                    their faith with boldness and joy.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1E4E9A] to-[#2563EB] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Founded in Faith</h4>
                      <p className="text-blue-100">
                        Started as a small group of passionate young believers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Growing Together</h4>
                      <p className="text-blue-100">
                        Expanded to include multiple ministries and outreach
                        programs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Impacting Lives</h4>
                      <p className="text-blue-100">
                        Now reaching hundreds of young people across Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Upcoming Events & Activities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for exciting events that will strengthen your faith and
                build lasting friendships
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No Events Scheduled
                </h3>
                <p className="text-lg text-gray-600">
                  Contact your church leadership for more information about
                  upcoming youth ministry events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Youth in Action
              </h2>
              <p className="text-xl text-gray-600">
                Capturing moments of faith, fellowship, and fun
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[5, 6, 7, 8, 9, 1].map((item, index) => (
                <div
                  key={item}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#1E4E9A] to-[#E02020] flex items-center justify-center">
                    <Image
                      src={`/youthImages/youth${item}.png`}
                      alt={`Youth Activity ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="font-bold text-lg">Youth Fellowship</h4>
                      <p className="text-sm">Building bonds in Christ</p>
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
              Ready to Join Our Youth Family?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the next step in your faith journey. Connect with us and
              discover how God wants to use you in this generation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:+254721549789"
                className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Youth Pastor
              </a>
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
    </>
  );
};

export default YouthPage;
