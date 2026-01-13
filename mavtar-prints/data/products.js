/**
 * Products Data Layer
 * Central source of truth for all products
 */

export const products = [
    // Visiting Cards
    {
        id: 1,
        slug: "premium-visiting-card",
        name: "Premium Visiting Card",
        category: "visiting-cards",
        subCategory: "premium",
        type: "print", // print | digital | hybrid
        price: 499,
        originalPrice: 699,
        unit: "per 100 pcs",
        rating: 4.8,
        reviews: 128,
        likes: 256,
        badge: "Bestseller",
        image: "/products/visiting-1.jpg",
        images: ["/products/visiting-1.jpg"],
        colors: ["#14b8a6", "#0d9488"],
        description: "Premium matte finish visiting cards with spot UV coating. Perfect for making a professional first impression.",
        features: [
            "350 GSM Art Card",
            "Matte/Glossy Lamination",
            "Spot UV on logo (optional)",
            "Both side printing",
            "Standard size: 3.5 x 2 inches",
        ],
        specifications: {
            paperType: "350 GSM Art Card",
            finish: "Matte/Glossy Lamination",
            size: "3.5 x 2 inches",
            printSides: "Both sides",
            turnaround: "3-5 business days",
        },
        options: {
            quantity: [100, 250, 500, 1000, 2000],
            finish: ["Matte", "Glossy", "Spot UV"],
            corners: ["Square", "Rounded"],
        },
    },
    {
        id: 2,
        slug: "gold-foil-visiting-card",
        name: "Gold Foil Visiting Card",
        category: "visiting-cards",
        subCategory: "gold-foil",
        type: "print",
        price: 799,
        originalPrice: 999,
        unit: "per 100 pcs",
        rating: 4.9,
        reviews: 89,
        likes: 189,
        badge: "Premium",
        image: "/products/visiting-1.jpg",
        images: ["/products/visiting-1.jpg"],
        colors: ["#d4af37", "#c9a227"],
        description: "Luxurious gold foil stamped visiting cards that make a statement. Premium quality for discerning professionals.",
        features: [
            "400 GSM Premium Card",
            "Gold/Silver Foil Stamping",
            "Soft Touch Lamination",
            "Embossed texture available",
            "Custom die-cut shapes",
        ],
        specifications: {
            paperType: "400 GSM Premium Card",
            finish: "Soft Touch + Foil",
            size: "3.5 x 2 inches",
            printSides: "Both sides",
            turnaround: "5-7 business days",
        },
        options: {
            quantity: [100, 250, 500],
            foilColor: ["Gold", "Silver", "Rose Gold"],
            finish: ["Soft Touch", "Velvet"],
        },
    },
    {
        id: 3,
        slug: "matte-finish-card",
        name: "Matte Finish Card",
        category: "visiting-cards",
        subCategory: "matt",
        type: "print",
        price: 399,
        originalPrice: 499,
        unit: "per 100 pcs",
        rating: 4.7,
        reviews: 215,
        likes: 89,
        image: "/products/visiting-1.jpg",
        images: ["/products/visiting-1.jpg"],
        colors: ["#6b7280", "#4b5563"],
        description: "Elegant matte finish cards with a professional look. Great value for quality business cards.",
        features: [
            "300 GSM Art Card",
            "Matte Lamination",
            "Both side printing",
            "Standard size",
        ],
        specifications: {
            paperType: "300 GSM Art Card",
            finish: "Matte Lamination",
            size: "3.5 x 2 inches",
            printSides: "Both sides",
            turnaround: "3-4 business days",
        },
        options: {
            quantity: [100, 250, 500, 1000],
        },
    },
    {
        id: 4,
        slug: "spot-uv-card",
        name: "Spot UV Visiting Card",
        category: "visiting-cards",
        subCategory: "spot-uv",
        type: "print",
        price: 599,
        originalPrice: 749,
        unit: "per 100 pcs",
        rating: 4.6,
        reviews: 67,
        likes: 145,
        badge: "Popular",
        image: "/products/visiting-1.jpg",
        images: ["/products/visiting-1.jpg"],
        colors: ["#1f2937", "#111827"],
        description: "Striking spot UV cards with selective gloss coating that catches the eye.",
        features: [
            "350 GSM Art Card",
            "Matte Base + Spot UV",
            "Custom UV patterns",
            "Both side printing",
        ],
        specifications: {
            paperType: "350 GSM Art Card",
            finish: "Matte + Spot UV",
            size: "3.5 x 2 inches",
            printSides: "Both sides",
            turnaround: "4-6 business days",
        },
        options: {
            quantity: [100, 250, 500],
            uvPattern: ["Logo Only", "Full Design", "Custom"],
        },
    },
    // Wedding Cards
    {
        id: 5,
        slug: "royal-wedding-card",
        name: "Royal Wedding Invitation",
        category: "wedding-invitation",
        subCategory: "hindu",
        type: "hybrid",
        price: 150,
        originalPrice: 200,
        unit: "per card",
        rating: 4.9,
        reviews: 312,
        likes: 489,
        badge: "Bestseller",
        image: "/products/wedding-1.jpg",
        images: ["/products/wedding-1.jpg"],
        colors: ["#8b5cf6", "#ec4899"],
        description: "Elegant and luxurious wedding card design featuring intricate patterns and premium typography.",
        features: [
            "300 GSM Textured Paper",
            "Gold Foil Stamping",
            "Envelope included",
            "RSVP card option",
            "Custom design service",
        ],
        specifications: {
            paperType: "300 GSM Textured",
            finish: "Foil + Embossing",
            size: "5 x 7 inches",
            includes: "Envelope",
            turnaround: "7-10 business days",
        },
        options: {
            quantity: [50, 100, 200, 300, 500],
            foilColor: ["Gold", "Silver", "Rose Gold"],
            extras: ["RSVP Card", "Thank You Card", "Menu Card"],
        },
    },
    {
        id: 6,
        slug: "traditional-hindu-wedding-card",
        name: "Traditional Hindu Wedding Card",
        category: "wedding-invitation",
        subCategory: "hindu",
        type: "print",
        price: 75,
        originalPrice: 100,
        unit: "per card",
        rating: 4.8,
        reviews: 428,
        likes: 567,
        image: "/products/wedding-1.jpg",
        images: ["/products/wedding-1.jpg"],
        colors: ["#dc2626", "#b91c1c"],
        description: "Traditional red and gold Hindu wedding invitation with classic motifs.",
        features: [
            "Premium Paper",
            "Traditional Design",
            "Envelope included",
            "Multi-page option",
        ],
        specifications: {
            paperType: "250 GSM Art Card",
            finish: "Matte + Foil",
            size: "5 x 7 inches",
            includes: "Envelope",
            turnaround: "5-7 business days",
        },
        options: {
            quantity: [50, 100, 200, 500],
        },
    },
    // Banners
    {
        id: 7,
        slug: "flex-banner-3x6",
        name: "Flex Banner 3x6 ft",
        category: "banners-flex",
        subCategory: "flex",
        type: "print",
        price: 299,
        originalPrice: 399,
        unit: "per piece",
        rating: 4.7,
        reviews: 89,
        likes: 134,
        image: "/products/banner-1.jpg",
        images: ["/products/banner-1.jpg"],
        colors: ["#f59e0b", "#d97706"],
        description: "High-quality flex banner perfect for outdoor advertising and events.",
        features: [
            "280 GSM Flex Material",
            "Weather resistant",
            "Vibrant colors",
            "Eyelets included",
        ],
        specifications: {
            material: "280 GSM Flex",
            size: "3 x 6 feet",
            finish: "Gloss",
            durability: "1 year outdoor",
            turnaround: "2-3 business days",
        },
        options: {
            size: ["3x4 ft", "3x6 ft", "4x8 ft", "Custom"],
        },
    },
    {
        id: 8,
        slug: "roll-up-standee",
        name: "Roll-up Standee",
        category: "banners-flex",
        subCategory: "standee",
        type: "print",
        price: 1499,
        originalPrice: 1999,
        unit: "per piece",
        rating: 4.8,
        reviews: 156,
        likes: 234,
        badge: "Popular",
        image: "/products/banner-1.jpg",
        images: ["/products/banner-1.jpg"],
        colors: ["#3b82f6", "#2563eb"],
        description: "Portable roll-up standee with retractable mechanism. Perfect for exhibitions and events.",
        features: [
            "Premium print quality",
            "Aluminum stand included",
            "Carry bag included",
            "Easy setup",
        ],
        specifications: {
            material: "Premium Vinyl",
            size: "2.5 x 6 feet",
            stand: "Aluminum retractable",
            durability: "2 years indoor",
            turnaround: "3-4 business days",
        },
        options: {
            size: ["2x5 ft", "2.5x6 ft", "3x6 ft"],
        },
    },
    // Stickers
    {
        id: 9,
        slug: "product-labels",
        name: "Product Labels",
        category: "stickers",
        subCategory: "product",
        type: "print",
        price: 999,
        originalPrice: 1299,
        unit: "per 500 pcs",
        rating: 4.6,
        reviews: 78,
        likes: 156,
        image: "/products/stickers-1.jpg",
        images: ["/products/stickers-1.jpg"],
        colors: ["#8b5cf6", "#7c3aed"],
        description: "Custom product labels for branding your products professionally.",
        features: [
            "Premium sticker paper",
            "Waterproof option",
            "Custom shapes",
            "High-resolution print",
        ],
        specifications: {
            material: "Sticker Paper",
            finish: "Matte/Glossy",
            size: "Custom",
            durability: "Water resistant",
            turnaround: "3-5 business days",
        },
        options: {
            quantity: [500, 1000, 2000, 5000],
            finish: ["Matte", "Glossy", "Waterproof"],
            shape: ["Rectangle", "Circle", "Custom"],
        },
    },
    {
        id: 10,
        slug: "die-cut-stickers",
        name: "Die-Cut Stickers",
        category: "stickers",
        subCategory: "die-cut",
        type: "print",
        price: 1499,
        originalPrice: 1899,
        unit: "per 500 pcs",
        rating: 4.8,
        reviews: 92,
        likes: 178,
        badge: "Popular",
        image: "/products/stickers-1.jpg",
        images: ["/products/stickers-1.jpg"],
        colors: ["#ec4899", "#db2777"],
        description: "Custom shaped stickers cut to your exact design outline.",
        features: [
            "Custom die-cut shapes",
            "Premium vinyl material",
            "Weather resistant",
            "Easy peel backing",
        ],
        specifications: {
            material: "Vinyl",
            finish: "Glossy",
            size: "Custom shape",
            durability: "3 years outdoor",
            turnaround: "5-7 business days",
        },
        options: {
            quantity: [500, 1000, 2000],
            material: ["Paper", "Vinyl", "Holographic"],
        },
    },
    // Brochures
    {
        id: 11,
        slug: "trifold-brochure",
        name: "Tri-Fold Brochure",
        category: "brochures",
        subCategory: "tri-fold",
        type: "print",
        price: 2499,
        originalPrice: 2999,
        unit: "per 250 pcs",
        rating: 4.7,
        reviews: 134,
        likes: 212,
        image: "/products/brochure-1.jpg",
        images: ["/products/brochure-1.jpg"],
        colors: ["#10b981", "#059669"],
        description: "Professional tri-fold brochures for marketing your business.",
        features: [
            "170 GSM Art Paper",
            "Full color printing",
            "Matte/Glossy finish",
            "Custom design available",
        ],
        specifications: {
            paperType: "170 GSM Art Paper",
            size: "A4 (folded to DL)",
            finish: "Matte/Glossy",
            fold: "Tri-fold",
            turnaround: "4-5 business days",
        },
        options: {
            quantity: [250, 500, 1000, 2000],
            finish: ["Matte", "Glossy"],
            paper: ["130 GSM", "170 GSM", "200 GSM"],
        },
    },
    // ID Cards
    {
        id: 12,
        slug: "pvc-id-card",
        name: "PVC ID Card with Holder",
        category: "id-cards",
        subCategory: "with-holder",
        type: "print",
        price: 599,
        originalPrice: 799,
        unit: "per 10 pcs",
        rating: 4.5,
        reviews: 56,
        likes: 87,
        image: "/products/id-cards-1.jpg",
        images: ["/products/id-cards-1.jpg"],
        colors: ["#3b82f6", "#1d4ed8"],
        description: "Professional PVC ID cards with lanyard and holder included.",
        features: [
            "Premium PVC material",
            "Credit card size",
            "Lanyard included",
            "ID holder included",
        ],
        specifications: {
            material: "PVC",
            size: "CR80 (Credit Card)",
            thickness: "0.76mm",
            includes: "Lanyard + Holder",
            turnaround: "3-4 business days",
        },
        options: {
            quantity: [10, 25, 50, 100],
            lanyardColor: ["Black", "Blue", "Red", "Green"],
        },
    },
];

