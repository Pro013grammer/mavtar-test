/**
 * Services Data Layer
 * Central source of truth for all services and sub-services
 */

import { Briefcase, Heart, Megaphone, Package } from "lucide-react";

// Main service categories
export const services = [
    {
        id: "business",
        slug: "business-printing",
        icon: Briefcase,
        title: "Business Printing",
        shortTitle: "Business",
        description: "Professional printing solutions for brands, offices, and corporate needs. Make a lasting impression with premium quality materials.",
        features: [
            "Premium visiting cards with matte, glossy, or textured finishes",
            "Letterheads and envelopes with custom branding",
            "Corporate stationery sets for a unified brand identity",
            "Invoice books, receipt pads, and billing materials",
            "Company folders and presentation materials",
            "Rubber stamps and official seals",
        ],
        color: "#14b8a6",
    },
    {
        id: "wedding",
        slug: "wedding-printing",
        icon: Heart,
        title: "Wedding & Invitation Printing",
        shortTitle: "Wedding",
        description: "Elegant and customized prints for your special occasions. From traditional to contemporary designs, we bring your celebrations to life.",
        features: [
            "Premium wedding invitation cards with luxury finishes",
            "Engagement party and save-the-date cards",
            "Religious ceremony invitations",
            "RSVP cards and envelope sets",
            "Thank you cards and gift tags",
            "Custom sizes, textures, and foil stamping options",
        ],
        color: "#ec4899",
    },
    {
        id: "marketing",
        slug: "marketing-printing",
        icon: Megaphone,
        title: "Marketing & Promotional Printing",
        shortTitle: "Marketing",
        description: "High-impact marketing materials that help your brand stand out. From brochures to large-format banners, we've got you covered.",
        features: [
            "Brochures and flyers in various sizes",
            "Posters and large-format banners",
            "Catalogs and product booklets",
            "Promotional standees and danglers",
            "Menu cards for restaurants and cafes",
            "Event materials and signage",
        ],
        color: "#f59e0b",
    },
    {
        id: "custom",
        slug: "custom-printing",
        icon: Package,
        title: "Custom & Bulk Printing",
        shortTitle: "Custom",
        description: "Tailored printing solutions for unique requirements. Whether it's bulk orders or specialized projects, we deliver with precision.",
        features: [
            "Custom packaging and product labels",
            "Bulk printing with volume discounts",
            "Large-format and wide-format printing",
            "Custom paper stock and specialty finishes",
            "Personalized printing projects",
            "Industrial and commercial printing needs",
        ],
        color: "#8b5cf6",
    },
];

