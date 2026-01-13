/**
 * Categories Data Layer
 * Product categories for the marketplace
 */

export const categories = {
    "visiting-cards": {
        id: "visiting-cards",
        name: "Visiting Cards",
        description: "Professional business cards for every occasion",
        heroImage: "/products/visiting-1.jpg",
        icon: "CreditCard",
        color: "#14b8a6",
        subCategories: [
            { name: "Standard Cards", slug: "standard" },
            { name: "Premium Cards", slug: "premium" },
            { name: "Spot UV", slug: "spot-uv" },
            { name: "Matt Finish", slug: "matt" },
            { name: "Texture Cards", slug: "texture" },
            { name: "Gold Foil", slug: "gold-foil" },
        ],
    },
    "banners-flex": {
        id: "banners-flex",
        name: "Banners & Flex",
        description: "Large format printing for maximum impact",
        heroImage: "/products/banner-1.jpg",
        icon: "Flag",
        color: "#f59e0b",
        subCategories: [
            { name: "Flex Banners", slug: "flex" },
            { name: "Vinyl Banners", slug: "vinyl" },
            { name: "Roll-up Standees", slug: "standee" },
            { name: "Backlit", slug: "backlit" },
            { name: "Mesh Banners", slug: "mesh" },
        ],
    },
    "wedding-invitation": {
        id: "wedding-invitation",
        name: "Wedding & Invitation Cards",
        description: "Beautiful cards for your special moments",
        heroImage: "/products/wedding-1.jpg",
        icon: "Heart",
        color: "#ec4899",
        subCategories: [
            { name: "Hindu Wedding", slug: "hindu" },
            { name: "Muslim Wedding", slug: "muslim" },
            { name: "Christian Wedding", slug: "christian" },
            { name: "Birthday", slug: "birthday" },
            { name: "Anniversary", slug: "anniversary" },
            { name: "Engagement", slug: "engagement" },
        ],
    },
    "stickers": {
        id: "stickers",
        name: "Stickers & Labels",
        description: "Custom stickers for products and branding",
        heroImage: "/products/stickers-1.jpg",
        icon: "Sticker",
        color: "#8b5cf6",
        subCategories: [
            { name: "Product Labels", slug: "product" },
            { name: "Die-Cut Stickers", slug: "die-cut" },
            { name: "Roll Stickers", slug: "roll" },
            { name: "Holographic", slug: "holographic" },
            { name: "Vinyl Stickers", slug: "vinyl" },
        ],
    },
    "id-cards": {
        id: "id-cards",
        name: "ID Cards",
        description: "Employee ID cards and access cards",
        heroImage: "/products/id-cards-1.jpg",
        icon: "IdCard",
        color: "#3b82f6",
        subCategories: [
            { name: "PVC Cards", slug: "pvc" },
            { name: "Paper Cards", slug: "paper" },
            { name: "With Holder", slug: "with-holder" },
            { name: "RFID Cards", slug: "rfid" },
        ],
    },
    "posters": {
        id: "posters",
        name: "Posters",
        description: "Eye-catching posters for events and marketing",
        heroImage: "/products/poster-1.jpg",
        icon: "Image",
        color: "#ef4444",
        subCategories: [
            { name: "A4 Posters", slug: "a4" },
            { name: "A3 Posters", slug: "a3" },
            { name: "A2 Posters", slug: "a2" },
            { name: "Custom Size", slug: "custom" },
        ],
    },
    "brochures": {
        id: "brochures",
        name: "Brochures & Flyers",
        description: "Marketing materials for your business",
        heroImage: "/products/brochure-1.jpg",
        icon: "FileText",
        color: "#10b981",
        subCategories: [
            { name: "Bi-Fold", slug: "bi-fold" },
            { name: "Tri-Fold", slug: "tri-fold" },
            { name: "Flyers", slug: "flyers" },
            { name: "Leaflets", slug: "leaflets" },
        ],
    },
    "packaging": {
        id: "packaging",
        name: "Packaging",
        description: "Custom packaging and boxes for your products",
        heroImage: "/products/packaging-1.jpg",
        icon: "Package",
        color: "#6366f1",
        subCategories: [
            { name: "Product Boxes", slug: "product-boxes" },
            { name: "Gift Boxes", slug: "gift-boxes" },
            { name: "Mailer Boxes", slug: "mailer-boxes" },
            { name: "Display Boxes", slug: "display-boxes" },
        ],
    },
};

// Helper functions
export function getCategoryBySlug(slug) {
    return categories[slug] || null;
}

export function getAllCategories() {
    return Object.values(categories);
}

export function getCategoryIds() {
    return Object.keys(categories);
}

export function getSubCategoriesForCategory(categorySlug) {
    const category = categories[categorySlug];
    return category ? category.subCategories : [];
}
