"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";

function PortfolioCard({ item, index }) {
    const category = portfolioCategories.find(c => c.id === item.category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <div
                className="aspect-[4/3] rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)` }}
            >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                </div>

                {/* Category Icon */}
                {category?.icon && (
                    <div style={{ color: item.color }}>
                        <category.icon className="w-16 h-16" />
                    </div>
                )}
            </div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <p className="text-xs text-muted-foreground/70">{item.details}</p>
        </motion.div>
    );
}

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

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
                            Our Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Explore our portfolio of printed materials. From business cards to
                            wedding invitations, see the quality and craftsmanship in every project.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b border-border bg-background">
                <div className="site-container">
                    <div className="flex flex-wrap justify-center gap-3">
                        {portfolioCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                                    ? "bg-primary text-white"
                                    : "bg-secondary text-foreground/80 hover:bg-secondary/80"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredItems.map((item, index) => (
                            <PortfolioCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Like What You See?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let us create something amazing for you. Get in touch to discuss
                        your printing requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HeroButton
                            as={Link}
                            href="/quote"
                            color="primary"
                            size="lg"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            Get a Quote
                        </HeroButton>
                        <HeroButton
                            as={Link}
                            href="/contact"
                            variant="bordered"
                            size="lg"
                        >
                            Contact Us
                        </HeroButton>
                    </div>
                </div>
            </section>
        </>
    );
}
