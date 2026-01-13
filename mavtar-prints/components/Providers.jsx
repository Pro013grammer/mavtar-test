"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }) {
    return (
        <ThemeProvider>
            <HeroUIProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </HeroUIProvider>
        </ThemeProvider>
    );
}
