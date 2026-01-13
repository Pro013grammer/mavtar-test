"use client";

import { motion } from "motion/react";
import { CheckCircle, Settings, Palette, Wallet, Headphones } from "lucide-react";

const reasons = [
    {
        icon: CheckCircle,
        title: "Unmatched Print Quality",
        description: "Every print goes through strict quality checks to ensure color accuracy and sharp finishing.",
    },
    {
        icon: Settings,
        title: "Modern Printing Infrastructure",
        description: "We use advanced offset and digital machines for consistent and reliable results.",
    },
    {
        icon: Palette,
        title: "Customization at Every Level",
        description: "Paper, size, finish, color, and quantity — fully tailored to your specific needs.",
    },
    {
        icon: Wallet,
        title: "Cost-Effective Bulk Printing",
        description: "Competitive pricing without compromising on quality. Best rates for large orders.",
    },
    {
        icon: Headphones,
        title: "Local Expertise & Support",
        description: "Quick communication, transparent process, and reliable service every time.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-20 bg-secondary/30">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                    >
                        Why Choose Mavtar Printing Press
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        We're committed to delivering excellence in every print, backed by years of
                        experience and modern technology.
                    </motion.p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <reason.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
