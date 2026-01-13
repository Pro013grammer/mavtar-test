"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    Star, ShoppingCart, Heart, Share2, Download, Printer,
    Package, Check, ChevronRight, Minus, Plus, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/context/CartContext";

function QuantitySelector({ quantity, setQuantity }) {
    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
                <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );
}

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addItem } = useCart();
    const product = getProductById(params.id);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    // If product not found, show fallback
    if (!product) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
                    <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-full">
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    // Get related products from same category
    const relatedProducts = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 3);

    const handleAddToCart = () => {
        addItem(product, quantity);
        setAddedToCart(true);

        // Show feedback then redirect to cart after a short delay
        setTimeout(() => {
            router.push('/cart');
        }, 800);
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
                >
                    <Link href="/" className="hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/category/${product.category}`} className="hover:text-foreground transition-colors">
                        {product.category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground">{product.name}</span>
                </motion.div>

                {/* Product Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl glass overflow-hidden">
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: product.colors
                                        ? `linear-gradient(135deg, ${product.colors[0]}30 0%, ${product.colors[1] || product.colors[0]}30 100%)`
                                        : "linear-gradient(135deg, #8b5cf630 0%, #ec489930 100%)",
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0.8, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-48 h-48 rounded-3xl"
                                    style={{
                                        background: product.colors
                                            ? `linear-gradient(135deg, ${product.colors[0]} 0%, ${product.colors[1] || product.colors[0]} 100%)`
                                            : "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-6 left-6 flex gap-2">
                            {product.badge && (
                                <Badge className="gradient-bg text-white border-0">
                                    {product.badge}
                                </Badge>
                            )}
                            {discount > 0 && (
                                <Badge className="bg-green-500/20 text-green-400 border-0">
                                    -{discount}% OFF
                                </Badge>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {/* Category */}
                        <Badge variant="outline" className="mb-4">
                            {product.category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                        </Badge>

                        {/* Name */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                                    />
                                ))}
                                <span className="ml-2 font-medium">{product.rating}</span>
                            </div>
                            <span className="text-muted-foreground">
                                ({product.reviews} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-4xl font-bold gradient-text">
                                ₹{product.price}
                            </span>
                            {product.originalPrice > product.price && (
                                <span className="text-xl text-muted-foreground line-through">
                                    ₹{product.originalPrice}
                                </span>
                            )}
                            {product.unit && (
                                <span className="text-muted-foreground">/{product.unit}</span>
                            )}
                        </div>

                        {/* Type Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            {product.type === "digital" && (
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400">
                                    <Download className="w-4 h-4" />
                                    <span className="text-sm font-medium">Digital Download</span>
                                </div>
                            )}
                            {product.type === "print" && (
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-400">
                                    <Printer className="w-4 h-4" />
                                    <span className="text-sm font-medium">Printing Service</span>
                                </div>
                            )}
                            {product.type === "hybrid" && (
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400">
                                    <Package className="w-4 h-4" />
                                    <span className="text-sm font-medium">Design + Print</span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Quantity */}
                        {product.type !== "digital" && (
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-sm font-medium">Quantity:</span>
                                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button
                                className={`btn-premium flex-1 min-w-[200px] py-6 h-auto text-base ${addedToCart ? 'bg-green-500 hover:bg-green-600' : ''}`}
                                onClick={handleAddToCart}
                                disabled={addedToCart}
                            >
                                {addedToCart ? (
                                    <>
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        Added! Redirecting...
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </>
                                )}
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className={`w-14 h-14 rounded-xl ${isWishlisted ? "text-red-500 border-red-500/50" : ""}`}
                                onClick={() => setIsWishlisted(!isWishlisted)}
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                            </Button>
                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-xl">
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Download Info (for digital products) */}
                        {product.type === "digital" && product.downloadInfo && (
                            <div className="p-4 rounded-2xl bg-secondary space-y-3">
                                <h4 className="font-medium">Download Information</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">File Size</p>
                                        <p className="font-medium">{product.downloadInfo.fileSize}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Downloads</p>
                                        <p className="font-medium">{product.downloadInfo.downloadLimit}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Access</p>
                                        <p className="font-medium">{product.downloadInfo.validity}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Tabs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Tabs defaultValue="features" className="w-full">
                        <TabsList className="glass mb-8">
                            <TabsTrigger value="features">Features</TabsTrigger>
                            <TabsTrigger value="specifications">Specifications</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        </TabsList>

                        <TabsContent value="features" className="p-6 rounded-2xl glass">
                            <h3 className="text-xl font-semibold mb-6">What's Included</h3>
                            <ul className="space-y-4">
                                {product.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-green-400" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                        <TabsContent value="specifications" className="p-6 rounded-2xl glass">
                            <h3 className="text-xl font-semibold mb-6">Technical Specifications</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between p-3 rounded-lg bg-secondary">
                                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span className="font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="reviews" className="p-6 rounded-2xl glass">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                                <Button>Write a Review</Button>
                            </div>
                            <div className="text-center py-8 text-muted-foreground">
                                <p>Reviews will be loaded from the database</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((related) => (
                                <Link key={related.id} href={`/products/${related.id}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-2xl glass group cursor-pointer"
                                    >
                                        <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                                            <div
                                                className="w-full h-full flex items-center justify-center"
                                                style={{
                                                    background: related.colors
                                                        ? `linear-gradient(135deg, ${related.colors[0]}40 0%, ${related.colors[1] || related.colors[0]}40 100%)`
                                                        : "linear-gradient(135deg, #8b5cf640 0%, #ec489940 100%)",
                                                }}
                                            >
                                                <div
                                                    className="w-16 h-16 rounded-xl"
                                                    style={{
                                                        background: related.colors
                                                            ? `linear-gradient(135deg, ${related.colors[0]} 0%, ${related.colors[1] || related.colors[0]} 100%)`
                                                            : "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                                            {related.name}
                                        </h4>
                                        <p className="text-lg font-bold gradient-text mt-2">
                                            ₹{related.price}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
