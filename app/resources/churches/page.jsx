"use client";
import React from "react";
import { FaChurch } from "react-icons/fa";

const ChurchesPage = () => {
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
            <FaChurch className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Churches</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
            224+ Churches Across Kenya Serving Communities in 6 Regions
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Find a New Testament Church of God congregation near you
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <FaChurch className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Churches Listing Coming Soon
            </h3>
            <p className="text-lg text-gray-600">
              We're working on compiling a comprehensive directory of all our churches across Kenya. Please check back later.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchesPage;
