import React from "react";
import { FaFileAlt, FaGavel, FaShieldAlt } from "react-icons/fa";

const LegalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero4.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaGavel className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Legal Documents
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Official church documents, policies, and legal information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                <FaFileAlt className="text-5xl text-[#1E4E9A]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Documents in Progress
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E4E9A] to-[#E02020] rounded-full mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6 text-center">
                We are currently compiling a comprehensive collection of legal documents, 
                policies, and official church guidelines for your reference.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-[#1E4E9A] p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#1E4E9A] mb-3 flex items-center">
                  <FaShieldAlt className="mr-2" />
                  What We're Preparing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Church Constitution and Bylaws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Ministry Policies and Procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Code of Conduct and Ethics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Child Protection Policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Financial Guidelines and Accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E02020] mr-2">•</span>
                    <span>Membership Requirements and Responsibilities</span>
                  </li>
                </ul>
              </div>

              <p className="text-center text-gray-600 mb-6">
                These documents are being carefully reviewed and prepared to ensure 
                accuracy and compliance with all relevant regulations. We appreciate 
                your patience as we work to make these resources available to you.
              </p>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Need Immediate Access to Legal Documents?
                </p>
                <p className="text-gray-600 mb-6">
                  For urgent inquiries or to request specific documents, please contact 
                  the National Office directly.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact National Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-lg text-gray-600">
            We will notify all members once the legal documents section is complete 
            and available for download. Thank you for your understanding.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalsPage;
