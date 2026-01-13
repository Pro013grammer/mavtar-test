"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-20">
            <div className="site-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 md:p-12 lg:p-16 text-center"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 printing-pattern" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Print Something Exceptional?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Whether it's a business requirement or a special occasion, we're here to
                            deliver prints that make an impact. Let's bring your vision to life.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <HeroButton
                                as={Link}
                                href="/quote"
                                size="lg"
                                className="font-semibold px-8 bg-white text-primary hover:bg-white/90"
                                endContent={<ArrowRight className="w-5 h-5" />}
                            >
                                Get a Quote
                            </HeroButton>
                            <HeroButton
                                as={Link}
                                href="/contact"
                                variant="bordered"
                                size="lg"
                                className="font-semibold px-8 border-white/30 text-white hover:bg-white/10"
                                endContent={<Phone className="w-5 h-5" />}
                            >
                                Contact Us
                            </HeroButton>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
