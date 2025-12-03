"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPray,
  FaBook,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaCalendarAlt,
  FaFileAlt,
  FaChurch,
  FaBullseye,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ClergyPage = () => {
  const resources = [
    {
      icon: <FaBook className="text-4xl text-[#1E4E9A]" />,
      title: "Sermon Resources",
      description:
        "Access sermon outlines, biblical commentaries, and preaching materials to enrich your ministry.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-[#E02020]" />,
      title: "Training & Development",
      description:
        "Continuous learning opportunities, workshops, and theological education programs.",
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#1E4E9A]" />,
      title: "Ministry Guidelines",
      description:
        "Official policies, procedures, and best practices for effective church leadership.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#E02020]" />,
      title: "Pastoral Care",
      description:
        "Support resources for counseling, crisis intervention, and member care.",
    },
  ];

  const quickLinks = [
    {
      title: "Submit Documents",
      description:
        "Submit reports, credentials, and official documents to the National Office.",
      link: "/portals/submissions",
      icon: <FaFileAlt className="text-3xl" />,
      color: "from-[#1E4E9A] to-[#163E7A]",
    },
    {
      title: "Request Support",
      description:
        "Request prayer support, counseling, or assistance from the National Office.",
      link: "/contact",
      icon: <FaPray className="text-3xl" />,
      color: "from-[#1E4E9A] to-[#163E7A]",
    },
    {
      title: "Event Calendar",
      description:
        "View upcoming clergy meetings, conferences, and important church events.",
      link: "/resources/events-calendar",
      icon: <FaCalendarAlt className="text-3xl" />,
      color: "from-[#E02020] to-[#B81C1C]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/clergyImages/clergy18.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaChurch className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Clergy Portal</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Empowering and equipping God's servants for effective ministry
            across Kenya
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome, Servants of God
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-4">
                Dear Pastors, Ministers, and Church Leaders,
              </p>
              <p className="mb-4">
                We honor and appreciate your dedication to serving God's people
                and advancing His kingdom across Kenya. This portal has been
                created to support you in your ministry calling by providing
                essential resources, training opportunities, and a platform for
                collaboration with fellow clergy members.
              </p>
              <p className="mb-4">
                As shepherds of God's flock, you carry a sacred responsibility.
                We are committed to walking alongside you, providing the tools,
                guidance, and support you need to fulfill your calling with
                excellence and integrity.
              </p>
              <p className="text-lg font-semibold text-[#1E4E9A] italic">
                "And I will give you shepherds after my own heart, who will feed
                you with knowledge and understanding." - Jeremiah 3:15
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Essential tools and resources for your ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${link.color} rounded-full mb-4 text-white group-hover:scale-110 transition-transform`}
                >
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Clergy Events
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar for these important gatherings
            </p>
          </div>

          {(() => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const events = [
              // Future events will be added here
            ].filter(event => event.endDate >= today);

            return events.length > 0 ? (
              <div className="max-w-2xl mx-auto">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-3 text-[#1E4E9A]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaClock className="mr-3 text-[#1E4E9A]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-3 text-[#1E4E9A]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <FaCalendarAlt className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No Events Scheduled
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    For information about upcoming clergy events and training,
                    please contact the National Office.
                  </p>
                  <a
                    href="tel:+254759120222"
                    className="inline-flex items-center bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaPhone className="mr-2" />
                    Call National Office
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Clergy Covenant */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#1E4E9A] to-[#163E7A] rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <FaHandsHelping className="text-5xl mx-auto mb-4 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Clergy Covenant
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Spiritual Integrity
                    </h3>
                    <p className="text-blue-100">
                      Maintain personal holiness and exemplary Christian
                      character in all aspects of life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Biblical Faithfulness
                    </h3>
                    <p className="text-blue-100">
                      Preach and teach the Word of God with accuracy, clarity,
                      and conviction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Pastoral Care</h3>
                    <p className="text-blue-100">
                      Shepherd God's people with compassion, wisdom, and genuine
                      concern for their wellbeing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Unity & Collaboration
                    </h3>
                    <p className="text-blue-100">
                      Work together with fellow clergy to advance God's kingdom
                      across Kenya.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Continuous Growth
                    </h3>
                    <p className="text-blue-100">
                      Pursue ongoing spiritual, theological, and leadership
                      development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBullseye className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Accountability</h3>
                    <p className="text-blue-100">
                      Submit to godly oversight and maintain transparency in
                      ministry and finances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clergy Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Clergy in Action
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating our dedicated pastors and ministers serving across
              Kenya
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            ].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-gray-200">
                  <Image
                    src={`/clergyImages/clergy${num}.png`}
                    alt={`Clergy Member ${num}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-semibold text-sm">Ministry in Action</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Support or Guidance?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The National Office is here to support you in your ministry. Don't
            hesitate to reach out for prayer, counsel, or assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact National Office
            </Link>
            <Link
              href="/portals/submissions"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Submit Documents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClergyPage;
