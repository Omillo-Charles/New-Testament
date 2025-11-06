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
} from "react-icons/fa";

const YouthPage = () => {
  const upcomingEvents = [
    {
      title: "Youth Revival Night",
      date: "December 15, 2025",
      time: "6:00 PM",
      location: "Main Sanctuary",
      description: "A powerful night of worship, prayer, and testimonies",
    },
    {
      title: "Christmas Outreach",
      date: "December 22, 2025",
      time: "10:00 AM",
      location: "Community Center",
      description: "Spreading Christmas joy to local families in need",
    },
    {
      title: "New Year Youth Retreat",
      date: "January 5-7, 2025",
      time: "All Day",
      location: "Nakuru Retreat Center",
      description: "3-day spiritual retreat to start the year with purpose",
    },
  ];

  const youthLeaders = [
    {
      name: "Pastor Sarah Mwangi",
      title: "Youth Pastor",
      image: "/youthImages/youth1.png",
      description: "Leading our youth with passion and purpose",
    },
    {
      name: "David Kimani",
      title: "Worship Leader",
      image: "/youthImages/youth2.png",
      description: "Inspiring worship and praise among our youth",
    },
    {
      name: "Grace Wanjiku",
      title: "Outreach Coordinator",
      image: "/youthImages/youth3.png",
      description: "Organizing community service and missions",
    },
    {
      name: "Michael Ochieng",
      title: "Youth Secretary",
      image: "/youthImages/youth4.png",
      description: "Keeping our youth connected and informed",
    },
  ];

  const ministryAreas = [
    {
      icon: <FaMusic className="text-5xl text-[#E02020]" />,
      title: "Youth Choir",
      description: "Join our vibrant choir and lift your voice in praise",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-[#E02020]" />,
      title: "Community Outreach",
      description: "Serve others and make a difference in our community",
    },
    {
      icon: <FaBook className="text-5xl text-[#E02020]" />,
      title: "Bible Study Groups",
      description: "Grow deeper in God's Word with your peers",
    },
    {
      icon: <FaRunning className="text-5xl text-[#E02020]" />,
      title: "Sports Ministry",
      description: "Fellowship through sports and healthy competition",
    },
    {
      icon: <FaTheaterMasks className="text-5xl text-[#E02020]" />,
      title: "Drama Team",
      description: "Express faith through creative performances",
    },
    {
      icon: <FaLaptop className="text-5xl text-[#E02020]" />,
      title: "Media Team",
      description: "Use technology to spread the Gospel message",
    },
  ];

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
        <section className="relative h-screen w-full overflow-hidden">
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
          <div className="relative z-40 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center lg:pt-20 py-8">
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
                <button className="group bg-gradient-to-r from-[#E02020] to-[#B81C1C] hover:from-[#B81C1C] hover:to-[#8B1A1A] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
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
                </button>
                <button className="group border-2 border-white text-white hover:bg-white hover:text-[#1E4E9A] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="m10 11.118l-8-4V14a2 2 0 002 2h12a2 2 0 002-2V7.118l-8 4z" />
                    </svg>
                    Contact Youth Pastor
                  </span>
                </button>
              </div>

              {/* Stats or Quick Info */}
              <div
                className="mt-12 flex flex-wrap gap-8 text-white/90 animate-fade-in-up lg:hidden"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">500+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Active Youth
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">15+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Branches
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">40+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Years Strong
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Youth Ministry */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Upcoming Events & Activities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for exciting events that will strengthen your faith and
                build lasting friendships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-[#1E4E9A] p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-red-100">
                      <span className="text-lg">📅</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <span>🕐</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="w-full bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#1E4E9A] hover:bg-[#163E7A] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View More Events
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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

        {/* Youth Leaders */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Meet Our Youth Leaders
              </h2>
              <p className="text-xl text-gray-600">
                Passionate leaders dedicated to guiding our youth in their
                spiritual journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {youthLeaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-[#1E4E9A] to-[#E02020]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-[#E02020] font-semibold mb-3">
                      {leader.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {leader.description}
                    </p>
                    <button className="bg-[#1E4E9A] hover:bg-[#163E7A] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Get Involved
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover your calling and use your gifts to serve God and others
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministryAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#1E4E9A]"
                >
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <button className="bg-gradient-to-r from-[#E02020] to-[#1E4E9A] hover:from-[#B81C1C] hover:to-[#163E7A] text-white font-semibold py-2 px-6 rounded-full transition-all duration-200">
                    Contact Leader
                  </button>
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
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Youth Pastor
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
    </>
  );
};

export default YouthPage;
