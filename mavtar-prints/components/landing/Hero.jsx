"use client";

import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero-bg.jpg')",
                    }}
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 md:py-32 lg:py-40">
                <div className="site-container">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            10+ Years of Printing Excellence
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Precision Printing.{" "}
                            <span className="text-primary">Premium Quality.</span>{" "}
                            Reliable Results.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
                        >
                            Mavtar Printing Press delivers high-quality commercial and custom printing
                            solutions for businesses, weddings, and brands that value perfection in every detail.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <HeroButton
                                as={Link}
                                href="/services"
                                color="primary"
                                size="lg"
                                className="font-semibold px-8"
                                endContent={<ArrowRight className="w-5 h-5" />}
                            >
                                Explore Our Services
                            </HeroButton>
                            <HeroButton
                                as={Link}
                                href="/quote"
                                variant="bordered"
                                size="lg"
                                className="font-semibold px-8 border-white/30 text-white hover:bg-white/10"
                                endContent={<FileText className="w-5 h-5" />}
                            >
                                Get a Quote
                            </HeroButton>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
