import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - New Testament Church of God Kenya",
  description:
    "Get in touch with NTCG Kenya. Find our locations, contact information, and connect with our church family across Kenya.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-[#1E4E9A] text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contactImages/contact1.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#1E4E9A]/80"></div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We would love to hear from you! Connect with our church family
            across Kenya.
          </p>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether you're seeking a church home, have questions about our
              faith, need prayer support, or want to get involved in ministry,
              the New Testament Church of God Kenya welcomes you with open arms.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-all duration-200 text-gray-900"
                    >
                      <option value="">Select a subject</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="salvation">Salvation & Baptism</option>
                      <option value="ministry">Ministry Opportunities</option>
                      <option value="counseling">Counseling</option>
                      <option value="church-planting">Church Planting</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent transition-all duration-200 resize-vertical min-h-[120px] text-gray-900 placeholder-gray-500"
                    placeholder="Please share your message, prayer request, or inquiry..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#E02020] to-[#1E4E9A] hover:from-[#B81C1C] hover:to-[#163E7A] text-white font-semibold py-4 px-12 sm:px-16 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* National Headquarters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              National Headquarters
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#E02020] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E02020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Physical Address
                      </p>
                      <p className="text-gray-600">
                        Kwarara Rd/Ndege Rd, Off Bugani Rd
                        <br />
                        Karen, Langata, Nairobi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#1E4E9A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Postal Address
                      </p>
                      <p className="text-gray-600">
                        P.O. Box 75, 00502 Karen
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E02020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+254 759 120 222</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#1E4E9A] mb-6">
                  Leadership
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    National Administrative Bishop
                  </h4>
                  <p className="text-[#E02020] font-medium text-lg">
                    Dr. David Gilbert Bwire
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Monday - Friday:</span>{" "}
                      Contact for specific hours
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> Contact for
                      specific hours
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> Worship
                      Services
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    For urgent pastoral care or emergencies, please call the
                    main phone line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps for National Headquarters */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Find Us on the Map
            </h3>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.7!3d-1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnMDAuMCJTIDM2wrA0MicwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="National Headquarters Location - Karen, Nairobi"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Kwarara Rd/Ndege Rd, Off Bugani Rd, Karen, Langata, Nairobi
            </p>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regional Offices
            </h2>
            <p className="text-lg text-gray-600">
              Six regions serving communities across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E02020]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                North Central Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Regional Bishop & National Secretary
              </p>
              <p className="text-[#E02020] font-medium mb-2">Samuel Wainaina</p>
              <p className="text-gray-600">Office Location: Gatanga Area</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1E4E9A]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nairobi Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Regional Bishop & National Treasurer
              </p>
              <p className="text-[#1E4E9A] font-medium mb-2">
                Dickson Tito Mwalili
              </p>
              <p className="text-gray-600">Office Location: Karen, Nairobi</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E02020]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coast Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Regional Bishop & National Education Coordinator
              </p>
              <p className="text-[#E02020] font-medium mb-2">
                Benea Alukwe Amakhungu
              </p>
              <p className="text-gray-600">Office Location: Rabai Area</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1E4E9A]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Western Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Regional Bishop & National Prayer Coordinator
              </p>
              <p className="text-[#1E4E9A] font-medium mb-2">Simon Ngure Ben</p>
              <p className="text-gray-600">Office Location: Busia Area</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E02020]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                North Western Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">Regional Bishop</p>
              <p className="text-[#E02020] font-medium mb-2">
                Protus Pamba Orima
              </p>
              <p className="text-gray-600">Office Location: Busia Area</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1E4E9A]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nyanza Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Regional Bishop & National Convention Coordinator
              </p>
              <p className="text-[#1E4E9A] font-medium mb-2">
                Paul Obadha Ohuare
              </p>
              <p className="text-gray-600">Office Location: Molo Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Spiritual Needs
              </h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Salvation & Baptism</li>
                <li>• Prayer Requests</li>
                <li>• Biblical Counseling</li>
                <li>• Marriage & Family Support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1E4E9A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ministry Opportunities
              </h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Join a Ministry</li>
                <li>• Church Planting</li>
                <li>• Pastoral Training</li>
                <li>• Youth & Children's Ministry</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Support
              </h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Orphans & Vulnerable Children</li>
                <li>• HIV/AIDS Ministry</li>
                <li>• Widows Care</li>
                <li>• Youth Training Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#E02020] mb-4">
                    Sunday Worship Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join us for Spirit-filled worship, powerful preaching, and
                    fellowship with believers every Sunday.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Service Times: Contact your nearest branch for specific
                    service times
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    What to Expect:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Contemporary worship with African songs and dance
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Bible-based preaching and teaching</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Warm and welcoming community</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Prayer and ministry time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Children's and youth programs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#E02020]/10 rounded-lg p-6">
                  <p className="text-[#E02020] font-semibold">
                    First-Time Visitors: We're excited to meet you! Come as you
                    are and experience the love of Christ in action.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1E4E9A] mb-6">
                Find a Church Near You
              </h3>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 mb-6">
                  With over 224 churches across Kenya organized into 28+
                  districts, there's likely a New Testament Church of God
                  congregation near you!
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">
                    To find the church closest to your location:
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E02020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <span>
                        Contact the National Headquarters: +254 759 120 222
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#1E4E9A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <span>
                        Visit our Facebook page for a list of branches
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E02020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <span>
                        Reach out to the Regional Bishop serving your area
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Our Presence Across Kenya:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Nairobi and Central Kenya</div>
                    <div>• Western Kenya (including Busia)</div>
                    <div>• Coast Region (including Mombasa)</div>
                    <div>• Nyanza Region</div>
                    <div>• Rift Valley</div>
                    <div>• North Western Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Online */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Connect With Us Online
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay connected with our church family through social media and our
              website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://www.facebook.com/ntcogk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
            >
              <div className="w-16 h-16 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Follow Us on Facebook
              </h3>
              <p className="text-gray-600 mb-4">
                Get updates on services, events, inspirational messages, and
                community activities.
              </p>
              <p className="text-[#E02020] font-medium">
                New Testament Church of God Kenya
              </p>
            </a>

            <a
              href="https://www.ntcogk.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
            >
              <div className="w-16 h-16 bg-[#1E4E9A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Visit Our Website
              </h3>
              <p className="text-gray-600 mb-4">
                Explore our ministries, programs, and upcoming events online.
              </p>
              <p className="text-[#1E4E9A] font-medium">www.ntcogk.org</p>
            </a>
          </div>
        </div>
      </section>

      {/* Prayer & Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prayer & Support Hotline</h2>
          <p className="text-xl mb-8 opacity-90">
            Need Prayer? We're here for you.
          </p>

          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-2xl font-bold">+254 759 120 222</span>
              </div>
              <p className="text-lg opacity-90">
                Or send a message through our Facebook page
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Warm Welcome</h3>
              <p className="text-gray-600 text-sm">
                A friendly response from our team
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#1E4E9A] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Confidentiality
              </h3>
              <p className="text-gray-600 text-sm">
                Your information is kept private
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Biblical Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                Counsel rooted in Scripture
              </p>
            </div>
          </div>

          <p className="text-2xl font-bold text-[#E02020] mb-8">
            "Looking forward to hearing from you and connecting you with our
            church family!"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/portals"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Find a Branch
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Learn More About Us
            </Link>
          </div>

          <p className="text-lg font-bold text-[#1E4E9A] mt-8">
            To God be the Glory!
          </p>
        </div>
      </section>
    </div>
  );
}
