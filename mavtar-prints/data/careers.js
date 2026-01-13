/**
 * Careers Data Layer
 * Job openings and company benefits
 */

import { Users, Heart, Sparkles, DollarSign, GraduationCap, Coffee } from "lucide-react";

export const benefits = [
    {
        icon: Users,
        title: "Great Team",
        description: "Work with passionate professionals who love what they do"
    },
    {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Flexible schedules and supportive work culture"
    },
    {
        icon: Sparkles,
        title: "Growth Opportunities",
        description: "Learn new skills and advance your career"
    },
    {
        icon: DollarSign,
        title: "Competitive Salary",
        description: "Fair compensation with performance bonuses"
    },
    {
        icon: GraduationCap,
        title: "Learning & Development",
        description: "Training programs and skill development workshops"
    },
    {
        icon: Coffee,
        title: "Great Environment",
        description: "Modern workspace with all amenities"
    },
];

export const jobOpenings = [
    {
        id: 1,
        title: "Graphic Designer",
        department: "Design",
        location: "Surat, Gujarat",
        type: "Full-time",
        experience: "2-4 years",
        salary: "₹25,000 - ₹40,000/month",
        description: "We're looking for a creative graphic designer to join our design team and create stunning print materials for our clients.",
        responsibilities: [
            "Create print-ready designs for various products",
            "Work with clients to understand their requirements",
            "Ensure designs meet print specifications",
            "Collaborate with production team",
        ],
        requirements: [
            "2+ years experience in graphic design",
            "Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
            "Understanding of print design principles and color management",
            "Strong portfolio showcasing print work",
            "Good communication skills",
        ],
        isActive: true,
        postedDate: "2024-12-01",
    },
    {
        id: 2,
        title: "Production Manager",
        department: "Operations",
        location: "Surat, Gujarat",
        type: "Full-time",
        experience: "5-8 years",
        salary: "₹45,000 - ₹65,000/month",
        description: "Lead our production team to ensure timely and quality delivery of all printing projects. Manage daily operations and optimize workflows.",
        responsibilities: [
            "Oversee daily production operations",
            "Manage and train production staff",
            "Ensure quality control standards are met",
            "Optimize production workflows and timelines",
            "Coordinate with sales and design teams",
        ],
        requirements: [
            "5+ years experience in printing industry",
            "Strong leadership and management skills",
            "Knowledge of printing processes and equipment (offset, digital, large format)",
            "Excellent problem-solving abilities",
            "Experience with production scheduling software",
        ],
        isActive: true,
        postedDate: "2024-11-15",
    },
    {
        id: 3,
        title: "Sales Executive",
        department: "Sales",
        location: "Surat, Gujarat",
        type: "Full-time",
        experience: "2-5 years",
        salary: "₹20,000 - ₹35,000/month + Incentives",
        description: "Drive business growth by building relationships with clients and understanding their printing needs. Achieve sales targets and expand our client base.",
        responsibilities: [
            "Generate leads and acquire new clients",
            "Maintain relationships with existing clients",
            "Prepare quotations and proposals",
            "Meet monthly sales targets",
            "Coordinate with production for order fulfillment",
        ],
        requirements: [
            "2+ years sales experience, preferably in B2B",
            "Excellent communication and negotiation skills",
            "Knowledge of printing services is a plus",
            "Target-oriented mindset",
            "Own vehicle preferred for client visits",
        ],
        isActive: true,
        postedDate: "2024-12-10",
    },
    {
        id: 4,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Surat, Gujarat",
        type: "Full-time",
        experience: "2-4 years",
        salary: "₹25,000 - ₹40,000/month",
        description: "Manage our digital presence and drive online sales. Handle social media, SEO, and digital advertising campaigns.",
        responsibilities: [
            "Manage social media accounts and content",
            "Run digital advertising campaigns (Google, Meta)",
            "Optimize website for SEO",
            "Track and report on marketing metrics",
            "Create marketing content and collaterals",
        ],
        requirements: [
            "2+ years experience in digital marketing",
            "Experience with Google Ads and Meta Business Suite",
            "Knowledge of SEO best practices",
            "Proficiency in analytics tools",
            "Creative content creation skills",
        ],
        isActive: true,
        postedDate: "2024-12-05",
    },
    {
        id: 5,
        title: "Machine Operator",
        department: "Production",
        location: "Surat, Gujarat",
        type: "Full-time",
        experience: "1-3 years",
        salary: "₹15,000 - ₹25,000/month",
        description: "Operate and maintain printing machines. Ensure quality output and efficient production.",
        responsibilities: [
            "Operate offset/digital printing machines",
            "Perform routine maintenance and cleaning",
            "Ensure print quality standards",
            "Report machine issues to supervisor",
        ],
        requirements: [
            "1+ year experience operating printing machines",
            "Knowledge of offset or digital printing",
            "Attention to detail",
            "Physical fitness for standing long hours",
        ],
        isActive: true,
        postedDate: "2024-12-12",
    },
];

// Helper functions
export function getActiveJobOpenings() {
    return jobOpenings.filter(job => job.isActive);
}

export function getJobOpeningById(id) {
    return jobOpenings.find(job => job.id === parseInt(id));
}

export function getJobsByDepartment(department) {
    return jobOpenings.filter(job => job.department.toLowerCase() === department.toLowerCase());
}

export function getAllBenefits() {
    return benefits;
}

export function getDepartments() {
    const departments = [...new Set(jobOpenings.map(job => job.department))];
    return departments;
}

export function getOpenPositionsCount() {
    return jobOpenings.filter(job => job.isActive).length;
}
