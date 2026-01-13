/**
 * Quote Request API Route
 * Handles quote form submissions
 */

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, phone, service, quantity } = body;

        if (!name || !email || !service || !quantity) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: name, email, service, quantity' },
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

        // Generate a quote request ID
        const quoteId = `QR-${Date.now().toString(36).toUpperCase()}`;

        // Log the submission (simulating email notification)
        console.log('='.repeat(50));
        console.log('NEW QUOTE REQUEST');
        console.log('='.repeat(50));
        console.log(`Quote ID: ${quoteId}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone || 'Not provided'}`);
        console.log(`Company: ${body.company || 'Not provided'}`);
        console.log(`Service Type: ${service}`);
        console.log(`Paper Type: ${body.paperType || 'Not specified'}`);
        console.log(`Finish: ${body.finish || 'Not specified'}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Size/Dimensions: ${body.size || 'Not specified'}`);
        console.log(`Additional Notes: ${body.notes || 'None'}`);
        console.log(`Submitted at: ${new Date().toISOString()}`);
        console.log('='.repeat(50));

        // Simulate notification to admin
        console.log('[ADMIN NOTIFICATION] New quote request received from:', email);
        console.log('[ADMIN NOTIFICATION] Service:', service, '| Quantity:', quantity);

        // Simulate confirmation email to user
        console.log('[USER NOTIFICATION] Quote confirmation sent to:', email);
        console.log('[USER NOTIFICATION] Quote ID:', quoteId);

        return NextResponse.json({
            success: true,
            message: 'Your quote request has been submitted successfully!',
            quoteId,
            estimatedResponse: '24 hours',
        });

    } catch (error) {
        console.error('Quote form error:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}
