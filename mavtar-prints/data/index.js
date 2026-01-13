/**
 * Data Layer Index
 * Re-exports all data modules for convenient access
 */

// Services
export {
    services,
    subServices,
    getServiceBySlug,
    getServiceById,
    getSubServices,
    getSubServiceBySlug,
    getAllSubServices
} from './services';

// Categories
export {
    categories,
    getCategoryBySlug,
    getAllCategories,
    getCategoryIds,
    getSubCategoriesForCategory
} from './categories';

// Products
export {
    products,
    digitalProducts,
    getProductById,
    getProductBySlug,
    getProductsByCategory,
    getProductsBySubCategory,
    searchProducts,
    getFeaturedProducts,
    getRecentProducts,
    getPopularProducts,
    getAllProducts
} from './products';

// Testimonials
export {
    testimonials,
    getAllTestimonials,
    getFeaturedTestimonials,
    getTestimonialsByProduct,
    getAverageRating,
    getTotalReviewCount
} from './testimonials';

// FAQs
export {
    faqs,
    getAllFaqs,
    getFaqsByCategory,
    searchFaqs,
    getFaqCategories,
    getTotalFaqCount
} from './faqs';

// Portfolio
export {
    portfolioCategories,
    portfolioItems,
    getAllPortfolioItems,
    getPortfolioByCategory,
    getPortfolioCategories,
    getPortfolioItemById,
    getRecentPortfolioItems
} from './portfolio';

// Careers
export {
    benefits,
    jobOpenings,
    getActiveJobOpenings,
    getJobOpeningById,
    getJobsByDepartment,
    getAllBenefits,
    getDepartments,
    getOpenPositionsCount
} from './careers';
