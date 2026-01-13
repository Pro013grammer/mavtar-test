"use client";

import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button as HeroButton } from "@heroui/react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <HeroButton
            onClick={toggleTheme}
            isIconOnly
            variant="light"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            radius="lg"
            className="relative overflow-hidden"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Moon className="w-5 h-5" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Sun className="w-5 h-5" />
            </motion.div>
        </HeroButton>
    );
}
