/**
 * Contact Form API Route
 * Handles contact form submissions
 */

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: name, email, subject, message' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Generate a ticket ID
        const ticketId = `CONT-${Date.now().toString(36).toUpperCase()}`;

        // Log the submission (simulating email notification)
        console.log('='.repeat(50));
        console.log('NEW CONTACT FORM SUBMISSION');
        console.log('='.repeat(50));
        console.log(`Ticket ID: ${ticketId}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${body.phone || 'Not provided'}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log(`Submitted at: ${new Date().toISOString()}`);
        console.log('='.repeat(50));

        // Simulate notification to admin
        console.log('[ADMIN NOTIFICATION] New contact form received from:', email);

        // Simulate confirmation email to user
        console.log('[USER NOTIFICATION] Confirmation email sent to:', email);

        return NextResponse.json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you within 24 hours.',
            ticketId,
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}
