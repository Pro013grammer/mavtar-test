"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Mehta",
        role: "Business Owner, Mehta Enterprises",
        content: "We've been working with Mavtar Printing Press for over 5 years now. Their attention to detail and consistent quality has made them our go-to partner for all business printing needs. The visiting cards and corporate stationery they produce always receive compliments from our clients.",
        rating: 5,
        avatar: "RM",
        color: "#14b8a6",
    },
    {
        id: 2,
        name: "Priya & Vikram Sharma",
        role: "Wedding Clients",
        content: "The wedding invitations were absolutely stunning! Mavtar team understood exactly what we wanted and delivered beyond our expectations. The gold foil stamping and textured paper made our cards truly special. Highly recommend for anyone looking for premium wedding printing.",
        rating: 5,
        avatar: "PS",
        color: "#ec4899",
    },
    {
        id: 3,
        name: "Sneha Patel",
        role: "Marketing Manager, RetailMax",
        content: "Mavtar has been handling all our marketing collateral - from brochures to large banners. Their print quality is exceptional and they always deliver on time, even with tight deadlines. The team is professional and easy to work with.",
        rating: 5,
        avatar: "SP",
        color: "#f59e0b",
    },
    {
        id: 4,
        name: "Dr. Amit Joshi",
        role: "Clinic Owner",
        content: "I needed prescription pads and appointment cards for my clinic. Mavtar provided exactly what I needed with precision printing and fast turnaround. Their pricing is fair and the quality speaks for itself.",
        rating: 5,
        avatar: "AJ",
        color: "#3b82f6",
    },
    {
        id: 5,
        name: "Kavita Desai",
        role: "Event Planner",
        content: "As an event planner, I frequently need various printed materials on short notice. Mavtar has never let me down. From event invitations to standees and banners, they handle everything professionally.",
        rating: 5,
        avatar: "KD",
        color: "#8b5cf6",
    },
    {
        id: 6,
        name: "Suresh Textile Mills",
        role: "Surat Based Manufacturer",
        content: "We needed custom packaging and product labels in bulk. Mavtar's pricing for bulk orders is very competitive, and the quality remained consistent across thousands of pieces. They truly understand commercial printing requirements.",
        rating: 5,
        avatar: "ST",
        color: "#ef4444",
    },
];

function TestimonialCard({ testimonial, index }) {
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
                "{testimonial.content}"
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
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium"
                    style={{ backgroundColor: testimonial.color }}
                >
                    {testimonial.avatar}
                </div>
                <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsPage() {
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
                            Client Testimonials
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Hear from our satisfied clients about their experience
                            working with Mavtar Printing Press.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-b border-border">
                <div className="site-container">
                    <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary">1000+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">5000+</div>
                            <div className="text-sm text-muted-foreground">Projects Done</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
                                4.9 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </div>
                            <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* CTA */}
            <section className="py-16 md:py-20 bg-primary">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Join Our Happy Clients?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Experience the quality and service that our clients love.
                        Get started with your printing project today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HeroButton
                            as={Link}
                            href="/quote"
                            size="lg"
                            className="bg-white text-primary font-semibold"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            Get a Quote
                        </HeroButton>
                        <HeroButton
                            as={Link}
                            href="/portfolio"
                            variant="bordered"
                            size="lg"
                            className="border-white/30 text-white font-semibold hover:bg-white/10"
                        >
                            View Our Work
                        </HeroButton>
                    </div>
                </div>
            </section>
        </>
    );
}
