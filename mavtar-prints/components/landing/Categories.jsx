"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Print categories with image backgrounds
const categories = [
    {
        id: "visiting-cards",
        name: "Visiting Cards",
        href: "/category/visiting-cards",
        image: "/categories/visiting-cards.jpg",
        colors: ["#14b8a6", "#0d9488"],
    },
    {
        id: "wedding-cards",
        name: "Wedding Cards",
        href: "/category/wedding-invitation",
        image: "/categories/wedding-cards.jpg",
        colors: ["#ec4899", "#db2777"],
    },
    {
        id: "banners-flex",
        name: "Flex & Banners",
        href: "/category/banners-flex",
        image: "/categories/banners.jpg",
        colors: ["#f59e0b", "#d97706"],
    },
    {
        id: "stickers-labels",
        name: "Stickers & Labels",
        href: "/category/stickers",
        image: "/categories/stickers.jpg",
        colors: ["#8b5cf6", "#7c3aed"],
    },
    {
        id: "books-notebooks",
        name: "Books & Notebooks",
        href: "/category/books-notebooks",
        image: "/categories/books.jpg",
        colors: ["#3b82f6", "#2563eb"],
    },
    {
        id: "custom-merchandise",
        name: "Custom Merchandise",
        href: "/category/custom-merchandise",
        image: "/categories/merchandise.jpg",
        colors: ["#ef4444", "#dc2626"],
    },
];

function CategoryCard({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link href={category.href}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                >
                    {/* Background Gradient (placeholder for image) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${category.colors[0]}60 0%, ${category.colors[1]}80 100%)`,
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-end p-5">
                        <div className="flex items-center justify-between w-full">
                            <h3 className="text-lg font-semibold text-white">
                                {category.name}
                            </h3>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default function Categories() {
    return (
        <section className="py-12 md:py-16">
            <div className="site-container">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="section-title">Print Categories</h2>
                    <p className="text-muted-foreground mt-2">
                        Explore our wide range of printing products
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={category.id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
