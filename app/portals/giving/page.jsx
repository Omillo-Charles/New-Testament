"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaGlobeAfrica,
  FaChurch,
  FaGraduationCap,
  FaChild,
  FaBook,
  FaMoneyBillWave,
  FaMobileAlt,
  FaUniversity,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";

const GivingPage = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [givingType, setGivingType] = useState("tithe");

  const givingCategories = [
    {
      id: "tithe",
      icon: <FaBook className="text-4xl text-[#1E4E9A]" />,
      title: "Tithes",
      description:
        "A foundational giving practice, bringing the first tenth of our income to honor God.",
      scripture: "Malachi 3:10, Matthew 23:23",
      color: "blue",
    },
    {
      id: "offering",
      icon: <FaHeart className="text-4xl text-[#E02020]" />,
      title: "Offerings",
      description:
        "Voluntary gifts given above and beyond tithes to support the work of the church.",
      scripture: "1 Corinthians 16:2, 2 Corinthians 8:1-24; 9:1-15",
      color: "red",
    },
    {
      id: "missions",
      icon: <FaGlobeAfrica className="text-4xl text-[#1E4E9A]" />,
      title: "Missions Support",
      description:
        "Supporting the spread of the Gospel across Eastern Africa and beyond.",
      scripture: "Matthew 28:19-20, Acts 1:8",
      color: "blue",
    },
  ];

  const missionProjects = [
    {
      icon: <FaGraduationCap className="text-3xl text-[#1E4E9A]" />,
      title: "Discipleship College - Eldoret",
      description:
        "Training the next generation of ministers and leaders at our regional Bible college.",
    },
    {
      icon: <FaChild className="text-3xl text-[#E02020]" />,
      title: "Orphanage Homes",
      description:
        "Providing care, shelter, and hope for orphaned and vulnerable children.",
    },
    {
      icon: <FaBook className="text-3xl text-[#1E4E9A]" />,
      title: "Schools & Education",
      description:
        "Supporting educational initiatives that combine academic excellence with Christian values.",
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl text-[#E02020]" />,
      title: "Community Projects",
      description:
        "Sewing projects, vocational training, and community development initiatives.",
    },
  ];

  const paymentMethods = [
    {
      method: "M-Pesa",
      icon: <FaMobileAlt className="text-3xl text-green-600" />,
      details: "Paybill: [To be provided]",
      instructions: "Go to M-Pesa > Lipa na M-Pesa > Paybill",
    },
    {
      method: "Bank Transfer",
      icon: <FaUniversity className="text-3xl text-[#1E4E9A]" />,
      details: "Account details available on request",
      instructions: "Contact the church office for bank details",
    },
  ];

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

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

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaHandHoldingHeart className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Give Generously
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Supporting God's Work Through Biblical Stewardship
          </p>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-[#E02020]">
            <FaQuoteLeft className="text-3xl text-[#1E4E9A] mb-4" />
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-4 italic">
              "Bring the whole tithe into the storehouse, that there may be
              food in my house. Test me in this," says the LORD Almighty, "and
              see if I will not throw open the floodgates of heaven and pour
              out so much blessing that there will not be room enough to store
              it."
            </blockquote>
            <cite className="text-lg text-[#E02020] font-semibold not-italic">
              — Malachi 3:10 (NIV)
            </cite>
          </div>
        </div>
      </section>

      {/* Types of Giving */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Giving
            </h2>
            <p className="text-xl text-gray-600">
              Biblical principles for supporting God's work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {givingCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Biblical Reference:
                  </p>
                  <p className="text-sm text-[#1E4E9A] italic">
                    {category.scripture}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Give
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <FaCheckCircle className="text-2xl text-[#E02020] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Obedience to God
                  </h3>
                  <p className="text-gray-600">
                    Giving is an act of worship and obedience to God's Word,
                    acknowledging that everything we have comes from Him.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <FaCheckCircle className="text-2xl text-[#1E4E9A] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Supporting Ministry
                  </h3>
                  <p className="text-gray-600">
                    Your gifts enable the church to fulfill its mission of
                    preaching the Gospel and serving communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <FaCheckCircle className="text-2xl text-[#E02020] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Blessing Others
                  </h3>
                  <p className="text-gray-600">
                    Through giving, we care for the needy, orphans, widows, and
                    marginalized in our communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <FaCheckCircle className="text-2xl text-[#1E4E9A] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Receiving Blessings
                  </h3>
                  <p className="text-gray-600">
                    God promises to bless those who give faithfully and
                    cheerfully, opening the windows of heaven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission Projects We Support
            </h2>
            <p className="text-xl text-gray-600">
              Your giving impacts lives across Eastern Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E02020] hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4">{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#1E4E9A] to-[#163A7A] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Church of God World Missions
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              As part of the Church of God World Missions, NTCOG Kenya
              participates in spreading the Gospel across Eastern Africa and
              beyond. Your missions giving supports evangelism, church
              planting, and discipleship across the region.
            </p>
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Give
            </h2>
            <p className="text-xl text-gray-600">
              Multiple convenient ways to support God's work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {paymentMethods.map((payment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  {payment.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {payment.method}
                </h3>
                <p className="text-lg text-[#E02020] font-semibold mb-4">
                  {payment.details}
                </p>
                <p className="text-gray-600">{payment.instructions}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Give In Person
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaChurch className="text-4xl text-[#1E4E9A] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  During Services
                </h4>
                <p className="text-sm text-gray-600">
                  Give your tithes and offerings during Sunday worship services
                </p>
              </div>
              <div className="text-center">
                <FaUniversity className="text-4xl text-[#E02020] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Church Office</h4>
                <p className="text-sm text-gray-600">
                  Visit the church office during business hours
                </p>
              </div>
              <div className="text-center">
                <FaMoneyBillWave className="text-4xl text-[#1E4E9A] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Special Envelopes
                </h4>
                <p className="text-sm text-gray-600">
                  Use designated giving envelopes available at your local church
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Stewardship */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Biblical Stewardship
            </h2>
            <p className="text-xl text-blue-100">
              Learning to manage God's resources wisely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Financial Management Seminars
              </h3>
              <p className="text-gray-700 mb-4">
                Church leaders regularly organize seminars on financial
                management and biblical stewardship to help members understand
                God's principles for handling finances.
              </p>
              <p className="text-sm text-[#1E4E9A] italic font-semibold">
                Contact your local church for upcoming seminar dates
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Teaching on Tithing & Giving
              </h3>
              <p className="text-gray-700 mb-4">
                Regular teaching on the blessing of tithing and the joy of
                giving helps members grow in their understanding of biblical
                stewardship and generosity.
              </p>
              <p className="text-sm text-[#E02020] italic font-semibold">
                "God loves a cheerful giver" - 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About Giving?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help you understand biblical giving and stewardship
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  National Headquarters
                </h3>
                <p className="text-gray-600">+254 759 120 222</p>
                <p className="text-sm text-gray-500 mt-2">
                  Karen, Nairobi, Kenya
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Your Local Church
                </h3>
                <p className="text-gray-600">Contact your pastor or treasurer</p>
                <p className="text-sm text-gray-500 mt-2">
                  For specific giving information
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final Scripture */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </p>
          <p className="text-xl text-[#E02020] font-semibold">
            — 2 Corinthians 9:7 (NIV)
          </p>
        </div>
      </section>
    </div>
  );
};

export default GivingPage;
