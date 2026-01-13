"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground"
                        >
                            Last updated: January 2026
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="max-w-3xl prose prose-neutral dark:prose-invert">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
                                <p className="text-muted-foreground">
                                    Mavtar Printing Press Pvt. Ltd. ("we", "our", "us") is committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                    when you visit our website or use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                                <p className="text-muted-foreground mb-3">
                                    We may collect information about you in a variety of ways, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and mailing address when you submit forms or place orders.</li>
                                    <li><strong className="text-foreground">Order Information:</strong> Details about your printing requirements, design files, and order history.</li>
                                    <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including pages viewed and time spent.</li>
                                    <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence when you contact us.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                                <p className="text-muted-foreground mb-3">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Process and fulfill your printing orders</li>
                                    <li>Send you quotes, invoices, and order updates</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Improve our website and services</li>
                                    <li>Send promotional communications (with your consent)</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
                                <p className="text-muted-foreground">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties
                                    except as described below:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                                    <li><strong className="text-foreground">Service Providers:</strong> Trusted third parties who assist in operating our business (payment processors, delivery partners).</li>
                                    <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights.</li>
                                    <li><strong className="text-foreground">Business Transfers:</strong> In connection with any merger or acquisition.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
                                <p className="text-muted-foreground">
                                    We implement appropriate technical and organizational measures to protect your personal
                                    information against unauthorized access, alteration, disclosure, or destruction. However,
                                    no method of transmission over the Internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                                <p className="text-muted-foreground mb-3">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Correct inaccurate personal data</li>
                                    <li>Request deletion of your personal data</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
                                <p className="text-muted-foreground">
                                    Our website may use cookies to enhance your browsing experience. You can choose to
                                    disable cookies through your browser settings, though this may affect some functionality.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes
                                    by posting the new policy on this page and updating the "Last updated" date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                                <p className="text-muted-foreground">
                                    If you have questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="mt-3 text-muted-foreground">
                                    <p>Mavtar Printing Press Pvt. Ltd.</p>
                                    <p>Email: <Link href="mailto:info@mavtarprints.com" className="text-primary hover:underline">info@mavtarprints.com</Link></p>
                                    <p>Phone: +91 98765 43210</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
