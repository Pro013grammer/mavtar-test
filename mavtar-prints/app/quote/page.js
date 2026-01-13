"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Upload, FileText, Check, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import {
    Input as HeroInput,
    Textarea as HeroTextarea,
    Button as HeroButton,
    Select,
    SelectItem
} from "@heroui/react";

const serviceOptions = [
    { value: "business", label: "Business Printing" },
    { value: "wedding", label: "Wedding & Invitation" },
    { value: "marketing", label: "Marketing Materials" },
    { value: "custom", label: "Custom Printing" },
];

const paperOptions = [
    { value: "art-paper", label: "Art Paper (Glossy/Matte)" },
    { value: "bond-paper", label: "Bond Paper" },
    { value: "textured", label: "Textured Paper" },
    { value: "cardstock", label: "Cardstock" },
    { value: "custom", label: "Custom (Specify in notes)" },
];

const finishOptions = [
    { value: "matte", label: "Matte Lamination" },
    { value: "glossy", label: "Glossy Lamination" },
    { value: "spot-uv", label: "Spot UV Coating" },
    { value: "foil", label: "Foil Stamping" },
    { value: "emboss", label: "Embossing" },
    { value: "none", label: "No Special Finish" },
];

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        paperType: "",
        finish: "",
        quantity: "",
        size: "",
        notes: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
    const [submitMessage, setSubmitMessage] = useState("");
    const [quoteId, setQuoteId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/quote', {
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
                setQuoteId(data.quoteId);
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
        if (submitStatus === 'error') {
            setSubmitStatus(null);
        }
    };

    const handleSelectChange = (field) => (value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            paperType: "",
            finish: "",
            quantity: "",
            size: "",
            notes: "",
        });
        setSubmitStatus(null);
        setQuoteId("");
    };

    // Success state
    if (submitStatus === 'success') {
        return (
            <section className="py-20 md:py-32">
                <div className="site-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Quote Request Submitted!
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            {submitMessage}
                        </p>
                        <div className="bg-secondary/50 rounded-xl p-4 mb-8">
                            <p className="text-sm text-muted-foreground mb-1">Your Quote Reference ID</p>
                            <p className="text-xl font-bold text-primary">{quoteId}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-8">
                            Our team will review your requirements and get back to you within 24 hours with a detailed quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <HeroButton
                                color="primary"
                                onClick={resetForm}
                            >
                                Submit Another Request
                            </HeroButton>
                            <HeroButton
                                as={Link}
                                href="/"
                                variant="bordered"
                            >
                                Back to Home
                            </HeroButton>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

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
                            Get a Quote
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Tell us about your printing requirements and we'll provide you
                            with a customized quote tailored to your needs.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="max-w-3xl mx-auto">
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="bg-card border border-border rounded-2xl p-6 md:p-8"
                        >
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

                            {/* Contact Information */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                                    Contact Information
                                </h2>
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
                                    <HeroInput
                                        label="Phone Number"
                                        placeholder="+91 98765 43210"
                                        variant="bordered"
                                        value={formData.phone}
                                        onChange={handleChange("phone")}
                                        isRequired
                                    />
                                    <HeroInput
                                        label="Company (Optional)"
                                        placeholder="Your Company Name"
                                        variant="bordered"
                                        value={formData.company}
                                        onChange={handleChange("company")}
                                    />
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                                    Service Details
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Select
                                        label="Service Type"
                                        placeholder="Select a service"
                                        variant="bordered"
                                        selectedKeys={formData.service ? [formData.service] : []}
                                        onSelectionChange={(keys) => handleSelectChange("service")(Array.from(keys)[0])}
                                        isRequired
                                    >
                                        {serviceOptions.map((option) => (
                                            <SelectItem key={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <HeroInput
                                        label="Quantity"
                                        placeholder="e.g., 500, 1000"
                                        variant="bordered"
                                        value={formData.quantity}
                                        onChange={handleChange("quantity")}
                                        isRequired
                                    />
                                    <Select
                                        label="Paper Type"
                                        placeholder="Select paper type"
                                        variant="bordered"
                                        selectedKeys={formData.paperType ? [formData.paperType] : []}
                                        onSelectionChange={(keys) => handleSelectChange("paperType")(Array.from(keys)[0])}
                                    >
                                        {paperOptions.map((option) => (
                                            <SelectItem key={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Select
                                        label="Finish"
                                        placeholder="Select finish type"
                                        variant="bordered"
                                        selectedKeys={formData.finish ? [formData.finish] : []}
                                        onSelectionChange={(keys) => handleSelectChange("finish")(Array.from(keys)[0])}
                                    >
                                        {finishOptions.map((option) => (
                                            <SelectItem key={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div className="mt-4">
                                    <HeroInput
                                        label="Size / Dimensions"
                                        placeholder="e.g., 3.5 x 2 inches, A4, Custom"
                                        variant="bordered"
                                        value={formData.size}
                                        onChange={handleChange("size")}
                                    />
                                </div>
                            </div>

                            {/* Upload Design */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
                                    Upload Design (Optional)
                                </h2>
                                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                                    <p className="text-foreground font-medium mb-1">
                                        Drop your design files here
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        or click to browse (PDF, AI, PSD, PNG, JPG)
                                    </p>
                                    <HeroButton variant="bordered" size="sm">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Browse Files
                                    </HeroButton>
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">4</span>
                                    Additional Notes
                                </h2>
                                <HeroTextarea
                                    label="Tell us more about your project"
                                    placeholder="Any specific requirements, timeline, or questions..."
                                    variant="bordered"
                                    minRows={4}
                                    value={formData.notes}
                                    onChange={handleChange("notes")}
                                />
                            </div>

                            {/* Submit */}
                            <HeroButton
                                type="submit"
                                color="primary"
                                size="lg"
                                className="w-full font-semibold"
                                isLoading={isSubmitting}
                                endContent={!isSubmitting && <ArrowRight className="w-5 h-5" />}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                            </HeroButton>
                        </motion.form>
                    </div>
                </div>
            </section>
        </>
    );
}
