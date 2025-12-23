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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 pt-[108px] lg:pt-32">
        {/* Hero Section */}
        <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/youthImages/youth7.png')",
            }}
          ></div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Youth Ministry</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Empowering young people to arise, shine, and make an impact for Christ across Kenya
            </p>
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
