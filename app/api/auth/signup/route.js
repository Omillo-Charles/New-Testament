import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function POST(request) {
    try {
        const { fullName, email, password } = await request.json();

        // Validation
        if (!fullName || !email || !password) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters long' },
                { status: 400 }
            );
        }

        // Check if user already exists
        await connectDB();
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return NextResponse.json(
                { error: 'User with this email already exists' },
                { status: 400 }
            );
        }

        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            provider: 'email',
            lastLogin: new Date()
        });
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: newUser._id.toString(),
                email: newUser.email,
                fullName: newUser.fullName
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        return NextResponse.json(
            {
                message: 'Account created successfully',
                token,
                user: {
                    id: newUser._id.toString(),
                    fullName: newUser.fullName,
                    email: newUser.email
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}