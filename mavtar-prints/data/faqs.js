/**
 * FAQs Data Layer
 * Frequently asked questions organized by category
 */

export const faqs = [
    {
        category: "General",
        questions: [
            {
                id: "gen-1",
                q: "What printing services do you offer?",
                a: "We offer a comprehensive range of printing services including business printing (visiting cards, letterheads, stationery), wedding and invitation printing, marketing materials (brochures, flyers, banners), and custom/bulk printing solutions. Visit our Services page for complete details."
            },
            {
                id: "gen-2",
                q: "How long have you been in business?",
                a: "Mavtar Printing Press has been serving clients since 2014. With over 10 years of experience, we've completed more than 5000 projects for businesses and individuals across India."
            },
            {
                id: "gen-3",
                q: "Do you serve customers outside Surat?",
                a: "Yes! While we're based in Surat, we serve customers across India. We ship orders through reliable courier partners to ensure safe and timely delivery anywhere in the country."
            },
        ]
    },
    {
        category: "Ordering & Turnaround",
        questions: [
            {
                id: "order-1",
                q: "What is the typical turnaround time?",
                a: "Standard turnaround time varies by project: Visiting cards (3-5 business days), Wedding cards (5-7 business days), Brochures/Flyers (4-6 business days), Large format printing (2-4 business days). Rush orders are available at additional cost."
            },
            {
                id: "order-2",
                q: "What is the minimum order quantity?",
                a: "Minimum order quantities vary by product. Visiting cards start at 100 pieces, wedding cards at 50 pieces, flyers at 250 pieces. For custom projects, contact us to discuss your specific needs."
            },
            {
                id: "order-3",
                q: "How do I place an order?",
                a: "You can request a quote through our website, call us directly, or visit our office. Once you approve the quote and design proof, we'll begin production. Payment terms are discussed at the time of order confirmation."
            },
            {
                id: "order-4",
                q: "Can I track my order?",
                a: "Yes! Once your order is shipped, we'll send you a tracking number via email and SMS. You can use this to track your package in real-time."
            },
        ]
    },
    {
        category: "Design & Files",
        questions: [
            {
                id: "design-1",
                q: "Do you provide design services?",
                a: "Yes! Our in-house design team can help create custom designs for your printing projects. Design charges vary based on complexity. We also offer design revisions to ensure you're completely satisfied."
            },
            {
                id: "design-2",
                q: "What file formats do you accept?",
                a: "We accept PDF (preferred), AI (Adobe Illustrator), PSD (Photoshop), CDR (CorelDRAW), PNG, and high-resolution JPG files. For best results, submit print-ready files with 300 DPI resolution and CMYK color mode."
            },
            {
                id: "design-3",
                q: "Will I receive a proof before printing?",
                a: "Yes, we provide digital proofs for approval before proceeding with printing. For large orders, physical proofs can be arranged at an additional cost."
            },
            {
                id: "design-4",
                q: "Can you match my brand colors exactly?",
                a: "We use Pantone color matching for precise brand colors. Please provide your Pantone codes or brand guidelines, and we'll ensure accurate color reproduction."
            },
        ]
    },
    {
        category: "Paper & Finishing",
        questions: [
            {
                id: "paper-1",
                q: "What paper options are available?",
                a: "We offer various paper stocks including Art Paper (glossy/matte), Bond Paper, Textured Paper, Cardstock, and specialty papers. GSM options range from 80 GSM to 350+ GSM depending on the product."
            },
            {
                id: "paper-2",
                q: "What finishing options do you provide?",
                a: "We offer Matte/Glossy Lamination, Spot UV Coating, Foil Stamping (gold, silver, custom colors), Embossing/Debossing, Die Cutting, and various binding options for booklets and catalogs."
            },
            {
                id: "paper-3",
                q: "What's the difference between matte and glossy finish?",
                a: "Matte finish provides a smooth, non-reflective surface that's easy to write on and reduces glare. Glossy finish offers vibrant colors and a shiny appearance. Choose based on your design and intended use."
            },
        ]
    },
    {
        category: "Delivery & Payment",
        questions: [
            {
                id: "delivery-1",
                q: "Do you offer delivery?",
                a: "Yes, we deliver within Surat city and can arrange shipping across India through courier partners. Delivery charges are calculated based on location and order size. Local pickup is also available at our office."
            },
            {
                id: "delivery-2",
                q: "Is there free delivery?",
                a: "We offer free delivery within Surat city limits for orders above ₹2,000. For outstation orders, shipping charges are calculated based on weight and destination."
            },
            {
                id: "payment-1",
                q: "What are the payment options?",
                a: "We accept Cash, Bank Transfer, UPI payments, and major credit/debit cards. For large orders, partial advance payment may be required. Corporate clients can discuss credit terms."
            },
            {
                id: "payment-2",
                q: "What is your refund/reprint policy?",
                a: "If there's a printing error on our part, we offer free reprints. Customer satisfaction is our priority. Claims must be made within 48 hours of delivery with supporting evidence."
            },
        ]
    },
];

// Helper functions
export function getAllFaqs() {
    return faqs;
}

export function getFaqsByCategory(categoryName) {
    const category = faqs.find(c => c.category.toLowerCase() === categoryName.toLowerCase());
    return category ? category.questions : [];
}

export function searchFaqs(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];

    faqs.forEach(category => {
        category.questions.forEach(q => {
            if (q.q.toLowerCase().includes(lowerQuery) || q.a.toLowerCase().includes(lowerQuery)) {
                results.push({ ...q, category: category.category });
            }
        });
    });

    return results;
}

export function getFaqCategories() {
    return faqs.map(c => c.category);
}

export function getTotalFaqCount() {
    return faqs.reduce((acc, category) => acc + category.questions.length, 0);
}
