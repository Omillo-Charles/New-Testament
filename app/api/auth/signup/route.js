import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// In a real app, you'd use a database. For now, we'll use a simple in-memory store
// Replace this with your actual database implementation
let users = [];

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
        const existingUser = users.find(user => user.email === email);
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
        const newUser = {
            id: Date.now().toString(),
            fullName,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            provider: 'email'
        };

        users.push(newUser);

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: newUser.id,
                email: newUser.email,
                fullName: newUser.fullName
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        console.log('New user registered:', {
            email: newUser.email,
            fullName: newUser.fullName,
            timestamp: newUser.createdAt
        });

        return NextResponse.json(
            {
                message: 'Account created successfully',
                token,
                user: {
                    id: newUser.id,
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