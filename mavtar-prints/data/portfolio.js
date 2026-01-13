/**
 * Portfolio Data Layer
 * Showcase of completed projects
 */

import { Briefcase, Heart, Megaphone, Package } from "lucide-react";

export const portfolioCategories = [
    { id: "all", name: "All Work", icon: null },
    { id: "business", name: "Business", icon: Briefcase, color: "#14b8a6" },
    { id: "wedding", name: "Wedding", icon: Heart, color: "#ec4899" },
    { id: "marketing", name: "Marketing", icon: Megaphone, color: "#f59e0b" },
    { id: "custom", name: "Custom", icon: Package, color: "#8b5cf6" },
];

export const portfolioItems = [
    {
        id: 1,
        title: "Premium Business Card Set",
        category: "business",
        description: "Matte finish with spot UV coating",
        details: "350 GSM Art Card • Matte Lamination • 500 pcs",
        color: "#14b8a6",
        client: "RS Enterprises",
        year: "2024",
        image: null,
    },
    {
        id: 2,
        title: "Corporate Letterhead Suite",
        category: "business",
        description: "Complete branding package",
        details: "100 GSM Bond Paper • Full Color • 1000 pcs",
        color: "#14b8a6",
        client: "TechNext Solutions",
        year: "2024",
        image: null,
    },
    {
        id: 3,
        title: "Luxury Wedding Invitation",
        category: "wedding",
        description: "Gold foil stamping with embossing",
        details: "300 GSM Textured • Foil Print • 200 pcs",
        color: "#ec4899",
        client: "Patel Family",
        year: "2024",
        image: null,
    },
    {
        id: 4,
        title: "Traditional Wedding Card",
        category: "wedding",
        description: "Multi-page design with envelope",
        details: "Premium Paper • Offset Print • 300 pcs",
        color: "#ec4899",
        client: "Sharma Family",
        year: "2024",
        image: null,
    },
    {
        id: 5,
        title: "Product Catalog",
        category: "marketing",
        description: "32-page catalogue with glossy finish",
        details: "170 GSM Art Paper • Saddle Stitch • 500 pcs",
        color: "#f59e0b",
        client: "HomeStyle Furniture",
        year: "2024",
        image: null,
    },
    {
        id: 6,
        title: "Promotional Flyers",
        category: "marketing",
        description: "A5 flyers for retail campaign",
        details: "130 GSM Art Paper • Full Color • 5000 pcs",
        color: "#f59e0b",
        client: "BigMart Retail",
        year: "2024",
        image: null,
    },
    {
        id: 7,
        title: "Event Banners",
        category: "marketing",
        description: "Large format flex banners",
        details: "Flex Material • Digital Print • 10 pcs",
        color: "#f59e0b",
        client: "Dream Events",
        year: "2024",
        image: null,
    },
    {
        id: 8,
        title: "Product Packaging",
        category: "custom",
        description: "Custom box design and printing",
        details: "Corrugated Box • Offset Print • 1000 pcs",
        color: "#8b5cf6",
        client: "EcoLife Products",
        year: "2024",
        image: null,
    },
    {
        id: 9,
        title: "Custom Labels",
        category: "custom",
        description: "Product labels with special finish",
        details: "Sticker Paper • Die Cut • 5000 pcs",
        color: "#8b5cf6",
        client: "Organic Essentials",
        year: "2024",
        image: null,
    },
    {
        id: 10,
        title: "Corporate ID Cards",
        category: "business",
        description: "PVC cards with lanyards",
        details: "PVC Material • 200 pcs",
        color: "#14b8a6",
        client: "Global Tech India",
        year: "2024",
        image: null,
    },
    {
        id: 11,
        title: "Restaurant Menu Cards",
        category: "custom",
        description: "Laminated menu with premium finish",
        details: "350 GSM • Matte Lamination • 50 pcs",
        color: "#8b5cf6",
        client: "Spice Garden",
        year: "2024",
        image: null,
    },
    {
        id: 12,
        title: "Exhibition Standees",
        category: "marketing",
        description: "Roll-up standees for trade show",
        details: "Premium Vinyl • 3x6 ft • 5 pcs",
        color: "#f59e0b",
        client: "InnoTech Expo",
        year: "2024",
        image: null,
    },
];

// Helper functions
export function getAllPortfolioItems() {
    return portfolioItems;
}

export function getPortfolioByCategory(categoryId) {
    if (categoryId === "all") return portfolioItems;
    return portfolioItems.filter(item => item.category === categoryId);
}

export function getPortfolioCategories() {
    return portfolioCategories;
}

export function getPortfolioItemById(id) {
    return portfolioItems.find(item => item.id === parseInt(id));
}

export function getRecentPortfolioItems(count = 6) {
    return portfolioItems.slice(0, count);
}
