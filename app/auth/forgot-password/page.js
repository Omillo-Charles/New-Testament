"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(true);
            } else {
                setError(result.error || 'Failed to send reset email');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-[80vh] sm:min-h-screen bg-gray-50 flex flex-col justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8 pt-32">
                <div className="mx-auto w-full max-w-sm sm:max-w-md">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">Check Your Email</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            We've sent a password reset link to {email}
                        </p>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 mx-auto w-full max-w-sm sm:max-w-md">
                    <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:py-8 sm:px-10">
                        <div className="text-center space-y-4">
                            <p className="text-sm text-gray-600">
                                Didn't receive the email? Check your spam folder or try again.
                            </p>

                            <button
                                onClick={() => {
                                    setSuccess(false);
                                    setEmail("");
                                }}
                                className="text-sm font-medium text-[#1E4E9A] hover:text-[#0F2A5A]"
                            >
                                Try again
                            </button>

                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    href="/auth/signin"
                                    className="text-sm font-medium text-[#1E4E9A] hover:text-[#0F2A5A]"
                                >
                                    Back to sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] sm:min-h-screen bg-gray-50 flex flex-col justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8 pt-32">
            <div className="mx-auto w-full max-w-sm sm:max-w-md">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Forgot Password</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter your email address and we'll send you a link to reset your password
                    </p>
                </div>
            </div>

            <div className="mt-6 sm:mt-8 mx-auto w-full max-w-sm sm:max-w-md">
                <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:py-8 sm:px-10">
                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#1E4E9A] focus:border-[#1E4E9A] disabled:bg-gray-100"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E02020] hover:bg-[#B81C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E02020] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Remember your password?{' '}
                            <Link href="/auth/signin" className="font-medium text-[#1E4E9A] hover:text-[#0F2A5A]">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}