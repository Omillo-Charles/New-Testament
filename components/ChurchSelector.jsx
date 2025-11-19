"use client";
import React, { useState, useRef, useEffect } from "react";

const churches = [
  "The Busia Possibility Center",
  "Busia Restoration Center",
  "Agape Restoration Center Kawangware",
  "Nairobi International Church",
  "Christ Blessing Center Busia",
  "Shiloh Busia",
  "New Testament Oyato",
];

export default function ChurchSelector({ value, onChange, disabled, required }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredChurches = churches.filter((church) =>
    church.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (church) => {
    onChange(church);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-colors ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:border-gray-400"
        } ${!value ? "text-gray-400" : "text-gray-900"}`}
      >
        <div className="flex items-center justify-between">
          <span>{value || "Select your church"}</span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 border-b border-gray-200">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search churches..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900 placeholder-gray-400"
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredChurches.length > 0 ? (
              filteredChurches.map((church) => (
                <button
                  key={church}
                  type="button"
                  onClick={() => handleSelect(church)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    value === church
                      ? "bg-[#1E4E9A] text-white"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {church}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                No churches found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
