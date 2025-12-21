import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// In a real app, you'd use a database. This should match your other auth routes
// Replace this with your actual database implementation
let users = [];

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
            console.error('Google OAuth error:', error);
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/signin?error=oauth_error`);
        }

        if (!code) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/signin?error=no_code`);
        }

        // Exchange code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: process.env.GOOGLE_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/google/callback`,
            }),
        });

        const tokens = await tokenResponse.json();

        if (!tokenResponse.ok) {
            console.error('Token exchange error:', tokens);
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/signin?error=token_exchange_failed`);
        }

        // Get user info from Google
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
            },
        });

        const googleUser = await userResponse.json();

        if (!userResponse.ok) {
            console.error('User info error:', googleUser);
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/signin?error=user_info_failed`);
        }

        // Check if user exists
        let user = users.find(u => u.email === googleUser.email);

        if (!user) {
            // Create new user
            user = {
                id: Date.now().toString(),
                fullName: googleUser.name,
                email: googleUser.email,
                googleId: googleUser.id,
                picture: googleUser.picture,
                createdAt: new Date().toISOString(),
                provider: 'google'
            };
            users.push(user);
            console.log('New Google user registered:', {
                email: user.email,
                fullName: user.fullName
            });
        } else {
            console.log('Existing Google user signed in:', {
                email: user.email,
                fullName: user.fullName
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                fullName: user.fullName
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        // Redirect to frontend with token
        const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/callback`);
        redirectUrl.searchParams.set('token', token);
        redirectUrl.searchParams.set('user', JSON.stringify({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            picture: user.picture
        }));

        return NextResponse.redirect(redirectUrl.toString());

    } catch (error) {
        console.error('Google OAuth callback error:', error);
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/signin?error=callback_error`);
    }
}