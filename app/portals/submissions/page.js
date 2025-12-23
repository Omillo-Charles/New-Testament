"use client";
import React from "react";
import {
  FaFileUpload,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const SubmissionsPage = () => {
  const handleRedirect = () => {
    window.open("https://submissions.ntcogk.org", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[108px] lg:pt-32">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero6.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-4 backdrop-blur-sm shadow-lg">
            <FaFileUpload className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Document Submissions Portal
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Submit reports, documents, and updates securely to the National Office
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Redirect Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#1E4E9A] rounded-full mb-6 shadow-lg">
              <FaExternalLinkAlt className="text-4xl text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access Submissions Portal
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our document submission system has been moved to a dedicated secure portal for better performance and security.
            </p>

            <button
              onClick={handleRedirect}
              className="inline-flex items-center space-x-3 bg-[#E02020] hover:bg-[#B81C1C] text-white font-bold py-4 px-8 md:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <span>Go to Submissions Portal</span>
              <FaExternalLinkAlt className="text-xl" />
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Opens in a new tab: submissions.ntcogk.org
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaShieldAlt className="text-3xl text-[#1E4E9A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">
                Your documents are encrypted and protected with enterprise-grade security
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FaBolt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600">
                Quick submission process with instant confirmation and tracking
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <FaCheckCircle className="text-3xl text-[#E02020]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy</h3>
              <p className="text-gray-600">
                Simple 3-step process to submit your documents and files
              </p>
            </div>
          </div>

          {/* Information Banner */}
          <div className="bg-blue-50 border-l-4 border-[#1E4E9A] p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#1E4E9A] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">ℹ</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What You Can Submit
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Monthly and Financial Reports</li>
                  <li>• Event Proposals and Ministry Updates</li>
                  <li>• Building/Property Documents</li>
                  <li>• Membership Records and Pastoral Credentials</li>
                  <li>• Other Official Church Documents</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Supported formats:</strong> PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10MB per file)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Assistance?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            If you encounter any issues or have questions about your submission,
            please contact the National Office.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPhone className="text-3xl text-[#1E4E9A] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <a href="tel:+254759120222" className="text-gray-600 hover:text-[#1E4E9A] transition-colors">
                +254 759 120 222
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaEnvelope className="text-3xl text-[#E02020] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <a href="mailto:info@ntcogk.org" className="text-gray-600 hover:text-[#E02020] transition-colors">
                info@ntcogk.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionsPage;
