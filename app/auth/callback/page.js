"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const accessToken = searchParams.get("accessToken");
      const refreshToken = searchParams.get("refreshToken");
      const provider = searchParams.get("provider");
      const error = searchParams.get("error");

      if (error) {
        // Redirect to login with error
        router.push(`/login?error=${error}`);
        return;
      }

      if (accessToken) {
        // Store tokens
        localStorage.setItem("accessToken", accessToken);
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        }
        localStorage.setItem("authProvider", provider || "social");

        // Fetch user profile
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || 'http://localhost:5503/api/auth'}/profile`,
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            if (data.success && data.data) {
              // Store user data
              localStorage.setItem("user", JSON.stringify(data.data));
              
              // Trigger auth state change event
              window.dispatchEvent(new Event('authStateChanged'));
            }
          }
        } catch (err) {
          console.error("Error fetching user profile:", err);
        }

        // Redirect to home
        router.push("/");
      } else {
        // No tokens, redirect to login
        router.push("/login?error=authentication_failed");
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
