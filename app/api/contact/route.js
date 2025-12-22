import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message, phone, subject } = body;

        // Basic validation
        if (!name || !email || !message || !subject) {
            return NextResponse.json(
                { error: 'Name, email, subject, and message are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'ntcogk@gmail.com',
            subject: `Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1E4E9A; border-bottom: 2px solid #E02020; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #E02020; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                        <h3 style="color: #1E4E9A; margin-top: 0;">Message</h3>
                        <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #E02020; color: white; border-radius: 8px; text-align: center;">
                        <p style="margin: 0;">
                            <strong>Reply to:</strong> ${email}
                        </p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        This email was sent from the NTCoG Kenya website contact form.
                    </p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Contact form submission sent to ntcogk@gmail.com:', {
            name,
            email,
            subject,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json(
            { message: 'Contact form submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        // Check if it's an email-related error
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            return NextResponse.json(
                { error: 'Email service configuration error. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}