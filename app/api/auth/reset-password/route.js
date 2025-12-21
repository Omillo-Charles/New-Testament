import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// In a real app, you'd use a database. This should match your other auth routes
// Replace this with your actual database implementation
let users = [];

export async function POST(request) {
    try {
        const { token, password } = await request.json();

        // Validation
        if (!token || !password) {
            return NextResponse.json(
                { error: 'Token and password are required' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters long' },
                { status: 400 }
            );
        }

        // Verify reset token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        } catch (error) {
            return NextResponse.json(
                { error: 'Invalid or expired reset token' },
                { status: 400 }
            );
        }

        // Find user
        const userIndex = users.findIndex(u => u.id === decoded.userId);
        if (userIndex === -1) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Hash new password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Update user password
        users[userIndex].password = hashedPassword;
        users[userIndex].updatedAt = new Date().toISOString();

        console.log('Password reset successful for user:', {
            email: users[userIndex].email,
            timestamp: users[userIndex].updatedAt
        });

        return NextResponse.json(
            { message: 'Password reset successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Reset password error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}