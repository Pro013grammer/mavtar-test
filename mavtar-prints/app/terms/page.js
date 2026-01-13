"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function TermsPage() {
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
                            Terms and Conditions
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
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Agreement to Terms</h2>
                                <p className="text-muted-foreground">
                                    By accessing our website or using our services, you agree to be bound by these Terms and
                                    Conditions. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Services</h2>
                                <p className="text-muted-foreground">
                                    Mavtar Printing Press provides commercial and custom printing services including but not
                                    limited to visiting cards, wedding invitations, marketing materials, and bulk printing.
                                    All services are subject to availability and the terms outlined herein.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Order Placement & Acceptance</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>All orders are subject to acceptance by Mavtar Printing Press.</li>
                                    <li>We reserve the right to refuse any order for any reason.</li>
                                    <li>Orders are confirmed only after receipt of required payment/advance.</li>
                                    <li>Quoted prices are valid for 15 days unless otherwise specified.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Design Files & Artwork</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Customers are responsible for providing print-ready artwork in acceptable formats.</li>
                                    <li>Files should be in CMYK color mode at 300 DPI minimum resolution.</li>
                                    <li>We are not responsible for color variations between screen display and printed output.</li>
                                    <li>Customers must approve digital proofs before printing begins.</li>
                                    <li>Changes requested after proof approval may incur additional charges.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
                                <p className="text-muted-foreground">
                                    Customers warrant that they own or have rights to use all content provided for printing.
                                    Mavtar Printing Press is not liable for any copyright infringement arising from printing
                                    customer-provided designs. We reserve the right to refuse printing copyrighted material
                                    without proper authorization.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Payment terms vary based on order size and customer relationship.</li>
                                    <li>For new customers, 50% advance payment is typically required.</li>
                                    <li>Balance payment is due before or upon delivery.</li>
                                    <li>Late payments may incur interest charges.</li>
                                    <li>We accept cash, bank transfer, UPI, and major cards.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Delivery & Turnaround</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Turnaround times are estimates and not guarantees.</li>
                                    <li>Delivery timelines begin after artwork approval and payment confirmation.</li>
                                    <li>We are not liable for delays due to external factors beyond our control.</li>
                                    <li>Rush orders are available at additional cost, subject to availability.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Quality & Defects</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>We strive for the highest quality in all prints.</li>
                                    <li>Minor variations in color (+/- 10%) are considered acceptable in commercial printing.</li>
                                    <li>Claims for defects must be made within 48 hours of delivery with evidence.</li>
                                    <li>Our liability is limited to reprinting defective items or refunding the order value.</li>
                                    <li>We are not liable for errors in customer-provided content or approved proofs.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Cancellation & Refunds</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Orders may be cancelled before production begins, subject to cancellation fee.</li>
                                    <li>No cancellations are possible once printing has commenced.</li>
                                    <li>Refunds for cancelled orders will be processed within 7-10 business days.</li>
                                    <li>Custom design work is non-refundable once delivered.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                                <p className="text-muted-foreground">
                                    Mavtar Printing Press shall not be liable for any indirect, incidental, special, or
                                    consequential damages arising from the use of our services. Our total liability shall
                                    not exceed the amount paid for the specific order in question.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
                                <p className="text-muted-foreground">
                                    We reserve the right to modify these terms at any time. Changes will be effective
                                    immediately upon posting to this page. Continued use of our services constitutes
                                    acceptance of modified terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
                                <p className="text-muted-foreground">
                                    These Terms shall be governed by and construed in accordance with the laws of India.
                                    Any disputes shall be subject to the exclusive jurisdiction of courts in Surat, Gujarat.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                                <p className="text-muted-foreground">
                                    For questions about these Terms, please contact us:
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