// Digital download products
export const digitalProducts = [
    {
        id: 101,
        slug: "wedding-card-template-royal",
        name: "Royal Wedding Card Template",
        category: "wedding-invitation",
        type: "digital",
        price: 499,
        originalPrice: 799,
        rating: 4.9,
        reviews: 128,
        badge: "Bestseller",
        image: "/products/wedding-1.jpg",
        colors: ["#8b5cf6", "#ec4899"],
        description: "Elegant wedding card design template. Fully editable in Adobe Illustrator & Photoshop.",
        features: [
            "High-resolution print-ready files (300 DPI)",
            "Fully editable in Adobe Illustrator & Photoshop",
            "Multiple color variations included",
            "Matching envelope design",
            "24/7 customer support",
        ],
        specifications: {
            format: "AI, PSD, PDF, PNG",
            dimensions: "5x7 inches (with bleed)",
            colorMode: "CMYK (Print Ready)",
            resolution: "300 DPI",
            fonts: "Included",
        },
        downloadInfo: {
            fileSize: "25 MB",
            downloadLimit: 5,
            validity: "Lifetime access",
        },
    },
];

// Helper functions
export function getProductById(id) {
    return products.find(p => p.id === parseInt(id)) || digitalProducts.find(p => p.id === parseInt(id));
}

export function getProductBySlug(slug) {
    return products.find(p => p.slug === slug) || digitalProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
    return products.filter(p => p.category === categorySlug);
}

export function getProductsBySubCategory(categorySlug, subCategorySlug) {
    return products.filter(p => p.category === categorySlug && p.subCategory === subCategorySlug);
}

export function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(
        p => p.name.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery)
    );
}

export function getFeaturedProducts() {
    return products.filter(p => p.badge).slice(0, 8);
}

export function getRecentProducts() {
    return [...products].reverse().slice(0, 8);
}

export function getPopularProducts() {
    return [...products].sort((a, b) => b.likes - a.likes).slice(0, 8);
}

export function getAllProducts() {
    return [...products, ...digitalProducts];
}
