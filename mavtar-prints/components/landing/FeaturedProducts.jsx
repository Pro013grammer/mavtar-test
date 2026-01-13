"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, Eye, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock featured products data
const featuredProducts = [
    {
        id: 1,
        name: "Royal Wedding Card",
        category: "Wedding Cards",
        price: 499,
        originalPrice: 799,
        rating: 4.9,
        reviews: 128,
        image: "/products/wedding-1.jpg",
        type: "digital",
        badge: "Bestseller",
        colors: ["#8b5cf6", "#ec4899"],
    },
    {
        id: 2,
        name: "Premium Visiting Card",
        category: "Visiting Cards",
        price: 299,
        originalPrice: 499,
        rating: 4.8,
        reviews: 89,
        image: "/products/visiting-1.jpg",
        type: "print",
        badge: "Popular",
        colors: ["#06b6d4", "#3b82f6"],
    },
    {
        id: 3,
        name: "Elegant Invitation Set",
        category: "Invitation Cards",
        price: 699,
        originalPrice: 999,
        rating: 4.9,
        reviews: 156,
        image: "/products/invitation-1.jpg",
        type: "hybrid",
        badge: "New",
        colors: ["#f59e0b", "#ef4444"],
    },
    {
        id: 4,
        name: "Modern Logo Package",
        category: "Branding",
        price: 1999,
        originalPrice: 2999,
        rating: 5.0,
        reviews: 67,
        image: "/products/logo-1.jpg",
        type: "digital",
        badge: "Premium",
        colors: ["#10b981", "#06b6d4"],
    },
];

function ProductCard({ product, index }) {
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl glass overflow-hidden"
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Gradient Placeholder */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${product.colors[0]}40 0%, ${product.colors[1]}40 100%)`,
                        }}
                    />

                    {/* Product Image - Placeholder for now */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-24 h-24 rounded-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${product.colors[0]} 0%, ${product.colors[1]} 100%)`,
                            }}
                        />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {product.badge && (
                            <Badge className="gradient-bg text-white border-0">
                                {product.badge}
                            </Badge>
                        )}
                        {discount > 0 && (
                            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-0">
                                -{discount}%
                            </Badge>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20"
                        >
                            <Heart className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20"
                        >
                            <Eye className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="btn-premium">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Category */}
                    <span className="text-xs text-primary uppercase tracking-wide">
                        {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                            ({product.reviews} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold gradient-text">
                            ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                                ₹{product.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Type Badge */}
                    <div className="mt-4">
                        <Badge variant="outline" className="text-xs">
                            {product.type === "digital" && "Digital Download"}
                            {product.type === "print" && "Printing Service"}
                            {product.type === "hybrid" && "Design + Print"}
                        </Badge>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function FeaturedProducts() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-primary text-sm font-medium mb-4"
                        >
                            FEATURED PRODUCTS
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        >
                            Our <span className="gradient-text">Best Sellers</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/products">
                            <Button variant="outline" className="btn-outline-premium mt-4 md:mt-0">
                                View All Products
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
