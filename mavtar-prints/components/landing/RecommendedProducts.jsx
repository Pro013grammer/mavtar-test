"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Mock data for recommended products with real images
const recommendedProducts = [
    {
        id: 7,
        name: "Corporate Brochure",
        price: 1499,
        unit: "50 pcs",
        rating: 4.9,
        likes: 89,
        image: "/products/brochure-1.jpg",
    },
    {
        id: 8,
        name: "Menu Card Design",
        price: 799,
        unit: "25 pcs",
        rating: 4.7,
        likes: 56,
        image: "/products/visiting-1.jpg",
    },
    {
        id: 9,
        name: "Poster A3 Size",
        price: 349,
        unit: "10 pcs",
        rating: 4.8,
        likes: 112,
        image: "/products/banner-1.jpg",
    },
    {
        id: 10,
        name: "Envelope Printing",
        price: 449,
        unit: "100 pcs",
        rating: 4.6,
        likes: 45,
        image: "/products/stickers-1.jpg",
    },
    {
        id: 11,
        name: "Bill Book",
        price: 599,
        unit: "50 sets",
        rating: 4.5,
        likes: 78,
        image: "/products/brochure-1.jpg",
    },
    {
        id: 12,
        name: "Thank You Cards",
        price: 199,
        unit: "100 pcs",
        rating: 4.9,
        likes: 234,
        image: "/products/wedding-1.jpg",
    },
];

function ProductCard({ product }) {
    return (
        <Link href={`/product/${product.id}`} className="block flex-shrink-0 w-48 md:w-56">
            <motion.div
                whileHover={{ y: -4 }}
                className="product-card bg-card border border-border"
            >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 224px"
                    />

                    {/* Like Button */}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-10">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>

                    {/* Likes Count */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/50 text-white text-xs flex items-center gap-1 z-10">
                        <Heart className="w-3 h-3 fill-current" />
                        {product.likes}
                    </div>
                </div>

                {/* Content */}
                <div className="p-3">
                    <h3 className="text-sm font-medium text-foreground truncate mb-1">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <p className="text-base font-bold text-foreground">
                        ₹{product.price}
                        <span className="text-xs font-normal text-muted-foreground ml-1">
                            / {product.unit}
                        </span>
                    </p>
                </div>
            </motion.div>
        </Link>
    );
}

export default function RecommendedProducts() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-12 md:py-16 bg-secondary/30">
            <div className="site-container">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h2 className="section-title">Recommended for You</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="nav-arrow"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="nav-arrow"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Product Scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {recommendedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
