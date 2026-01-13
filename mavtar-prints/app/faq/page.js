"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import { faqs } from "@/data/faqs";

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 flex items-center justify-between text-left"
            >
                <span className="font-medium text-foreground pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-muted-foreground pr-8">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
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
                            Frequently Asked Questions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Find answers to common questions about our printing services,
                            ordering process, and more.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((category, catIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="mb-10 last:mb-0"
                            >
                                <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-primary/20">
                                    {category.category}
                                </h2>
                                <div className="bg-card border border-border rounded-xl">
                                    {category.questions.map((faq) => (
                                        <FAQItem key={faq.id || faq.q} question={faq.q} answer={faq.a} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HeroButton
                            as={Link}
                            href="/contact"
                            color="primary"
                            size="lg"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            Contact Us
                        </HeroButton>
                        <HeroButton
                            as={Link}
                            href="/quote"
                            variant="bordered"
                            size="lg"
                        >
                            Get a Quote
                        </HeroButton>
                    </div>
                </div>
            </section>
        </>
    );
}
