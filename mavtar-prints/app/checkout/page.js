"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft, ArrowRight, CreditCard, Truck, CheckCircle,
    MapPin, User, Phone, Mail, Building, Package
} from "lucide-react";
import { Input as HeroInput, Textarea as HeroTextarea, Button as HeroButton, Radio, RadioGroup } from "@heroui/react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
    const router = useRouter();
    const { items, getTotal, clearCart, isLoaded } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Contact
        name: "",
        email: "",
        phone: "",
        // Delivery Address
        address: "",
        city: "",
        state: "",
        pincode: "",
        // Payment
        paymentMethod: "cod",
    });

    const subtotal = getTotal();
    const delivery = subtotal >= 2000 ? 0 : 99;
    const total = subtotal + delivery;

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmitOrder = async () => {
        setIsSubmitting(true);

        // Simulate order processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate order ID
        const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;

        // Log order (simulating backend)
        console.log('='.repeat(50));
        console.log('NEW ORDER PLACED');
        console.log('='.repeat(50));
        console.log(`Order ID: ${orderId}`);
        console.log(`Customer: ${formData.name} | ${formData.email} | ${formData.phone}`);
        console.log(`Delivery: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`);
        console.log(`Payment: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`);
        console.log(`Items:`, items.map(i => `${i.name} x${i.quantity}`).join(', '));
        console.log(`Total: ₹${total}`);
        console.log('='.repeat(50));

        // Clear cart and redirect
        clearCart();
        router.push(`/order/${orderId}?total=${total}&name=${encodeURIComponent(formData.name)}`);
    };

    if (!isLoaded) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <section className="py-20 md:py-32">
                <div className="site-container">
                    <div className="max-w-lg mx-auto text-center">
                        <Package className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Your Cart is Empty
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Add some items to your cart before checkout.
                        </p>
                        <HeroButton as={Link} href="/services" color="primary">
                            Browse Products
                        </HeroButton>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Progress Steps */}
            <section className="py-8 bg-secondary/30 border-b border-border">
                <div className="site-container">
                    <div className="flex items-center justify-center gap-8 md:gap-16">
                        {[
                            { num: 1, label: "Contact", icon: User },
                            { num: 2, label: "Delivery", icon: Truck },
                            { num: 3, label: "Payment", icon: CreditCard },
                        ].map((s, i) => (
                            <div key={s.num} className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= s.num
                                        ? "bg-primary text-white"
                                        : "bg-secondary text-muted-foreground"
                                    }`}>
                                    {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                                </div>
                                <span className={`hidden sm:inline text-sm ${step >= s.num ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                                    {s.label}
                                </span>
                                {i < 2 && (
                                    <div className={`w-8 md:w-16 h-0.5 ml-2 ${step > s.num ? "bg-primary" : "bg-border"}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="site-container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Form Section */}
                        <div className="lg:col-span-2">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-card border border-border rounded-xl p-6 md:p-8"
                            >
                                {/* Step 1: Contact Information */}
                                {step === 1 && (
                                    <>
                                        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                            <User className="w-5 h-5 text-primary" />
                                            Contact Information
                                        </h2>
                                        <div className="space-y-4">
                                            <HeroInput
                                                label="Full Name"
                                                placeholder="John Doe"
                                                variant="bordered"
                                                value={formData.name}
                                                onChange={handleChange("name")}
                                                startContent={<User className="w-4 h-4 text-muted-foreground" />}
                                                isRequired
                                            />
                                            <HeroInput
                                                label="Email Address"
                                                type="email"
                                                placeholder="john@example.com"
                                                variant="bordered"
                                                value={formData.email}
                                                onChange={handleChange("email")}
                                                startContent={<Mail className="w-4 h-4 text-muted-foreground" />}
                                                isRequired
                                            />
                                            <HeroInput
                                                label="Phone Number"
                                                placeholder="+91 98765 43210"
                                                variant="bordered"
                                                value={formData.phone}
                                                onChange={handleChange("phone")}
                                                startContent={<Phone className="w-4 h-4 text-muted-foreground" />}
                                                isRequired
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Step 2: Delivery Address */}
                                {step === 2 && (
                                    <>
                                        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                            <Truck className="w-5 h-5 text-primary" />
                                            Delivery Address
                                        </h2>
                                        <div className="space-y-4">
                                            <HeroTextarea
                                                label="Street Address"
                                                placeholder="Building name, street, area..."
                                                variant="bordered"
                                                minRows={2}
                                                value={formData.address}
                                                onChange={handleChange("address")}
                                                isRequired
                                            />
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <HeroInput
                                                    label="City"
                                                    placeholder="Surat"
                                                    variant="bordered"
                                                    value={formData.city}
                                                    onChange={handleChange("city")}
                                                    startContent={<Building className="w-4 h-4 text-muted-foreground" />}
                                                    isRequired
                                                />
                                                <HeroInput
                                                    label="State"
                                                    placeholder="Gujarat"
                                                    variant="bordered"
                                                    value={formData.state}
                                                    onChange={handleChange("state")}
                                                    isRequired
                                                />
                                            </div>
                                            <HeroInput
                                                label="PIN Code"
                                                placeholder="395003"
                                                variant="bordered"
                                                value={formData.pincode}
                                                onChange={handleChange("pincode")}
                                                startContent={<MapPin className="w-4 h-4 text-muted-foreground" />}
                                                isRequired
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Payment */}
                                {step === 3 && (
                                    <>
                                        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                            <CreditCard className="w-5 h-5 text-primary" />
                                            Payment Method
                                        </h2>
                                        <RadioGroup
                                            value={formData.paymentMethod}
                                            onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                                        >
                                            <div className="space-y-4">
                                                <div className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                                                    <Radio value="cod">
                                                        <div className="ml-2">
                                                            <span className="font-medium text-foreground">Cash on Delivery</span>
                                                            <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                                                        </div>
                                                    </Radio>
                                                </div>
                                                <div className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.paymentMethod === 'online' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                                                    <Radio value="online">
                                                        <div className="ml-2">
                                                            <span className="font-medium text-foreground">Online Payment</span>
                                                            <p className="text-sm text-muted-foreground">UPI, Cards, Net Banking (Mock)</p>
                                                        </div>
                                                    </Radio>
                                                </div>
                                            </div>
                                        </RadioGroup>

                                        {formData.paymentMethod === 'online' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="mt-6 p-4 rounded-xl bg-secondary/50 border border-border"
                                            >
                                                <p className="text-sm text-muted-foreground text-center">
                                                    🔒 This is a mock checkout. No actual payment will be processed.
                                                </p>
                                            </motion.div>
                                        )}
                                    </>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                                    <HeroButton
                                        variant="bordered"
                                        onPress={() => step > 1 ? setStep(step - 1) : router.push('/cart')}
                                        startContent={<ArrowLeft className="w-4 h-4" />}
                                    >
                                        {step > 1 ? "Back" : "Return to Cart"}
                                    </HeroButton>

                                    {step < 3 ? (
                                        <HeroButton
                                            color="primary"
                                            onPress={() => setStep(step + 1)}
                                            endContent={<ArrowRight className="w-4 h-4" />}
                                        >
                                            Continue
                                        </HeroButton>
                                    ) : (
                                        <HeroButton
                                            color="primary"
                                            onPress={handleSubmitOrder}
                                            isLoading={isSubmitting}
                                            endContent={!isSubmitting && <CheckCircle className="w-4 h-4" />}
                                        >
                                            {isSubmitting ? "Processing..." : "Place Order"}
                                        </HeroButton>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                                <h2 className="text-lg font-semibold text-foreground mb-4">
                                    Order Summary
                                </h2>

                                {/* Items */}
                                <div className="space-y-3 max-h-64 overflow-y-auto mb-4 pb-4 border-b border-border">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <span className="text-muted-foreground truncate flex-1 pr-2">
                                                {item.name} × {item.quantity}
                                            </span>
                                            <span className="text-foreground font-medium">
                                                ₹{(item.price * item.quantity).toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Delivery</span>
                                        <span className="text-foreground">
                                            {delivery === 0 ? <span className="text-green-500">FREE</span> : `₹${delivery}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-semibold pt-2 border-t border-border">
                                        <span className="text-foreground">Total</span>
                                        <span className="text-foreground text-lg">₹{total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