// Sub-services mapped by service ID
export const subServices = {
    "business": [
        {
            id: "visiting-cards",
            slug: "visiting-cards",
            name: "Visiting Cards",
            description: "Premium business cards in various finishes - matte, glossy, textured, spot UV, and foil stamping.",
            serviceType: "standard",
            priceRange: "₹299 - ₹1,499",
            minQuantity: 100,
        },
        {
            id: "letterheads",
            slug: "letterheads",
            name: "Letterheads",
            description: "Professional letterheads with custom branding and premium paper options.",
            serviceType: "standard",
            priceRange: "₹999 - ₹2,999",
            minQuantity: 250,
        },
        {
            id: "envelopes",
            slug: "envelopes",
            name: "Envelopes",
            description: "Custom printed envelopes in various sizes with your company branding.",
            serviceType: "standard",
            priceRange: "₹799 - ₹1,999",
            minQuantity: 250,
        },
        {
            id: "invoice-books",
            slug: "invoice-books",
            name: "Invoice Books & Pads",
            description: "Custom invoice books, receipt pads, and billing materials with numbering.",
            serviceType: "custom",
            priceRange: "₹1,499+",
            minQuantity: 5,
        },
        {
            id: "company-folders",
            slug: "company-folders",
            name: "Company Folders",
            description: "Professional presentation folders with pockets and custom designs.",
            serviceType: "custom",
            priceRange: "₹2,999+",
            minQuantity: 50,
        },
        {
            id: "rubber-stamps",
            slug: "rubber-stamps",
            name: "Rubber Stamps & Seals",
            description: "Official rubber stamps and company seals for documents.",
            serviceType: "standard",
            priceRange: "₹299 - ₹999",
            minQuantity: 1,
        },
    ],
    "wedding": [
        {
            id: "wedding-cards",
            slug: "wedding-cards",
            name: "Wedding Invitation Cards",
            description: "Luxurious wedding cards with premium finishes, foil stamping, and embossing.",
            serviceType: "custom",
            priceRange: "₹50 - ₹500 per card",
            minQuantity: 50,
        },
        {
            id: "engagement-cards",
            slug: "engagement-cards",
            name: "Engagement Cards",
            description: "Beautiful engagement party invitations and save-the-date cards.",
            serviceType: "custom",
            priceRange: "₹30 - ₹200 per card",
            minQuantity: 50,
        },
        {
            id: "religious-invitations",
            slug: "religious-invitations",
            name: "Religious Ceremony Cards",
            description: "Traditional invitations for religious ceremonies - Hindu, Muslim, Christian.",
            serviceType: "custom",
            priceRange: "₹40 - ₹300 per card",
            minQuantity: 50,
        },
        {
            id: "rsvp-cards",
            slug: "rsvp-cards",
            name: "RSVP Cards",
            description: "Matching RSVP cards and envelope sets for your invitations.",
            serviceType: "standard",
            priceRange: "₹15 - ₹50 per card",
            minQuantity: 50,
        },
        {
            id: "thank-you-cards",
            slug: "thank-you-cards",
            name: "Thank You Cards",
            description: "Elegant thank you cards and gift tags for your guests.",
            serviceType: "standard",
            priceRange: "₹10 - ₹40 per card",
            minQuantity: 50,
        },
    ],
    "marketing": [
        {
            id: "brochures",
            slug: "brochures",
            name: "Brochures & Flyers",
            description: "High-quality brochures and flyers in various sizes and folds.",
            serviceType: "standard",
            priceRange: "₹2 - ₹25 per piece",
            minQuantity: 250,
        },
        {
            id: "posters",
            slug: "posters",
            name: "Posters",
            description: "Eye-catching posters in all sizes from A4 to large format.",
            serviceType: "standard",
            priceRange: "₹50 - ₹500 per poster",
            minQuantity: 10,
        },
        {
            id: "banners",
            slug: "banners",
            name: "Banners & Flex",
            description: "Large format flex banners, vinyl banners, and standees.",
            serviceType: "standard",
            priceRange: "₹15 - ₹50 per sq.ft",
            minQuantity: 1,
        },
        {
            id: "catalogs",
            slug: "catalogs",
            name: "Catalogs & Booklets",
            description: "Multi-page product catalogs with professional binding.",
            serviceType: "custom",
            priceRange: "₹50 - ₹500 per copy",
            minQuantity: 50,
        },
        {
            id: "menu-cards",
            slug: "menu-cards",
            name: "Menu Cards",
            description: "Restaurant and cafe menu cards with lamination options.",
            serviceType: "standard",
            priceRange: "₹100 - ₹500 per menu",
            minQuantity: 10,
        },
        {
            id: "standees",
            slug: "standees",
            name: "Standees & Danglers",
            description: "Promotional standees and hanging danglers for retail.",
            serviceType: "standard",
            priceRange: "₹500 - ₹3,000",
            minQuantity: 1,
        },
    ],
    "custom": [
        {
            id: "packaging",
            slug: "packaging",
            name: "Custom Packaging",
            description: "Product boxes, gift boxes, and custom packaging solutions.",
            serviceType: "custom",
            priceRange: "Quote required",
            minQuantity: 100,
        },
        {
            id: "labels",
            slug: "labels",
            name: "Product Labels",
            description: "Custom product labels, stickers, and roll labels.",
            serviceType: "standard",
            priceRange: "₹1 - ₹10 per label",
            minQuantity: 500,
        },
        {
            id: "bulk-printing",
            slug: "bulk-printing",
            name: "Bulk Printing",
            description: "Volume printing with special discounts for large orders.",
            serviceType: "custom",
            priceRange: "Quote required",
            minQuantity: 1000,
        },
        {
            id: "large-format",
            slug: "large-format",
            name: "Large Format Printing",
            description: "Wide format printing for exhibitions, events, and displays.",
            serviceType: "custom",
            priceRange: "Quote required",
            minQuantity: 1,
        },
        {
            id: "specialty-finishes",
            slug: "specialty-finishes",
            name: "Specialty Finishes",
            description: "Special finishes like embossing, debossing, die-cutting, and foiling.",
            serviceType: "custom",
            priceRange: "Quote required",
            minQuantity: 50,
        },
    ],
};

// Helper functions
export function getServiceBySlug(slug) {
    return services.find(s => s.slug === slug) || services.find(s => s.id === slug);
}

export function getServiceById(id) {
    return services.find(s => s.id === id);
}

export function getSubServices(serviceId) {
    return subServices[serviceId] || [];
}

export function getSubServiceBySlug(serviceId, subServiceSlug) {
    const subs = subServices[serviceId] || [];
    return subs.find(s => s.slug === subServiceSlug);
}

export function getAllSubServices() {
    return Object.values(subServices).flat();
}
