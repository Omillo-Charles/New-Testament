import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Validation
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find user
        await connectDB();
        const user = await User.findByEmail(email);
        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check password (only for email/password users)
        if (user.provider === 'email') {
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return NextResponse.json(
                    { error: 'Invalid email or password' },
                    { status: 401 }
                );
            }
        } else {
            return NextResponse.json(
                { error: 'Please sign in with Google for this account' },
                { status: 401 }
            );
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
                fullName: user.fullName
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        return NextResponse.json(
            {
                message: 'Signed in successfully',
                token,
                user: {
                    id: user._id.toString(),
                    fullName: user.fullName,
                    email: user.email
                }
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Signin error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}