"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input as HeroInput, Textarea as HeroTextarea, Button as HeroButton } from "@heroui/react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: ["Mavtar Printing Press", "Industrial Area, Ring Road", "Surat, Gujarat 395003"],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@mavtarprints.com", "orders@mavtarprints.com"],
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday Closed"],
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
    const [submitMessage, setSubmitMessage] = useState("");
    const [ticketId, setTicketId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setSubmitMessage(data.message);
                setTicketId(data.ticketId);
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setSubmitStatus('error');
                setSubmitMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        // Clear any previous error when user starts typing
        if (submitStatus === 'error') {
            setSubmitStatus(null);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        >
                            Contact Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Have a question or need a quote? We'd love to hear from you.
                            Reach out and our team will respond as soon as possible.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-12 border-b border-border">
                <div className="site-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                    <info.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                                {info.details.map((detail) => (
                                    <p key={detail} className="text-sm text-muted-foreground">
                                        {detail}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-2xl p-6 md:p-8"
                        >
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                                >
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-green-700 dark:text-green-400 font-medium">{submitMessage}</p>
                                            {ticketId && (
                                                <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                                                    Reference ID: {ticketId}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                                >
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-red-700 dark:text-red-400">{submitMessage}</p>
                                    </div>
                                </motion.div>
                            )}

                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Fill out the form below and we'll get back to you shortly.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <HeroInput
                                        label="Your Name"
                                        placeholder="John Doe"
                                        variant="bordered"
                                        value={formData.name}
                                        onChange={handleChange("name")}
                                        isRequired
                                    />
                                    <HeroInput
                                        label="Email Address"
                                        type="email"
                                        placeholder="john@example.com"
                                        variant="bordered"
                                        value={formData.email}
                                        onChange={handleChange("email")}
                                        isRequired
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <HeroInput
                                        label="Phone Number"
                                        placeholder="+91 98765 43210"
                                        variant="bordered"
                                        value={formData.phone}
                                        onChange={handleChange("phone")}
                                    />
                                    <HeroInput
                                        label="Subject"
                                        placeholder="How can we help?"
                                        variant="bordered"
                                        value={formData.subject}
                                        onChange={handleChange("subject")}
                                        isRequired
                                    />
                                </div>
                                <HeroTextarea
                                    label="Your Message"
                                    placeholder="Tell us about your printing requirements..."
                                    variant="bordered"
                                    minRows={4}
                                    value={formData.message}
                                    onChange={handleChange("message")}
                                    isRequired
                                />
                                <HeroButton
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full font-semibold"
                                    isLoading={isSubmitting}
                                    endContent={!isSubmitting && <Send className="w-5 h-5" />}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </HeroButton>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="aspect-[16/6] rounded-2xl bg-card border border-border flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                            <p className="text-muted-foreground">Map integration coming soon</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
