"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaBook,
  FaChurch,
  FaUsers,
  FaGlobe,
  FaHandsHelping,
  FaLaptop,
  FaUtensils,
  FaBriefcase,
  FaCut,
  FaCalculator,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";

const BibleCollegePage = () => {
  const programs = [
    {
      icon: <FaBook className="text-4xl text-[#1E4E9A]" />,
      title: "Theology & Pastoral Ministry",
      description:
        "Comprehensive biblical training with practical ministry experience for church leadership.",
      requirements: "D+ in KCSE (Certificate), C- and above (Diploma)",
    },
    {
      icon: <FaLaptop className="text-4xl text-[#E02020]" />,
      title: "ICT & Computer Applications",
      description:
        "Information and Communication Technology training with digital literacy certification.",
      requirements: "D+ in KCSE",
    },
    {
      icon: <FaBriefcase className="text-4xl text-[#1E4E9A]" />,
      title: "Business Management",
      description:
        "Practical business skills combined with Christian ethics and leadership principles.",
      requirements: "C- and above in KCSE",
    },
    {
      icon: <FaUsers className="text-4xl text-[#E02020]" />,
      title: "Human Resource Management",
      description:
        "Professional HR training with emphasis on servant leadership and people development.",
      requirements: "C- and above in KCSE",
    },
    {
      icon: <FaUtensils className="text-4xl text-[#1E4E9A]" />,
      title: "Catering & Hospitality",
      description:
        "Culinary arts and hospitality management with practical training opportunities.",
      requirements: "D+ in KCSE",
    },
    {
      icon: <FaCalculator className="text-4xl text-[#E02020]" />,
      title: "CPA Training",
      description:
        "Certified Public Accountants training preparing students for professional accounting careers.",
      requirements: "C- and above in KCSE",
    },
    {
      icon: <FaCut className="text-4xl text-[#1E4E9A]" />,
      title: "Cosmetology Services",
      description:
        "Professional beauty and cosmetology training with hands-on practical experience.",
      requirements: "D+ in KCSE",
    },
  ];

  const coreValues = [
    {
      title: "Faith Foundation",
      description:
        "Grounded in Christian principles that guide all teaching and interactions",
    },
    {
      title: "Academic Excellence",
      description:
        "Striving for highest standards in academic and extracurricular programs",
    },
    {
      title: "Community Service",
      description:
        "Preparing students to serve communities with compassion and integrity",
    },
    {
      title: "Supportive Environment",
      description:
        "Fostering environments where students grow together in faith and learning",
    },
    {
      title: "Innovation",
      description:
        "Embracing new ideas and technologies to enhance learning experiences",
    },
    {
      title: "Integrity",
      description:
        "Upholding honesty and ethical behavior in all aspects of college life",
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

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaGraduationCap className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discipleship College
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
            Equipping the Next Generation for Ministry and Service
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Pioneer Estate, Eldoret, Kenya
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#1E4E9A]">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <FaChurch className="mr-3 text-[#1E4E9A]" />
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To preach the gospel in the power of Pentecost with the
                compassion of Christ to the unreached in urban centers and
                remote villages, ministering to people on all levels of social
                standing including the needy, destitute, marginalized, orphaned
                and widows.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#E02020]">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <FaGlobe className="mr-3 text-[#E02020]" />
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To present the Gospel in the power of Pentecost with relevance
                for the African context of the 21st century, striving towards
                financial self-reliance and providing holistic education that
                equips students for success in their chosen careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Discipleship College
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discipleship College in Eldoret has had the most significant
                impact across the Eastern Africa Region and beyond, serving as
                the Regional Bible College for the Church of God. Located at
                Pioneer Estate in Eldoret, Kenya, our 17-acre campus welcomes
                students not only from Kenya but from across East Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our student body is comprised mostly of Kenyans, but we also
                serve ministers from other African countries including Uganda,
                Ethiopia, Sudan, Tanzania, Burundi, Malawi, Zambia, and
                Botswana. This diversity enriches our learning community and
                prepares students for cross-cultural ministry.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#1E4E9A] p-6 rounded-lg">
                <p className="text-lg font-semibold text-[#1E4E9A]">
                  We offer holistic education that combines spiritual formation
                  with practical skills, preparing students not just for
                  ministry, but for success in their chosen careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programs Offered
            </h2>
            <p className="text-xl text-gray-600">
              Multiple pathways combining theological training with vocational
              skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {program.description}
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-gray-700">
                    Requirements: {program.requirements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide our educational approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1E4E9A]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Facilities & Student Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaHome className="text-3xl text-[#1E4E9A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hostel Facilities
              </h3>
              <p className="text-gray-600 text-sm">
                Limited hostel facilities for male and female students on
                first-come, first-served basis. Assistance available for finding
                affordable housing nearby.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <FaDollarSign className="text-3xl text-[#E02020]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Financial Aid
              </h3>
              <p className="text-gray-600 text-sm">
                Limited scholarships and flexible payment plans available for
                qualifying students. Some programs eligible for government
                funding through HELB.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaGlobe className="text-3xl text-[#1E4E9A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Regional Impact
              </h3>
              <p className="text-gray-600 text-sm">
                Serving students from Kenya, Uganda, Ethiopia, Sudan, Tanzania,
                Burundi, Malawi, Zambia, and Botswana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Disciplines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spiritual Disciplines & Formation
            </h2>
            <p className="text-xl text-blue-100">
              Developing mature disciples through spiritual practices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Prayer",
              "Praise & Worship",
              "Fasting",
              "Meditation",
              "Bible Study",
              "Confession",
              "Fellowship",
              "Service",
            ].map((discipline, index) => (
              <div
                key={index}
                className="bg-[#E02020] rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <p className="font-bold text-lg text-white">{discipline}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-center leading-relaxed text-gray-900">
              Through these spiritual disciplines, believers express trust in
              God, draw close to Him, meditate on Christ's passion, and
              discipline themselves to submit to the Holy Spirit's control.
              Students unite regularly for worship, fellowship, teaching,
              evangelism, and proclamation.
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Outreach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Practical Ministry Experience
            </h2>
            <p className="text-xl text-gray-600">
              Learning through hands-on evangelism and outreach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaHandsHelping className="mr-3 text-[#E02020]" />
                Eagles' Wings Gospel Team
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formed in 1999, this team works with local Church of God
                congregations to proclaim the Gospel in open-air settings.
                Crusades last 3 to 7 days and are held in marketplaces, town
                centers, roadside centers, slums, and villages.
              </p>
              <p className="text-gray-600 italic">
                Results: Thousands of salvations and hundreds of churches
                strengthened
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaGlobe className="mr-3 text-[#1E4E9A]" />
                Eagles' Wings Studio
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ministry through recorded music and video production. "A Higher
                Place" TV program is a half-hour teaching/preaching program
                broadcast nationwide on Kenyan television several times each
                week since November 2015.
              </p>
              <p className="text-gray-600 italic">
                Reaching thousands through media ministry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Admission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-gray-600">
                Join a community of learners committed to spiritual growth and
                practical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaMapMarkerAlt className="text-3xl text-[#1E4E9A] mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-sm text-gray-600">Pioneer Estate, Eldoret</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <FaPhone className="text-3xl text-[#E02020] mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-sm text-gray-600">+254 759 120 222</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaEnvelope className="text-3xl text-[#1E4E9A] mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-600">info@ntcogk.org</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BibleCollegePage;
