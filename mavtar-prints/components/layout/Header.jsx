"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Button as HeroButton
} from "@heroui/react";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ui/ThemeToggle";

// Main navigation links
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [cartCount, setCartCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
            position="sticky"
            classNames={{
                base: "bg-background border-b border-border",
                wrapper: "site-container w-full",
                item: "data-[active=true]:text-primary",
            }}
            height="4rem"
        >
            {/* Left: Logo */}
            <NavbarContent justify="start" className="gap-4 !flex-grow-0">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                <NavbarBrand as={Link} href="/" className="gap-2 flex-grow-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/logo.png"
                            alt="Mavtar Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="hidden sm:block text-lg font-bold text-foreground whitespace-nowrap">
                        Mavtar Printing Press
                    </span>
                </NavbarBrand>
            </NavbarContent>

            {/* Center: Category Navigation */}
            <NavbarContent className="hidden lg:flex gap-4 xl:gap-6 flex-grow justify-center" justify="center">
                {navLinks.map((link) => (
                    <NavbarItem key={link.name}>
                        <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Right: Actions */}
            <NavbarContent justify="end" className="gap-2 !flex-grow-0">

                {/* Theme Toggle */}
                <NavbarItem>
                    <ThemeToggle />
                </NavbarItem>

                {/* Cart */}
                <NavbarItem>
                    <HeroButton
                        as={Link}
                        href="/cart"
                        isIconOnly
                        variant="light"
                        aria-label="Shopping Cart"
                        radius="lg"
                        className="relative"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {cartCount > 0 && (
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white text-xs">
                                {cartCount}
                            </Badge>
                        )}
                    </HeroButton>
                </NavbarItem>

                {/* Login/Signup */}
                <NavbarItem>
                    <HeroButton
                        as={Link}
                        href="/login"
                        variant="bordered"
                        size="sm"
                        className="hidden sm:flex font-medium"
                    >
                        Sign up
                    </HeroButton>
                    <HeroButton
                        as={Link}
                        href="/login"
                        isIconOnly
                        variant="light"
                        aria-label="Account"
                        radius="lg"
                        className="sm:hidden"
                    >
                        <User className="w-5 h-5" />
                    </HeroButton>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <HeroButton
                        as={Link}
                        href="/login"
                        color="primary"
                        size="sm"
                        className="font-medium"
                    >
                        Log in
                    </HeroButton>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className="pt-6 bg-background">
                {navLinks.map((link) => (
                    <NavbarMenuItem key={link.name}>
                        <Link
                            href={link.href}
                            className="w-full text-lg py-2 block text-foreground/80 hover:text-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
