"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Briefcase, Heart, Megaphone, Package, ArrowRight } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";

const services = [
    {
        id: "business",
        icon: Briefcase,
        title: "Business Printing",
        description: "Professional printing solutions for brands and offices.",
        features: ["Visiting cards", "Letterheads & envelopes", "Corporate stationery", "Invoice & billing books"],
        href: "/services#business",
        color: "#14b8a6",
    },
    {
        id: "wedding",
        icon: Heart,
        title: "Wedding & Invitation",
        description: "Elegant and customized prints for special occasions.",
        features: ["Wedding invitation cards", "Engagement & event invites", "Luxury finishes & textures", "Custom sizes and designs"],
        href: "/services#wedding",
        color: "#ec4899",
    },
    {
        id: "marketing",
        icon: Megaphone,
        title: "Marketing & Promotional",
        description: "High-impact materials that help your brand stand out.",
        features: ["Brochures & flyers", "Posters & banners", "Catalogs & booklets", "Promotional materials"],
        href: "/services#marketing",
        color: "#f59e0b",
    },
    {
        id: "custom",
        icon: Package,
        title: "Custom & Bulk Printing",
        description: "Tailored printing solutions for large and unique requirements.",
        features: ["Packaging & labels", "Bulk printing orders", "Custom paper & finishes", "Large-format printing"],
        href: "/services#custom",
        color: "#8b5cf6",
    },
];

function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow group"
        >
            {/* Icon */}
            <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${service.color}15` }}
            >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4">
                {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Link */}
            <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:gap-3"
                style={{ color: service.color }}
            >
                View {service.title.split(" ")[0]} Printing
                <ArrowRight className="w-4 h-4" />
            </Link>
        </motion.div>
    );
}

export default function ServicesOverview() {
    return (
        <section className="py-16 md:py-20">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                    >
                        Our Core Printing Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        From business essentials to wedding elegance, we deliver exceptional prints
                        tailored to your needs.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <HeroButton
                        as={Link}
                        href="/services"
                        color="primary"
                        variant="flat"
                        size="lg"
                        endContent={<ArrowRight className="w-5 h-5" />}
                    >
                        View All Services
                    </HeroButton>
                </motion.div>
            </div>
        </section>
    );
}
