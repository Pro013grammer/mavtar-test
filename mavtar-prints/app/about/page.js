"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Projects Completed" },
    { value: "1000+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
];

const values = [
    {
        icon: Award,
        title: "Quality Excellence",
        description: "We never compromise on quality. Every print goes through rigorous quality checks.",
    },
    {
        icon: Users,
        title: "Customer First",
        description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.",
    },
    {
        icon: Target,
        title: "Precision & Detail",
        description: "From color accuracy to finishing touches, we pay attention to every detail.",
    },
    {
        icon: Heart,
        title: "Passion for Printing",
        description: "We love what we do. Our passion drives us to innovate and improve constantly.",
    },
];

export default function AboutPage() {
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
                            About Mavtar Printing Press
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Delivering reliable, high-quality printing solutions with precision,
                            professionalism, and care since 2014.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-b border-border">
                <div className="site-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Mavtar Printing Press was founded in 2014 with a simple mission: to provide
                                    premium quality printing services that help businesses and individuals make
                                    lasting impressions.
                                </p>
                                <p>
                                    What started as a small printing shop has grown into one of the most trusted
                                    printing partners in the region. Over the years, we've invested in state-of-the-art
                                    printing technology, expanded our team of skilled professionals, and built
                                    relationships with thousands of satisfied clients.
                                </p>
                                <p>
                                    Today, we offer a comprehensive range of printing services—from business cards
                                    and marketing materials to wedding invitations and custom projects. Our commitment
                                    to quality, innovation, and customer satisfaction remains at the heart of everything we do.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
                        >
                            <div className="relative w-20 h-20">
                                <Image
                                    src="/logo.png"
                                    alt="Mavtar Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                        >
                            Our Core Values
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground"
                        >
                            The principles that guide everything we do
                        </motion.p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card border border-border rounded-xl p-6 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Want to Work With Us?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our team and partners who share our vision.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <HeroButton
                                as={Link}
                                href="/careers"
                                color="primary"
                                endContent={<ArrowRight className="w-5 h-5" />}
                            >
                                View Careers
                            </HeroButton>
                            <HeroButton
                                as={Link}
                                href="/contact"
                                variant="bordered"
                            >
                                Contact Us
                            </HeroButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
