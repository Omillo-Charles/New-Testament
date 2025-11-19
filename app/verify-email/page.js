"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    const verificationEmail = localStorage.getItem("verificationEmail");
    if (!verificationEmail) {
      router.push("/register");
      return;
    }
    setEmail(verificationEmail);
  }, [router]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth"}/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp: otpCode,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Store tokens and user data
        localStorage.setItem("accessToken", data.data.accessToken);
        if (data.data.refreshToken) {
          localStorage.setItem("refreshToken", data.data.refreshToken);
        }
        localStorage.setItem("user", JSON.stringify(data.data.user));
        
        // Remove verification email from storage
        localStorage.removeItem("verificationEmail");
        
        // Trigger auth state change event
        window.dispatchEvent(new Event("authStateChanged"));
        
        setSuccess(true);
        
        // Redirect to home after 1.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setError(data.message || "Invalid verification code. Please try again.");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;

    setResending(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth"}/resend-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setCountdown(60);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      } else {
        setError(data.message || "Failed to resend code. Please try again.");
      }
    } catch (err) {
      console.error("Resend error:", err);
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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

        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Verify Your Email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a 6-digit code to
          <br />
          <span className="font-medium text-gray-900">{email}</span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-100">
          {/* Success Message */}
          {success && (
            <div className="mb-6 bg-green-500 text-white p-4 rounded-lg">
              <p className="font-semibold">✓ Email Verified!</p>
              <p className="text-sm">Redirecting you to the homepage...</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-500 text-white p-4 rounded-lg">
              <p className="font-semibold">⚠ Verification Failed</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-center mb-4">
                Enter Verification Code
              </label>
              <div className="flex justify-center space-x-2" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    disabled={loading || success}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent text-gray-900 disabled:bg-gray-100"
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading || success || otp.join("").length !== 6}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#E02020] hover:bg-[#B81C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E02020] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify Email"
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{" "}
              <button
                onClick={handleResend}
                disabled={countdown > 0 || resending}
                className="font-medium text-[#1E4E9A] hover:text-[#163E7A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resending ? "Sending..." : countdown > 0 ? `Resend in ${countdown}s` : "Resend Code"}
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/register"
            className="text-sm font-medium text-[#1E4E9A] hover:text-[#163E7A] transition-colors"
          >
            ← Back to Registration
          </Link>
        </div>
      </div>
    </div>
  );
}
