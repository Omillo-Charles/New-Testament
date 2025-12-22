import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function POST(request) {
    try {
        const { email } = await request.json();

        // Validation
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Find user
        await connectDB();
        const user = await User.findByEmail(email);
        if (!user) {
            // For security, don't reveal if email exists or not
            return NextResponse.json(
                { message: 'If an account with that email exists, we have sent a password reset link.' },
                { status: 200 }
            );
        }

        // Generate reset token (expires in 1 hour)
        const resetToken = jwt.sign(
            { userId: user._id.toString(), email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' }
        );

        // Create email transporter
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Reset link (in production, this would be your actual domain)
        const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/reset-password?token=${resetToken}`;

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset - NTCoG Kenya',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1E4E9A; border-bottom: 2px solid #E02020; padding-bottom: 10px;">
                        Password Reset Request
                    </h2>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p>Hello ${user.fullName},</p>
                        <p>We received a request to reset your password for your NTCoG Kenya account.</p>
                        <p>Click the button below to reset your password:</p>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${resetLink}" 
                               style="background-color: #E02020; color: white; padding: 12px 30px; 
                                      text-decoration: none; border-radius: 5px; font-weight: bold;">
                                Reset Password
                            </a>
                        </div>
                        
                        <p style="color: #666; font-size: 14px;">
                            This link will expire in 1 hour for security reasons.
                        </p>
                        
                        <p style="color: #666; font-size: 14px;">
                            If you didn't request this password reset, please ignore this email.
                        </p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #1E4E9A; color: white; border-radius: 8px; text-align: center;">
                        <p style="margin: 0;">
                            <strong>New Testament Church of God Kenya</strong>
                        </p>
                        <p style="margin: 5px 0 0 0; font-size: 14px;">
                            To God be the Glory!
                        </p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        This email was sent from the NTCoG Kenya website.
                    </p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'If an account with that email exists, we have sent a password reset link.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Forgot password error:', error);

        // Check if it's an email-related error
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            return NextResponse.json(
                { error: 'Email service configuration error. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send reset email. Please try again later.' },
            { status: 500 }
        );
    }
}