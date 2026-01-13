"use client";

import Link from "next/link";
import Image from "next/image";
import { Input as HeroInput, Button as HeroButton } from "@heroui/react";
import { Instagram, Facebook, Twitter, Send, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
    services: [
        { name: "Business Printing", href: "/services#business" },
        { name: "Wedding Cards", href: "/services#wedding" },
        { name: "Marketing Materials", href: "/services#marketing" },
        { name: "Custom Printing", href: "/services#custom" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Work", href: "/portfolio" },
        { name: "Careers", href: "/careers" },
        { name: "Testimonials", href: "/testimonials" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "Get a Quote", href: "/quote" },
        { name: "FAQ", href: "/faq" },
    ],
};

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="site-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand & Contact Info */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="Mavtar Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-lg font-bold text-foreground">
                                Mavtar Printing Press
                            </span>
                        </Link>

                        <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                            Delivering reliable, high-quality printing solutions with precision,
                            professionalism, and care. From concept to completion, we print with purpose.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Surat, Gujarat, India</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>info@mavtarprints.com</span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-medium text-foreground mb-3">
                                Join our newsletter
                            </h4>
                            <form className="flex gap-2">
                                <HeroInput
                                    type="email"
                                    placeholder="Enter your e-mail"
                                    size="sm"
                                    variant="bordered"
                                    classNames={{
                                        inputWrapper: "border-border",
                                    }}
                                    className="max-w-[200px]"
                                />
                                <HeroButton
                                    isIconOnly
                                    color="primary"
                                    size="sm"
                                    aria-label="Subscribe"
                                >
                                    <Send className="w-4 h-4" />
                                </HeroButton>
                            </form>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>© 2026 Mavtar Printing Press Pvt. Ltd. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-1">
                        <span className="text-sm text-muted-foreground mr-2">Follow us</span>
                        {socialLinks.map((social) => (
                            <HeroButton
                                key={social.name}
                                as="a"
                                href={social.href}
                                isIconOnly
                                variant="light"
                                size="sm"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </HeroButton>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
