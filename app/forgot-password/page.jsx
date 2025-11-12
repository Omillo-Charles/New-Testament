"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative rounded-lg shadow-md bg-white p-1">
              <Image
                src="/mainLogo.png"
                alt="NTCG Kenya Logo"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#E02020]">NTCG</span>
              <span className="text-sm text-[#1E4E9A] block leading-tight font-medium">
                Kenya
              </span>
            </div>
          </Link>
        </div>

        {!isSubmitted ? (
          <>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </>
        ) : (
          <>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
            </div>
            <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
              Check your email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              We've sent a password reset link to{" "}
              <span className="font-medium text-gray-900">{email}</span>
            </p>
          </>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#E02020] hover:bg-[#B81C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E02020] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Didn't receive the email?</span>
                  <br />
                  Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#1E4E9A] hover:text-[#163E7A] font-medium underline"
                  >
                    try another email address
                  </button>
                  .
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  The link will expire in 1 hour for security reasons.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Remember your password?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/login"
                className="w-full flex justify-center items-center py-3 px-4 border-2 border-[#1E4E9A] rounded-lg shadow-sm text-sm font-semibold text-[#1E4E9A] bg-white hover:bg-[#1E4E9A] hover:text-white transition-all duration-200"
              >
                <FaArrowLeft className="mr-2" />
                Back to sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-[#E02020] hover:text-[#B81C1C] transition-colors"
            >
              Create one now
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-medium text-[#1E4E9A] hover:text-[#163E7A] transition-colors"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              className="w-5 h-5 text-[#1E4E9A] mr-2"
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
            Security Tips
          </h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-start">
              <span className="text-[#E02020] mr-2">•</span>
              <span>Never share your password reset link with anyone</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#E02020] mr-2">•</span>
              <span>NTCG Kenya will never ask for your password via email</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#E02020] mr-2">•</span>
              <span>
                If you didn't request this reset, please contact us immediately
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
