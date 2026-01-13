"use client";

import { motion } from "motion/react";
import { Award, Cpu, Sparkles, Users, Clock } from "lucide-react";

const trustItems = [
    {
        icon: Award,
        text: "10+ Years of Excellence",
    },
    {
        icon: Cpu,
        text: "Advanced Printing Technology",
    },
    {
        icon: Sparkles,
        text: "Premium Materials & Finishes",
    },
    {
        icon: Users,
        text: "Trusted by 1000+ Clients",
    },
    {
        icon: Clock,
        text: "On-Time Delivery",
    },
];

export default function TrustSection() {
    return (
        <section className="py-6 md:py-8 border-y border-border bg-secondary/30">
            <div className="site-container">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.text}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground/80">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
