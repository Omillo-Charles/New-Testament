"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaSearch } from "react-icons/fa";

const ChurchLocatorMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample church locations - you'll need to add actual addresses and coordinates
  const churches = [
    {
      id: 1,
      name: "NTCOG Karen - National Headquarters",
      region: "Nairobi",
      address: "Kwarara Rd/Ndege Rd, Off Bugani Rd, Karen, Nairobi",
      phone: "+254 759 120 222",
      lat: -1.35,
      lng: 36.7,
    },
    {
      id: 2,
      name: "NTCOG Eldoret - Discipleship College",
      region: "North Western",
      address: "Pioneer Estate, Eldoret",
      phone: "+254 751 589 698",
      lat: 0.514,
      lng: 35.269,
    },
    // Add more churches here with their actual coordinates
    // You can get coordinates from Google Maps by right-clicking on the location
  ];

  const regions = [
    "all",
    "Nairobi",
    "North Central",
    "Coast",
    "Western",
    "North Western",
    "Nyanza",
  ];

  const filteredChurches = churches.filter((church) => {
    const matchesRegion =
      selectedRegion === "all" || church.region === selectedRegion;
    const matchesSearch =
      searchTerm === "" ||
      church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      church.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Create Google Maps URL with multiple markers
  const createMapUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed/v1/place";
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // You'll need to get this from Google Cloud Console

    // For now, using a simple embed showing Kenya
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077509.0!2d37.9!3d-0.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1234567890";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1E4E9A] text-white p-6">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Find a Church Near You
        </h2>
        <p className="text-center text-blue-100">
          Over 224 churches across Kenya in 28+ districts
        </p>
      </div>

      {/* Search and Filter */}
      <div className="p-6 bg-gray-50 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by church name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900"
            />
          </div>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region === "all" ? "All Regions" : `${region} Region`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Map */}
        <div className="h-[500px] lg:h-[600px]">
          <iframe
            src={createMapUrl()}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NTCOG Kenya Church Locations"
          ></iframe>
        </div>

        {/* Church List */}
        <div className="h-[500px] lg:h-[600px] bg-gray-50">
          <div className="sticky top-0 bg-gray-50 p-6 pb-4 border-b border-gray-200 z-10">
            <h3 className="text-xl font-bold text-gray-900">
              {filteredChurches.length} Church
              {filteredChurches.length !== 1 ? "es" : ""} Found
            </h3>
          </div>
          <div className="h-[calc(100%-80px)] overflow-y-auto px-6 pb-6 pt-4 scrollbar-thin scrollbar-thumb-[#1E4E9A] scrollbar-track-gray-200">
            {filteredChurches.length === 0 ? (
              <div className="text-center py-12">
                <FaMapMarkerAlt className="text-5xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  No churches found matching your search.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Try adjusting your filters or search term.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredChurches.map((church) => (
                  <div
                    key={church.id}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#E02020]"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">
                      {church.name}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start text-gray-600">
                        <FaMapMarkerAlt className="mr-2 mt-1 text-[#1E4E9A] flex-shrink-0" />
                        <span>{church.address}</span>
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
                      <div className="pt-2">
                        <span className="inline-block bg-[#1E4E9A] text-white text-xs px-3 py-1 rounded-full">
                          {church.region} Region
                        </span>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${church.lat},${church.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#E02020] hover:text-[#B81C1C] font-semibold text-sm transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-[#1E4E9A] text-white p-6 text-center">
        <p className="mb-2">
          Can't find a church near you? Contact us for assistance.
        </p>
        <a
          href="tel:+254759120222"
          className="inline-flex items-center text-white hover:text-blue-200 font-semibold transition-colors"
        >
          <FaPhone className="mr-2" />
          +254 759 120 222
        </a>
      </div>
    </div>
  );
};

export default ChurchLocatorMap;
