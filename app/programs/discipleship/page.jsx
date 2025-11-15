"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaBook,
  FaChurch,
  FaUsers,
  FaGraduationCap,
  FaLaptop,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const DiscipleshipPage = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    homeChurch: "",
    course: "",
    mode: "",
    referralLetter: null,
  });

  const courses = [
    {
      id: 1,
      name: "Diploma in Theology & Ministerial Studies",
      duration: "1–2 years (part-time or full-time)",
      mode: "Weekend / weekday classes",
      target: "Aspiring pastors, ministry interns, and leaders",
      icon: <FaGraduationCap className="text-4xl text-[#1E4E9A]" />,
      modules: [
        "Old & New Testament Survey",
        "Church History",
        "Systematic Theology",
        "Christian Ethics & Leadership",
        "Pastoral Counselling & Care",
        "Evangelism & Missions",
        "Church Administration",
        "Practicum / Ministry Portfolio",
      ],
    },
    {
      id: 2,
      name: "Certificate in Biblical Studies & Leadership",
      duration: "6–12 months",
      mode: "Weekend & evening classes",
      target: "Youth leaders, small-group leaders, and new ministers",
      icon: <FaBook className="text-4xl text-[#E02020]" />,
      modules: [
        "Bible Overview (OT & NT)",
        "Christian Beliefs",
        "Evangelism & Discipleship",
        "Small Group Leadership",
        "Youth Ministry Essentials",
      ],
    },
    {
      id: 3,
      name: "Short Intensive Discipleship Course (Foundations)",
      duration: "4 weeks",
      mode: "Evening sessions or full-day Saturdays",
      target: "New believers, discipleship groups, and ministry teams",
      icon: <FaChurch className="text-4xl text-[#1E4E9A]" />,
      modules: [
        "Prayer",
        "Bible Study Methods",
        "Spiritual Disciplines",
        "Witnessing",
        "Christian Living",
      ],
    },
    {
      id: 4,
      name: "Vocational & ICT Courses (KNEC Modules)",
      duration: "3–6 months",
      mode: "Weekday classes",
      target: "Youth and adults seeking technical skills",
      icon: <FaLaptop className="text-4xl text-[#E02020]" />,
      modules: [
        "Computer Applications",
        "Business Skills",
        "Basic ICT",
        "Digital Literacy",
      ],
    },
    {
      id: 5,
      name: "Leadership & Train-the-Trainer (TOT) Programmes",
      duration: "2–4 weeks",
      mode: "Intensive sessions",
      target: "Ministry leaders and trainers",
      icon: <FaUsers className="text-4xl text-[#1E4E9A]" />,
      modules: [
        "Leadership Principles",
        "Communication Skills",
        "Mentorship",
        "Training Methods",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long are the courses?",
      answer:
        "Course duration varies from 4 weeks for intensive courses to 2 years for diploma programs. Check each course for specific timelines.",
    },
    {
      question: "Can I work while studying?",
      answer:
        "Yes! We offer flexible schedules including weekend and evening classes to accommodate working students.",
    },
    {
      question: "Are the courses accredited?",
      answer:
        "Our diploma and certificate programs are recognized by the Church of God. Vocational courses follow KNEC curriculum standards.",
    },
    {
      question: "Is accommodation available?",
      answer:
        "Limited hostel facilities are available on a first-come, first-served basis. We also assist students in finding affordable housing nearby.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We accept M-Pesa, bank transfers, and cash payments at the campus office. Flexible payment plans are available.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, scholarships are available for church-sponsored candidates. Contact our admissions office for more details.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, referralLetter: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend/email
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
  };

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
            <FaBook className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discipleship Courses
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
            Grow in Faith, Equip for Ministry, Transform Lives
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            NTCOG Kenya - Eldoret Campus, Pioneer Estate
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Courses
            </h2>
            <p className="text-xl text-gray-600">
              Choose the program that fits your calling and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start text-sm text-gray-600">
                      <FaClock className="mr-2 mt-1 text-[#1E4E9A] flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <FaCalendarAlt className="mr-2 mt-1 text-[#E02020] flex-shrink-0" />
                      <span>{course.mode}</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <FaUsers className="mr-2 mt-1 text-[#1E4E9A] flex-shrink-0" />
                      <span>{course.target}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedCourse(
                        expandedCourse === course.id ? null : course.id
                      )
                    }
                    className="w-full bg-[#1E4E9A] hover:bg-[#163A7A] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    View Details
                    {expandedCourse === course.id ? (
                      <FaChevronUp className="ml-2" />
                    ) : (
                      <FaChevronDown className="ml-2" />
                    )}
                  </button>

                  {expandedCourse === course.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Course Modules:
                      </h4>
                      <ul className="space-y-1">
                        {course.modules.map((module, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <FaCheckCircle className="mr-2 mt-1 text-[#E02020] flex-shrink-0 text-xs" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admissions Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCheckCircle className="mr-3 text-[#1E4E9A]" />
                Entry Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="mr-2 text-[#E02020]">•</span>
                  Completed Application Form
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-2 text-[#E02020]">•</span>
                  ID / Birth Certificate
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-2 text-[#E02020]">•</span>
                  Church Recommendation Letter
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-2 text-[#E02020]">•</span>
                  For Diploma: KCSE Certificate or relevant ministry experience
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCalendarAlt className="mr-3 text-[#E02020]" />
                Fees & Intakes
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Intakes:</p>
                  <p className="text-gray-700">January, April, September</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Payment Methods:
                  </p>
                  <p className="text-gray-700">
                    M-Pesa, Bank, or campus office
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Scholarships:</p>
                  <p className="text-gray-700">
                    Available for church-sponsored candidates
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fees:</p>
                  <p className="text-gray-700">
                    Vary per course - contact us for details
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              How to Apply
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                  <FaMapMarkerAlt className="text-2xl text-[#1E4E9A]" />
                </div>
                <p className="font-semibold text-gray-900">Visit Campus</p>
                <p className="text-sm text-gray-600">Pioneer Estate, Eldoret</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3">
                  <FaPhone className="text-2xl text-[#E02020]" />
                </div>
                <p className="font-semibold text-gray-900">Call/WhatsApp</p>
                <p className="text-sm text-gray-600">
                  +254 751 589 698 / +254 114 173 886
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                  <FaEnvelope className="text-2xl text-[#1E4E9A]" />
                </div>
                <p className="font-semibold text-gray-900">Apply Online</p>
                <p className="text-sm text-gray-600">Use the form below</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to start your discipleship journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Home Church *
                </label>
                <input
                  type="text"
                  name="homeChurch"
                  required
                  value={formData.homeChurch}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                  placeholder="Church Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Selection *
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mode of Study *
                </label>
                <select
                  name="mode"
                  required
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                >
                  <option value="">Select mode</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="weekend">Weekend</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Referral Letter (Optional)
                </label>
                <input
                  type="file"
                  name="referralLetter"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100">
              We're here to answer your questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E02020] rounded-full mb-4 shadow-lg">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Campus Location</h3>
              <p className="text-blue-100">Pioneer Estate, Eldoret, Kenya</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <FaPhone className="text-2xl text-[#1E4E9A]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-blue-100">+254 751 589 698</p>
              <p className="text-blue-100">+254 114 173 886</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E02020] rounded-full mb-4 shadow-lg">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-blue-100">info@ntcogk.org</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.facebook.com/ntcogk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <FaFacebook className="text-3xl mr-2" />
              <span>Follow us on Facebook: Discipleship College Eldoret</span>
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757!2d35.269!3d0.514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTAuNCJOIDM1wrAxNicwOC40IkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscipleshipPage;
