import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Star, Heart, Filter, ChevronLeft } from "lucide-react";
import { getCategoryBySlug, getAllCategories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="product-card bg-card border border-border">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-10">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/50 text-white text-xs flex items-center gap-1 z-10">
                        <Heart className="w-3 h-3 fill-current" />
                        {product.likes}
                    </div>
                    {product.badge && (
                        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-primary text-white text-xs font-medium z-10">
                            {product.badge}
                        </div>
                    )}
                </div>
                <div className="p-3">
                    <h3 className="text-sm font-medium text-foreground truncate mb-1">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <p className="text-base font-bold text-foreground">₹{product.price}</p>
                        {product.originalPrice > product.price && (
                            <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</p>
                        )}
                        {product.unit && (
                            <p className="text-xs text-muted-foreground">/{product.unit}</p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

// Generate static params for all categories
export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        slug: category.id,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Category Not Found | Mavtar Printing Press",
        };
    }

    return {
        title: `${category.name} | Mavtar Printing Press`,
        description: category.description,
        openGraph: {
            title: `${category.name} | Mavtar Printing Press`,
            description: category.description,
            type: "website",
        },
    };
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug) || {
        id: slug,
        name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        description: "Explore our printing products",
        heroImage: "/products/visiting-1.jpg",
        subCategories: [],
    };

    // Get products for this category
    const products = getProductsByCategory(slug);

    return (
        <div className="min-h-screen bg-background">
            {/* Category Hero */}
            <div className="relative h-48 md:h-64 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={category.heroImage}
                        alt={category.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                        <Link href="/" className="hover:text-white">
                            <ChevronLeft className="w-4 h-4 inline" /> Back
                        </Link>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        {category.name}
                    </h1>
                    <p className="text-white/80 mt-2">{category.description}</p>
                </div>
            </div>

            {/* Sub-categories */}
            {category.subCategories && category.subCategories.length > 0 && (
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    <h2 className="section-title mb-4">Categories</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                        {category.subCategories.map((sub) => (
                            <Link
                                key={sub.slug}
                                href={`/category/${slug}/${sub.slug}`}
                                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-xl text-foreground font-medium hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                {sub.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Products Grid */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="section-title">All Products ({products.length})</h2>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:bg-secondary transition-colors">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground mb-4">No products found in this category.</p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Browse Services
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
