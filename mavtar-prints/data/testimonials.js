/**
 * Testimonials Data Layer
 * Customer reviews and testimonials
 */

export const testimonials = [
    {
        id: 1,
        name: "Rajesh Sharma",
        role: "Business Owner",
        company: "RS Enterprises",
        location: "Surat",
        avatar: null,
        rating: 5,
        text: "Exceptional quality and service! We've been ordering our business cards and letterheads from Mavtar for years. The print quality is outstanding and delivery is always on time.",
        product: "Business Cards",
        date: "2024-12-15",
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Bride",
        company: null,
        location: "Ahmedabad",
        avatar: null,
        rating: 5,
        text: "Our wedding cards were absolutely beautiful! The team helped us customize every detail and the gold foil finishing was stunning. Received so many compliments from our guests.",
        product: "Wedding Cards",
        date: "2024-11-28",
    },
    {
        id: 3,
        name: "Amit Desai",
        role: "Marketing Manager",
        company: "TechNext Solutions",
        location: "Mumbai",
        avatar: null,
        rating: 5,
        text: "We ordered 5000 brochures for our product launch and the quality exceeded expectations. The colors were vibrant and the paper quality was premium. Will definitely order again!",
        product: "Brochures",
        date: "2024-12-01",
    },
    {
        id: 4,
        name: "Sunita Mehta",
        role: "Event Planner",
        company: "Dream Events",
        location: "Surat",
        avatar: null,
        rating: 5,
        text: "Quick turnaround and excellent print quality. We regularly order banners and standees for our events. Mavtar never disappoints. Highly recommended!",
        product: "Banners & Standees",
        date: "2024-12-10",
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Restaurant Owner",
        company: "Spice Garden",
        location: "Vadodara",
        avatar: null,
        rating: 4,
        text: "Great menu cards with lamination that lasts. The design team was helpful in making our menus look professional. Good value for money.",
        product: "Menu Cards",
        date: "2024-11-20",
    },
    {
        id: 6,
        name: "Neha Joshi",
        role: "Startup Founder",
        company: "EcoLife Products",
        location: "Surat",
        avatar: null,
        rating: 5,
        text: "The product labels for our organic skincare line look amazing! Waterproof, durable, and perfectly aligned. Customer service was also very responsive.",
        product: "Product Labels",
        date: "2024-12-05",
    },
    {
        id: 7,
        name: "Karan Malhotra",
        role: "HR Manager",
        company: "Global Tech India",
        location: "Mumbai",
        avatar: null,
        rating: 5,
        text: "Ordered 500 PVC ID cards with lanyards for our employees. Quality is excellent and delivery was superfast. Very professional service.",
        product: "ID Cards",
        date: "2024-11-15",
    },
    {
        id: 8,
        name: "Anita Kapoor",
        role: "Homemaker",
        company: null,
        location: "Rajkot",
        avatar: null,
        rating: 5,
        text: "Ordered invitation cards for my son's birthday party. The design options were creative and the cards came out beautifully. Kids loved them!",
        product: "Invitation Cards",
        date: "2024-12-08",
    },
];

// Helper functions
export function getAllTestimonials() {
    return testimonials;
}

export function getFeaturedTestimonials(count = 4) {
    return testimonials.filter(t => t.rating === 5).slice(0, count);
}

export function getTestimonialsByProduct(productType) {
    return testimonials.filter(t => t.product.toLowerCase().includes(productType.toLowerCase()));
}

export function getAverageRating() {
    const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
    return (sum / testimonials.length).toFixed(1);
}

export function getTotalReviewCount() {
    return testimonials.length;
}
