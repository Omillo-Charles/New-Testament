import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // Google OAuth configuration
        const googleClientId = process.env.GOOGLE_CLIENT_ID;
        const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/google/callback`;

        if (!googleClientId) {
            return NextResponse.json(
                { error: 'Google OAuth not configured' },
                { status: 500 }
            );
        }

        // Google OAuth URL
        const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
        googleAuthUrl.searchParams.set('client_id', googleClientId);
        googleAuthUrl.searchParams.set('redirect_uri', redirectUri);
        googleAuthUrl.searchParams.set('response_type', 'code');
        googleAuthUrl.searchParams.set('scope', 'openid email profile');
        googleAuthUrl.searchParams.set('access_type', 'offline');
        googleAuthUrl.searchParams.set('prompt', 'consent');

        // Redirect to Google OAuth
        return NextResponse.redirect(googleAuthUrl.toString());

    } catch (error) {
        console.error('Google OAuth initiation error:', error);
        return NextResponse.json(
            { error: 'Failed to initiate Google OAuth' },
            { status: 500 }
        );
    }
}