"use client";

import { motion } from "motion/react";
import { MousePointer, FileUp, Printer, Truck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MousePointer,
        title: "Select Your Service",
        description: "Choose the printing service that fits your requirement from our wide range of options.",
    },
    {
        number: "02",
        icon: FileUp,
        title: "Share Your Details",
        description: "Provide design files or discuss custom specifications with our expert team.",
    },
    {
        number: "03",
        icon: Printer,
        title: "Printing & Quality Check",
        description: "Your order is printed with precision and inspected carefully for perfection.",
    },
    {
        number: "04",
        icon: Truck,
        title: "Delivery or Pickup",
        description: "Get your prints delivered to your doorstep or collect them at your convenience.",
    },
];

export default function HowItWorks() {
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
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Getting your prints is easy. Follow these simple steps to bring your ideas to life.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative text-center"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
                            )}

                            {/* Step Number & Icon */}
                            <div className="relative inline-flex flex-col items-center mb-4">
                                <span className="text-4xl font-bold text-primary/20 mb-2">
                                    {step.number}
                                </span>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <step.icon className="w-7 h-7 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-[250px] mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
