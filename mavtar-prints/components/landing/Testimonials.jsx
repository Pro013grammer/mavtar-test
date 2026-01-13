"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { getFeaturedTestimonials } from "@/data/testimonials";

function TestimonialCard({ testimonial, index }) {
    // Generate initials from name
    const initials = testimonial.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    // Generate color based on index
    const colors = ["#14b8a6", "#ec4899", "#f59e0b", "#8b5cf6"];
    const color = colors[index % colors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6"
        >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            {/* Content */}
            <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm"
                    style={{ backgroundColor: color }}
                >
                    {initials}
                </div>
                <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ""}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const testimonials = getFeaturedTestimonials(3);

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
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground"
                    >
                        Trusted by hundreds of businesses and individuals
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
