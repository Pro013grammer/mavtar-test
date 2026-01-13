import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors from palette
                'brand-purple': '#61358C',
                'brand-cyan': '#11B4D9',
                'brand-green': '#0D8C39',
                'brand-orange': '#F27F3D',
                'brand-red': '#F23838',
            },
        },
    },
    darkMode: "class",
    plugins: [heroui({
        themes: {
            light: {
                colors: {
                    background: "#ffffff",
                    foreground: "#171717",
                    primary: {
                        50: "#f5f0fa",
                        100: "#e9dbf4",
                        200: "#d4b8e9",
                        300: "#be94de",
                        400: "#a970d3",
                        500: "#8b5ebd",
                        600: "#61358C",
                        700: "#4a2870",
                        800: "#351c52",
                        900: "#211035",
                        DEFAULT: "#61358C",
                        foreground: "#ffffff",
                    },
                    secondary: {
                        50: "#e6f7fb",
                        100: "#cceff7",
                        200: "#99dfef",
                        300: "#66cfe7",
                        400: "#33bfdf",
                        500: "#11B4D9",
                        600: "#0e90ae",
                        700: "#0a6c82",
                        800: "#074857",
                        900: "#03242b",
                        DEFAULT: "#11B4D9",
                        foreground: "#ffffff",
                    },
                    success: {
                        DEFAULT: "#0D8C39",
                        foreground: "#ffffff",
                    },
                    warning: {
                        DEFAULT: "#F27F3D",
                        foreground: "#ffffff",
                    },
                    danger: {
                        DEFAULT: "#F23838",
                        foreground: "#ffffff",
                    },
                },
            },
            dark: {
                colors: {
                    background: "#0a0a0a",
                    foreground: "#fafafa",
                    primary: {
                        50: "#f5f0fa",
                        100: "#e9dbf4",
                        200: "#d4b8e9",
                        300: "#be94de",
                        400: "#a970d3",
                        500: "#8b5ebd",
                        600: "#61358C",
                        700: "#4a2870",
                        800: "#351c52",
                        900: "#211035",
                        DEFAULT: "#8b5ebd",
                        foreground: "#ffffff",
                    },
                    secondary: {
                        50: "#e6f7fb",
                        100: "#cceff7",
                        200: "#99dfef",
                        300: "#66cfe7",
                        400: "#33bfdf",
                        500: "#11B4D9",
                        600: "#0e90ae",
                        700: "#0a6c82",
                        800: "#074857",
                        900: "#03242b",
                        DEFAULT: "#11B4D9",
                        foreground: "#ffffff",
                    },
                    success: {
                        DEFAULT: "#0D8C39",
                        foreground: "#ffffff",
                    },
                    warning: {
                        DEFAULT: "#F27F3D",
                        foreground: "#ffffff",
                    },
                    danger: {
                        DEFAULT: "#F23838",
                        foreground: "#ffffff",
                    },
                },
            },
        },
    })],
};
