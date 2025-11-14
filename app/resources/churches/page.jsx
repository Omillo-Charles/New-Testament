"use client";
import React, { useState } from "react";
import {
  FaChurch,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const ChurchesPage = () => {
  const [expandedRegion, setExpandedRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const regions = [
    {
      id: 1,
      name: "North Central Region",
      bishop: "Samuel Wainaina",
      title: "Regional Bishop & National Secretary",
      location: "Gatanga Area",
      color: "#1E4E9A",
      churches: [
        // Add churches here - placeholder for now
        { name: "NTCOG Gatanga", location: "Gatanga, Murang'a County" },
        { name: "NTCOG Thika", location: "Thika, Kiambu County" },
        // Add more churches...
      ],
    },
    {
      id: 2,
      name: "Nairobi Region",
      bishop: "Dickson Tito Mwalili",
      title: "Regional Bishop & National Treasurer",
      location: "Karen, Nairobi",
      color: "#E02020",
      churches: [
        {
          name: "NTCOG Karen - National Headquarters",
          location: "Kwarara Rd/Ndege Rd, Off Bugani Rd, Karen, Nairobi",
          phone: "+254 759 120 222",
        },
        { name: "NTCOG Nairobi Central", location: "Nairobi CBD" },
        // Add more churches...
      ],
    },
    {
      id: 3,
      name: "Coast Region",
      bishop: "Benea Alukwe Amakhungu",
      title: "Regional Bishop & National Education Coordinator",
      location: "Rabai Area",
      color: "#1E4E9A",
      churches: [
        { name: "NTCOG Rabai", location: "Rabai, Kilifi County" },
        { name: "NTCOG Mombasa", location: "Mombasa" },
        // Add more churches...
      ],
    },
    {
      id: 4,
      name: "Western Region",
      bishop: "Simon Ngure Ben",
      title: "Regional Bishop & National Prayer Coordinator",
      location: "Busia Area",
      color: "#E02020",
      churches: [
        { name: "NTCOG Busia", location: "Busia County" },
        { name: "NTCOG Kakamega", location: "Kakamega County" },
        // Add more churches...
      ],
    },
    {
      id: 5,
      name: "North Western Region",
      bishop: "Protus Pamba Orima",
      title: "Regional Bishop",
      location: "Busia Area",
      color: "#1E4E9A",
      churches: [
        {
          name: "NTCOG Eldoret - Discipleship College",
          location: "Pioneer Estate, Eldoret",
          phone: "+254 751 589 698",
        },
        { name: "NTCOG Busia Possibility Center", location: "Busia Town" },
        { name: "NTCOG Busia Restoration Center", location: "Busia Town" },
        // Add more churches...
      ],
    },
    {
      id: 6,
      name: "Nyanza Region",
      bishop: "Paul Obadha Ohuare",
      title: "Regional Bishop & National Convention Coordinator",
      location: "Molo Area",
      color: "#E02020",
      churches: [
        { name: "NTCOG Molo", location: "Molo, Nakuru County" },
        { name: "NTCOG Kisumu", location: "Kisumu County" },
        // Add more churches...
      ],
    },
  ];

  const filteredRegions = regions.map((region) => ({
    ...region,
    churches: region.churches.filter(
      (church) =>
        searchTerm === "" ||
        church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.location.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const totalChurches = regions.reduce(
    (sum, region) => sum + region.churches.length,
    0
  );

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

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search churches by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900 text-lg"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Showing {totalChurches} churches across 6 regions
          </p>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regional Churches
            </h2>
            <p className="text-xl text-gray-600">
              Organized into 6 regions with 28+ districts
            </p>
          </div>

          <div className="space-y-6">
            {filteredRegions.map((region) => (
              <div
                key={region.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4"
                style={{ borderLeftColor: region.color }}
              >
                {/* Region Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedRegion(
                      expandedRegion === region.id ? null : region.id
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <FaChurch
                          className="text-3xl mr-4"
                          style={{ color: region.color }}
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {region.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {region.churches.length} churches
                          </p>
                        </div>
                      </div>

                      <div className="ml-14 space-y-2">
                        <div className="flex items-center text-gray-700">
                          <FaUser className="mr-2 text-[#E02020]" />
                          <span className="font-semibold">{region.bishop}</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          {region.title}
                        </p>
                        <div className="flex items-center text-gray-600 text-sm ml-6">
                          <FaMapMarkerAlt className="mr-2 text-[#1E4E9A]" />
                          <span>Office Location: {region.location}</span>
                        </div>
                      </div>
                    </div>

                    <button className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                      {expandedRegion === region.id ? (
                        <FaChevronUp className="text-2xl text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-2xl text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Churches List */}
                {expandedRegion === region.id && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    {region.churches.length === 0 ? (
                      <p className="text-center text-gray-600 py-8">
                        No churches found matching your search.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {region.churches.map((church, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                          >
                            <h4 className="font-bold text-gray-900 mb-2 flex items-start">
                              <FaChurch
                                className="mr-2 mt-1 flex-shrink-0"
                                style={{ color: region.color }}
                              />
                              <span>{church.name}</span>
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start text-gray-600">
                                <FaMapMarkerAlt className="mr-2 mt-1 text-[#1E4E9A] flex-shrink-0" />
                                <span>{church.location}</span>
                              </div>
                              {church.phone && (
                                <div className="flex items-center text-gray-600">
                                  <FaPhone className="mr-2 text-[#E02020] flex-shrink-0" />
                                  <a
                                    href={`tel:${church.phone}`}
                                    className="hover:text-[#E02020] transition-colors"
                                  >
                                    {church.phone}
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Can't Find a Church Near You?
          </h2>
          <p className="text-xl mb-8 text-white">
            Contact the National Headquarters for assistance in finding the
            nearest congregation.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-2xl text-[#E02020]" />
                <a
                  href="tel:+254759120222"
                  className="text-2xl font-bold text-[#1E4E9A] hover:text-[#163A7A] transition-colors"
                >
                  +254 759 120 222
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaMapMarkerAlt className="text-xl text-[#E02020]" />
                <span className="text-lg text-gray-700">
                  National Headquarters: Karen, Nairobi
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg text-white">
            We're here to help you find a church home where you can worship,
            grow, and serve.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Our Church Network
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The New Testament Church of God Kenya has grown to over 224
              churches organized into 6 regions and 28+ districts. Each region
              is led by a Regional Bishop who oversees the spiritual growth and
              administrative needs of the churches in their area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our churches are committed to preaching the gospel in the power of
              Pentecost with the compassion of Christ, reaching both urban
              centers and remote villages across Kenya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchesPage;
