"use client";
import React, { useState } from "react";
import {
  FaFileUpload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChurch,
  FaMapMarkerAlt,
  FaFileAlt,
  FaCloudUploadAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const SubmissionsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    branch: "",
    region: "",
    submissionType: "",
    subject: "",
    description: "",
    urgency: "normal",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submissionTypes = [
    "Monthly Report",
    "Financial Statement",
    "Event Proposal",
    "Ministry Update",
    "Building/Property Documents",
    "Membership Records",
    "Pastoral Credentials",
    "Other Documents",
  ];

  const urgencyLevels = [
    { value: "low", label: "Low Priority", color: "text-green-600" },
    { value: "normal", label: "Normal", color: "text-blue-600" },
    { value: "high", label: "High Priority", color: "text-orange-600" },
    { value: "urgent", label: "Urgent", color: "text-red-600" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          branch: "",
          region: "",
          submissionType: "",
          subject: "",
          description: "",
          urgency: "normal",
        });
        setUploadedFiles([]);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero6.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-4 backdrop-blur-sm shadow-lg">
            <FaFileUpload className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Document Submissions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Submit reports, documents, and updates to the National Office
          </p>
        </div>
      </section>

      {/* Information Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-100 border-b-4 border-[#1E4E9A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#1E4E9A] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">ℹ</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Important Information
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>
                  • All submissions are reviewed by the National Office within
                  3-5 business days
                </li>
                <li>• Ensure all required fields are completed accurately</li>
                <li>
                  • Supported file formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
                  (Max 10MB per file)
                </li>
                <li>
                  • For urgent matters, please mark your submission as "Urgent"
                  and follow up via phone
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUser className="mr-3 text-[#1E4E9A]" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    placeholder="Rev. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Position/Title *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    placeholder="Senior Pastor, Youth Leader, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                      placeholder="pastor@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Church Information */}
            <div className="mb-8 pb-8 border-b-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaChurch className="mr-3 text-[#1E4E9A]" />
                Church Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Branch/Church Name *
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    placeholder="NTCG Nairobi Central"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Region *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select Region</option>
                      <option value="nairobi">Nairobi Region</option>
                      <option value="central">Central Region</option>
                      <option value="coast">Coast Region</option>
                      <option value="eastern">Eastern Region</option>
                      <option value="nyanza">Nyanza Region</option>
                      <option value="rift-valley">Rift Valley Region</option>
                      <option value="western">Western Region</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Details */}
            <div className="mb-8 pb-8 border-b-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaFileAlt className="mr-3 text-[#1E4E9A]" />
                Submission Details
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Submission Type *
                    </label>
                    <select
                      name="submissionType"
                      value={formData.submissionType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    >
                      <option value="">Select Type</option>
                      {submissionTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Priority Level *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    >
                      {urgencyLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors"
                    placeholder="Brief subject of your submission"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description/Notes *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none transition-colors resize-none"
                    placeholder="Provide detailed information about your submission..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCloudUploadAlt className="mr-3 text-[#1E4E9A]" />
                Upload Documents
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#1E4E9A] transition-colors">
                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <FaCloudUploadAlt className="text-6xl text-gray-400 mb-4" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10MB per file)
                  </p>
                </label>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold text-gray-700">
                    Uploaded Files ({uploadedFiles.length})
                  </h3>
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <FaFileAlt className="text-[#1E4E9A] text-xl" />
                        <div>
                          <p className="font-medium text-gray-800">
                            {file.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              {!submitSuccess ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center space-x-3 bg-[#E02020] hover:bg-[#B81C1C] text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Submit Documents</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="flex items-center space-x-3 bg-green-500 text-white font-bold py-4 px-12 rounded-lg">
                  <FaCheckCircle className="text-2xl" />
                  <span>Submission Successful!</span>
                </div>
              )}
            </div>
          </form>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaPhone className="text-3xl text-[#1E4E9A] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+254 759 120 222</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaEnvelope className="text-3xl text-[#E02020] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">submissions@ntcgkenya.org</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionsPage;
