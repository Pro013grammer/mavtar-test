"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { CheckCircle, Package, Printer, Home, FileText } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";

function OrderConfirmationContent({ orderId }) {
    const searchParams = useSearchParams();
    const total = searchParams.get("total") || "0";
    const name = searchParams.get("name") || "Customer";

    return (
        <section className="py-20 md:py-32">
            <div className="site-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-lg mx-auto text-center"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                    >
                        Order Placed Successfully!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground mb-8"
                    >
                        Thank you, {name.split(" ")[0]}! Your order has been confirmed and will be processed soon.
                    </motion.p>

                    {/* Order Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-card border border-border rounded-xl p-6 mb-8"
                    >
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                                <p className="font-bold text-primary">{orderId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                                <p className="font-bold text-foreground">₹{parseInt(total).toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                            <p className="text-foreground font-medium">3-5 Business Days</p>
                        </div>
                    </motion.div>

                    {/* What's Next Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-secondary/50 rounded-xl p-6 mb-8"
                    >
                        <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                        <div className="space-y-3 text-left">
                            {[
                                { icon: FileText, text: "You'll receive an order confirmation email shortly" },
                                { icon: Printer, text: "Our team will begin processing your print order" },
                                { icon: Package, text: "You'll be notified when your order is shipped" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground pt-1">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <HeroButton
                            as={Link}
                            href="/"
                            color="primary"
                            size="lg"
                            startContent={<Home className="w-5 h-5" />}
                        >
                            Back to Home
                        </HeroButton>
                        <HeroButton
                            as={Link}
                            href="/services"
                            variant="bordered"
                            size="lg"
                        >
                            Continue Shopping
                        </HeroButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function OrderConfirmationPage({ params }) {
    const { id } = params;

    return (
        <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-muted-foreground">Loading order details...</div>
            </div>
        }>
            <OrderConfirmationContent orderId={id} />
        </Suspense>
    );
}
