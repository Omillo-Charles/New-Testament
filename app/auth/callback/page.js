"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AuthCallbackContent() {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add a small delay to ensure the component is mounted
        const timer = setTimeout(() => {
            const token = searchParams.get('token');
            const user = searchParams.get('user');
            const error = searchParams.get('error');

            if (error) {
                // Handle error
                console.error('Auth callback error:', error);
                window.location.href = '/auth/signin?error=' + error;
                return;
            }

            if (token && user) {
                // Store token and user data
                localStorage.setItem('authToken', token);
                localStorage.setItem('user', user);

                // Redirect to home page
                window.location.href = '/';
            } else {
                // No token or user data, redirect to signin
                window.location.href = '/auth/signin';
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto"></div>
                    <h2 className="mt-6 text-2xl font-bold text-gray-900">
                        Completing sign in...
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please wait while we finish setting up your account.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function AuthCallback() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto"></div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            Loading...
                        </h2>
                    </div>
                </div>
            </div>
        }>
            <AuthCallbackContent />
        </Suspense>
    );
}