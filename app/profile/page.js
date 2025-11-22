"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");

      if (!accessToken || !userData) {
        router.push("/login");
        return;
      }

      try {
        // Fetch fresh user data from API
        const authProvider = localStorage.getItem("authProvider");
        const apiUrl = authProvider === "social" 
          ? process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth"
          : process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth";

        const response = await fetch(`${apiUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            // Update localStorage with fresh data
            localStorage.setItem("user", JSON.stringify(data.data));
            setUser(data.data);
          } else {
            // Fallback to cached data
            setUser(JSON.parse(userData));
          }
        } else {
          // Fallback to cached data
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Fallback to cached data
        try {
          setUser(JSON.parse(userData));
        } catch (parseError) {
          console.error("Error parsing user data:", parseError);
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleResendOTP = async () => {
    setSendingOTP(true);
    try {
      const authProvider = localStorage.getItem("authProvider");
      const apiUrl = authProvider === "social" 
        ? process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth"
        : process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth";

      const response = await fetch(`${apiUrl}/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setOtpSent(true);
        // Store email for verification page
        localStorage.setItem("verificationEmail", user.email);
        alert("Verification code sent! Please check your email and then go to the verification page.");
        // Redirect to verify email page after 2 seconds
        setTimeout(() => {
          router.push("/verify-email");
        }, 2000);
      } else {
        alert(data.message || "Failed to send verification code");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send verification code. Please try again.");
    } finally {
      setSendingOTP(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verification Warning Banner */}
        {!user.isEmailVerified && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Email Verification Required</h3>
                <p className="text-yellow-700 mb-4">
                  Your email address is not verified. Please verify your email to access all features and ensure account security.
                </p>
                <button
                  onClick={handleResendOTP}
                  disabled={sendingOTP || otpSent}
                  className="inline-flex items-center px-6 py-3 bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sendingOTP ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Code...
                    </>
                  ) : otpSent ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Code Sent! Redirecting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Verification Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">View and manage your account information</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-[#1E4E9A] border-4 border-[#E02020] flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
              {user.firstName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900">
                {user.firstName && user.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user.fullName || user.email}
              </h2>
              <p className="text-gray-600 mt-1">{user.email}</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                {user.role && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1E4E9A] text-white">
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                )}
                {user.isEmailVerified && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/profile/settings"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#1E4E9A] bg-opacity-10 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-[#1E4E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              Personal Information
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Display Name</label>
                <p className="text-base text-gray-900">{user.firstName || user.fullName || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email Address</label>
                <p className="text-base text-gray-900">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Church Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#E02020] bg-opacity-10 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              Church Information
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Home Church</label>
                <p className="text-base text-gray-900">{user.church || "Not specified"}</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Member Since</label>
                <p className="text-base text-gray-900">
                  {user.createdAt 
                    ? new Date(user.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#1E4E9A] bg-opacity-10 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-[#1E4E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              Account Information
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Account Status</label>
                <p className="text-base">
                  {user.isActive !== false ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email Verification</label>
                {user.isEmailVerified ? (
                  <span className="text-green-600 font-medium inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-yellow-600 font-medium">Not verified</span>
                    </div>
                    <button
                      onClick={handleResendOTP}
                      disabled={sendingOTP || otpSent}
                      className="inline-flex items-center px-4 py-2 bg-[#1E4E9A] hover:bg-[#163E7A] text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sendingOTP ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : otpSent ? (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Code Sent!
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Verify Email
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500">Click to receive a verification code via email</p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Last Login</label>
                <p className="text-base text-gray-900">
                  {user.lastLogin 
                    ? new Date(user.lastLogin).toLocaleString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#E02020] bg-opacity-10 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                href="/profile/settings"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-gray-900 font-medium">Edit Profile</span>
              </Link>
              <Link
                href="/portals/giving"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-900 font-medium">Support Ministry</span>
              </Link>
              <Link
                href="/resources/events-calendar"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-900 font-medium">View Events</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
