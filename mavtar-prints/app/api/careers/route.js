/**
 * Career Application API Route
 * Handles job application submissions
 */

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, phone, position, experience, message } = body;

        if (!name || !email || !position) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: name, email, position' },
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

        // Generate an application ID
        const applicationId = `APP-${Date.now().toString(36).toUpperCase()}`;

        // Log the submission (simulating email notification)
        console.log('='.repeat(50));
        console.log('NEW JOB APPLICATION');
        console.log('='.repeat(50));
        console.log(`Application ID: ${applicationId}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone || 'Not provided'}`);
        console.log(`Position: ${position}`);
        console.log(`Experience: ${experience || 'Not specified'}`);
        console.log(`Cover Letter/Message: ${message || 'Not provided'}`);
        console.log(`Resume URL: ${body.resumeUrl || 'Not uploaded'}`);
        console.log(`Submitted at: ${new Date().toISOString()}`);
        console.log('='.repeat(50));

        // Simulate notification to HR
        console.log('[HR NOTIFICATION] New job application received for:', position);
        console.log('[HR NOTIFICATION] Applicant:', name, '|', email);

        // Simulate confirmation email to applicant
        console.log('[APPLICANT NOTIFICATION] Application confirmation sent to:', email);
        console.log('[APPLICANT NOTIFICATION] Application ID:', applicationId);

        return NextResponse.json({
            success: true,
            message: 'Your application has been submitted successfully! We will review it and get back to you.',
            applicationId,
        });

    } catch (error) {
        console.error('Career application error:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred while processing your application' },
            { status: 500 }
        );
    }
}
