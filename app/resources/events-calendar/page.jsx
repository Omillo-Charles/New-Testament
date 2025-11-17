"use client";

import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaUsers } from "react-icons/fa";

export default function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedEvent, setExpandedEvent] = useState(null);

  // Events data
  const events = [
    {
      name: "Youth Explosion",
      startDate: new Date(2025, 11, 8), // December 8, 2025 (month is 0-indexed)
      endDate: new Date(2025, 11, 13), // December 13, 2025
      color: "#E02020",
      time: "8:00 AM - 5:00 PM",
      venue: "LifeSpring Academy, Langata, Nairobi",
      registrationFee: "KES 1,500",
      expectedAttendance: "2,000",
    },
  ];

  const toggleEventDetails = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  // Check if a date has an event
  const getEventForDate = (year, month, day) => {
    const date = new Date(year, month, day);
    return events.find((event) => {
      return date >= event.startDate && date <= event.endDate;
    });
  };

  // Filter upcoming events (events that haven't ended yet)
  const upcomingEvents = events.filter((event) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
    return event.endDate >= now;
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const today = new Date();
  const isCurrentMonth =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  // Generate calendar days
  const calendarDays = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero5.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Events Calendar
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with our upcoming church events and activities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Calendar Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-gradient-to-r from-[#1E4E9A] to-[#163A7A] px-6 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Previous month"
              >
                <IoChevronBack className="w-6 h-6 text-white" />
              </button>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h2>
                <button
                  onClick={goToToday}
                  className="mt-2 px-4 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors"
                >
                  Today
                </button>
              </div>

              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Next month"
              >
                <IoChevronForward className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-4 md:p-6">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center font-semibold text-gray-700 py-2 text-sm md:text-base"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const isToday = isCurrentMonth && day === today.getDate();
                const event = day
                  ? getEventForDate(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day
                    )
                  : null;

                return (
                  <div
                    key={index}
                    className={`
                      aspect-square flex flex-col items-center justify-center
                      rounded-lg text-sm md:text-base
                      transition-all duration-200
                      ${day ? "hover:bg-blue-50 cursor-pointer" : ""}
                      ${
                        isToday
                          ? "bg-[#E02020] text-white font-bold hover:bg-[#B81C1C]"
                          : event
                          ? "bg-purple-100 text-purple-900 font-semibold hover:bg-purple-200"
                          : day
                          ? "bg-gray-50 text-gray-900"
                          : "bg-transparent"
                      }
                    `}
                    title={event ? event.name : ""}
                  >
                    {day && (
                      <>
                        <span className="w-full h-full flex flex-col items-center justify-center p-1">
                          <span>{day}</span>
                          {event && (
                            <span className="text-[10px] leading-tight text-center mt-0.5">
                              {event.name}
                            </span>
                          )}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#E02020] rounded"></div>
              <span className="text-gray-700">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></div>
              <span className="text-gray-700">Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-50 border border-gray-200 rounded"></div>
              <span className="text-gray-700">Regular Day</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events List */}
        {upcomingEvents.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-purple-50 rounded-lg border border-purple-200 overflow-hidden"
                >
                  <div
                    className="flex items-start gap-3 p-4 cursor-pointer hover:bg-purple-100 transition-colors"
                    onClick={() => toggleEventDetails(index)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs font-semibold">
                        {monthNames[event.startDate.getMonth()].slice(0, 3)}
                      </span>
                      <span className="text-lg font-bold">
                        {event.startDate.getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{event.name}</h4>
                      <p className="text-sm text-gray-600">
                        {monthNames[event.startDate.getMonth()]}{" "}
                        {event.startDate.getDate()} -{" "}
                        {monthNames[event.endDate.getMonth()]}{" "}
                        {event.endDate.getDate()}, {event.endDate.getFullYear()}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedEvent === index ? (
                        <IoChevronUp className="w-6 h-6 text-purple-600" />
                      ) : (
                        <IoChevronDown className="w-6 h-6 text-purple-600" />
                      )}
                    </div>
                  </div>

                  {/* Dropdown Details */}
                  {expandedEvent === index && (
                    <div className="px-4 pb-4 pt-2 border-t border-purple-200 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <FaClock className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Date & Time
                            </p>
                            <p className="text-sm text-gray-600">
                              {monthNames[event.startDate.getMonth()]}{" "}
                              {event.startDate.getDate()} -{" "}
                              {monthNames[event.endDate.getMonth()]}{" "}
                              {event.endDate.getDate()},{" "}
                              {event.endDate.getFullYear()}
                            </p>
                            <p className="text-sm text-gray-600">{event.time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <FaMapMarkerAlt className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Venue
                            </p>
                            <p className="text-sm text-gray-600">{event.venue}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <FaMoneyBillWave className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Registration Fee
                            </p>
                            <p className="text-sm text-gray-600">
                              {event.registrationFee}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <FaUsers className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Expected Attendance
                            </p>
                            <p className="text-sm text-gray-600">
                              {event.expectedAttendance}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="mt-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us for Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of our vibrant community. Connect with us to stay informed
              about all church activities and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/portals"
                className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Find a Branch
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
