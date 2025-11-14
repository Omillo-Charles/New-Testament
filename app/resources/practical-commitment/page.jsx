"use client";
import React from "react";
import {
  FaCross,
  FaChurch,
  FaHandsHelping,
  FaPrayingHands,
  FaMusic,
  FaBook,
  FaHeart,
  FaClock,
  FaGift,
  FaDollarSign,
} from "react-icons/fa";

const PracticalCommitmentPage = () => {
  const spiritualDisciplines = [
    {
      icon: <FaPrayingHands className="text-4xl text-[#E02020]" />,
      title: "Prayer",
      description:
        "Expressing trust in God and acknowledging dependence on Him",
    },
    {
      icon: <FaMusic className="text-4xl text-[#1E4E9A]" />,
      title: "Praise and Worship",
      description: "Blessing God and communion with Him",
    },
    {
      icon: <FaHeart className="text-4xl text-[#E02020]" />,
      title: "Confession",
      description: "Acknowledging our sins and receiving God's forgiveness",
    },
    {
      icon: <FaCross className="text-4xl text-[#1E4E9A]" />,
      title: "Fasting",
      description:
        "Drawing close to God and meditating on Christ's passion",
    },
    {
      icon: <FaBook className="text-4xl text-[#E02020]" />,
      title: "Meditation and Study",
      description: "Deepening our understanding of God's Word",
    },
  ];

  const stewardshipAreas = [
    {
      icon: <FaClock className="text-4xl text-[#1E4E9A]" />,
      title: "Time",
      description:
        "Using our time wisely for God's glory and kingdom purposes",
    },
    {
      icon: <FaGift className="text-4xl text-[#E02020]" />,
      title: "Talent",
      description:
        "Using spiritual gifts and natural talents for God's glory",
    },
    {
      icon: <FaDollarSign className="text-4xl text-[#1E4E9A]" />,
      title: "Money",
      description:
        "Wise and frugal use of temporal blessings, recognizing that wise use of money is essential to Christian life",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero6.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaHandsHelping className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Practical Commitments
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Living Out Our Faith Through Action and Dedication
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              The New Testament Church of God demonstrates our faith through
              three main areas of commitment that guide our daily walk with
              Christ and service to His kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment 1: Christ through Spiritual Disciplines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E02020] rounded-full mb-6 shadow-lg">
              <FaCross className="text-4xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1. Commitment to Christ
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Through Spiritual Disciplines
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {spiritualDisciplines.map((discipline, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{discipline.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-[#1E4E9A]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Worship and Enrichment
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We engage in both private and public worship for spiritual
              enrichment and growth in grace. Through these spiritual
              disciplines, believers express trust in God, draw close to Him,
              meditate on Christ's passion, and discipline themselves to submit
              to the Holy Spirit's control.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment 2: Body of Christ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1E4E9A] rounded-full mb-6 shadow-lg">
              <FaChurch className="text-4xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2. Commitment to the Body of Christ
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Loyalty to God and His Church
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E02020] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaChurch className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Loyalty to God
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our commitment begins with unwavering loyalty to God,
                      recognizing Him as the head of the church and the source
                      of all spiritual life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1E4E9A] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Commitment to His Church
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are dedicated to the body of Christ, supporting one
                      another, growing together in faith, and working in unity
                      to fulfill God's purposes on earth.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    "For just as the body is one and has many members, and all
                    the members of the body, though many, are one body, so it is
                    with Christ." - 1 Corinthians 12:12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment 3: Work of Christ through Stewardship */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E02020] rounded-full mb-6 shadow-lg">
              <FaHandsHelping className="text-4xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3. Commitment to the Work of Christ
            </h2>
            <p className="text-xl text-gray-600 mb-2">Through Stewardship</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stewardshipAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-[#1E4E9A]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Being Good Stewards
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are called to be good stewards of all that God has entrusted
                to us. This means:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E02020] mr-3 text-xl">•</span>
                  <span>
                    Being wise and frugal in our use of temporal blessings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E02020] mr-3 text-xl">•</span>
                  <span>
                    Using our spiritual gifts and natural talents for God's
                    glory
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E02020] mr-3 text-xl">•</span>
                  <span>
                    Recognizing that wise use of money is essential to Christian
                    life
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E02020] mr-3 text-xl">•</span>
                  <span>
                    Managing our time effectively for kingdom purposes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Living Out Our Commitments
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            These practical commitments are not just ideals—they are the
            foundation of our daily walk with Christ. Through spiritual
            disciplines, dedication to the church, and faithful stewardship, we
            demonstrate our love for God and our commitment to His kingdom.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <p className="text-lg leading-relaxed text-gray-900 italic">
              "Therefore, my beloved brothers, be steadfast, immovable, always
              abounding in the work of the Lord, knowing that in the Lord your
              labor is not in vain." - 1 Corinthians 15:58
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us in Living Out These Commitments
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite you to be part of a community that is committed to Christ,
            His church, and His work in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/resources/churches"
              className="border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Find a Church
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticalCommitmentPage;
