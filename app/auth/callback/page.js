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

      console.log('🔍 Callback received:', { 
        hasAccessToken: !!accessToken, 
        hasRefreshToken: !!refreshToken,
        provider,
        error 
      });

      if (error) {
        console.error('❌ OAuth error:', error);
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
        
        console.log('✅ Tokens stored in localStorage');

        // Fetch user profile
        try {
          console.log('🔍 Fetching user profile from:', process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL);
          
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || 'http://localhost:5503/api/auth'}/profile`,
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            }
          );

          console.log('📡 Profile API response status:', response.status);

          if (response.ok) {
            const data = await response.json();
            console.log('✅ Profile fetch successful:', data);
            
            if (data.success && data.data) {
              // Store user data
              localStorage.setItem("user", JSON.stringify(data.data));
              
              console.log('✅ User data stored:', data.data.email);
              
              // Trigger auth state change event
              window.dispatchEvent(new Event('authStateChanged'));
              console.log('📢 Auth state change event dispatched');
              
              // Use window.location for a hard redirect to ensure state updates
              setTimeout(() => {
                console.log('🏠 Redirecting to home...');
                window.location.href = "/";
              }, 500);
              return;
            }
          } else {
            const errorText = await response.text();
            console.error('❌ Profile fetch failed:', response.status, errorText);
          }
        } catch (err) {
          console.error("❌ Error fetching user profile:", err);
        }

        // Fallback redirect if profile fetch fails - still redirect with tokens
        console.log('🏠 Fallback redirect to home with stored tokens...');
        window.location.href = "/";
      } else {
        console.error('❌ No access token received');
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
