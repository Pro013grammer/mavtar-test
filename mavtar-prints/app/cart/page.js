"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { items, isLoaded, updateQuantity, removeItem, getTotal, clearCart } = useCart();

    // Loading state
    if (!isLoaded) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-muted-foreground">Loading cart...</div>
            </div>
        );
    }

    // Empty cart state
    if (items.length === 0) {
        return (
            <section className="py-20 md:py-32">
                <div className="site-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Your Cart is Empty
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Looks like you haven't added any items to your cart yet.
                            Browse our products and add something you like!
                        </p>
                        <HeroButton
                            as={Link}
                            href="/services"
                            color="primary"
                            size="lg"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            Browse Products
                        </HeroButton>
                    </motion.div>
                </div>
            </section>
        );
    }

    const subtotal = getTotal();
    const delivery = subtotal >= 2000 ? 0 : 99;
    const total = subtotal + delivery;

    return (
        <>
            {/* Header */}
            <section className="py-12 bg-secondary/30 border-b border-border">
                <div className="site-container">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                Your Cart
                            </h1>
                            <p className="text-muted-foreground">
                                {items.length} item{items.length > 1 ? "s" : ""} in your cart
                            </p>
                        </div>
                        <HeroButton
                            variant="light"
                            color="danger"
                            size="sm"
                            onPress={clearCart}
                            startContent={<Trash2 className="w-4 h-4" />}
                        >
                            Clear Cart
                        </HeroButton>
                    </div>
                </div>
            </section>

            {/* Cart Content */}
            <section className="py-12 md:py-16">
                <div className="site-container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-card border border-border rounded-xl p-4 md:p-6"
                                >
                                    <div className="flex gap-4 md:gap-6">
                                        {/* Product Image */}
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-secondary flex-shrink-0 overflow-hidden">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={96}
                                                    height={96}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <Link href={`/products/${item.productId}`}>
                                                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                                                            {item.name}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-sm text-muted-foreground mt-0.5">
                                                        {item.category?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                                                    </p>
                                                    {Object.keys(item.options || {}).length > 0 && (
                                                        <div className="mt-2 flex flex-wrap gap-2">
                                                            {Object.entries(item.options).map(([key, value]) => (
                                                                <span key={key} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                                                                    {key}: {value}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Price and Quantity */}
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-foreground">
                                                        ₹{(item.price * item.quantity).toLocaleString()}
                                                    </p>
                                                    {item.quantity > 1 && (
                                                        <p className="text-xs text-muted-foreground">
                                                            ₹{item.price} each
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-card border border-border rounded-xl p-6 sticky top-24"
                            >
                                <h2 className="text-lg font-semibold text-foreground mb-4">
                                    Order Summary
                                </h2>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Delivery</span>
                                        <span className="text-foreground">
                                            {delivery === 0 ? (
                                                <span className="text-green-500">FREE</span>
                                            ) : (
                                                `₹${delivery}`
                                            )}
                                        </span>
                                    </div>
                                    {delivery > 0 && (
                                        <p className="text-xs text-muted-foreground">
                                            Add ₹{(2000 - subtotal).toLocaleString()} more for free delivery
                                        </p>
                                    )}
                                    <div className="border-t border-border pt-3 mt-3">
                                        <div className="flex justify-between font-semibold">
                                            <span className="text-foreground">Total</span>
                                            <span className="text-foreground text-lg">₹{total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <HeroButton
                                    as={Link}
                                    href="/checkout"
                                    color="primary"
                                    size="lg"
                                    className="w-full mt-6 font-semibold"
                                    endContent={<ArrowRight className="w-5 h-5" />}
                                >
                                    Proceed to Checkout
                                </HeroButton>

                                <div className="mt-4 text-center">
                                    <Link href="/services" className="text-sm text-primary hover:underline">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
