"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    ArrowRight, Check, Printer, Palette,
    FileText, Package2, Search
} from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import RecentlyPrinted from "@/components/landing/RecentlyPrinted";
import RecommendedProducts from "@/components/landing/RecommendedProducts";
import Categories from "@/components/landing/Categories";
import { services } from "@/data/services";

const processSteps = [
    { icon: FileText, title: "Share Requirements", description: "Tell us what you need" },
    { icon: Palette, title: "Design Review", description: "We review or create designs" },
    { icon: Printer, title: "Print Production", description: "Quality printing begins" },
    { icon: Package2, title: "Delivery", description: "Receive your prints" },
];

function ServiceSection({ service, index }) {
    const isEven = index % 2 === 0;
    const ServiceIcon = service.icon;

    return (
        <section id={service.id} className="py-16 scroll-mt-20">
            <div className="site-container">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={isEven ? "" : "lg:order-2"}
                    >
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: `${service.color}15` }}
                        >
                            <ServiceIcon className="w-8 h-8" style={{ color: service.color }} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                                    <span className="text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <HeroButton
                            as={Link}
                            href={`/services/${service.slug || service.id}`}
                            color="primary"
                            endContent={<ArrowRight className="w-4 h-4" />}
                        >
                            Explore {service.shortTitle || service.title}
                        </HeroButton>
                    </motion.div>

                    {/* Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={isEven ? "" : "lg:order-1"}
                    >
                        <div
                            className="aspect-[4/3] rounded-3xl flex items-center justify-center"
                            style={{
                                background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}40 100%)`,
                            }}
                        >
                            <ServiceIcon className="w-24 h-24" style={{ color: service.color }} />
                        </div>
                    </motion.div>
                </div>
            </div>
            {index < services.length - 1 && (
                <div className="site-container mt-16">
                    <div className="border-b border-border" />
                </div>
            )}
        </section>
    );
}

export default function ServicesPage() {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.elements.search.value;
        if (query.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    };

    // Quick category chips
    const quickCategories = [
        { name: "Visiting Cards", href: "/category/visiting-cards" },
        { name: "Wedding Cards", href: "/category/wedding-invitation" },
        { name: "Flex Banner", href: "/category/banners-flex" },
        { name: "Stickers", href: "/category/stickers" },
        { name: "ID Cards", href: "/category/id-cards" },
        { name: "Posters", href: "/category/posters" },
    ];

    return (
        <>
            {/* Search Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/hero-bg.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 py-20 md:py-28 lg:py-32">
                    <div className="site-container">
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 italic"
                            >
                                Print smarter. Create better impressions.
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg md:text-xl text-white/80 mb-8"
                            >
                                High-quality printing for businesses & personal needs
                            </motion.p>

                            {/* Search Bar */}
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                onSubmit={handleSearch}
                                className="relative max-w-2xl mx-auto mb-8"
                            >
                                <div className="relative flex items-center">
                                    <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="What do you want to print? (Visiting card, Banner, Invitation...)"
                                        className="w-full pl-14 pr-14 py-4 rounded-full bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-lg text-base"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.form>

                            {/* Quick Category Chips */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-wrap justify-center gap-3"
                            >
                                {quickCategories.map((category) => (
                                    <Link
                                        key={category.name}
                                        href={category.href}
                                        className="px-4 py-2 rounded-full bg-white/90 hover:bg-white text-gray-900 text-sm font-medium transition-all hover:shadow-md"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog Section */}
            <RecentlyPrinted />
            <RecommendedProducts />
            <Categories />

            {/* Hero */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        >
                            Our Printing Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground mb-8"
                        >
                            From business essentials to wedding elegance, we provide comprehensive
                            printing solutions with premium quality and attention to detail.
                        </motion.p>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3"
                        >
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-12 border-b border-border">
                <div className="site-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-medium text-foreground">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <ServiceSection key={service.id} service={service} index={index} />
            ))}

            {/* CTA */}
            <section className="py-16 md:py-20 bg-primary">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Get in touch with us for a custom quote tailored to your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HeroButton
                            as={Link}
                            href="/quote"
                            size="lg"
                            className="bg-white text-primary font-semibold"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            Get a Quote
                        </HeroButton>
                        <HeroButton
                            as={Link}
                            href="/contact"
                            variant="bordered"
                            size="lg"
                            className="border-white/30 text-white font-semibold hover:bg-white/10"
                        >
                            Contact Us
                        </HeroButton>
                    </div>
                </div>
            </section>
        </>
    );
}
