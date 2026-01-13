"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Star, Heart, Filter, ChevronLeft, SlidersHorizontal, X } from "lucide-react";
import { searchProducts, getAllProducts } from "@/data/products";

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
                    <span className="text-xs text-primary">{product.category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</span>
                    <h3 className="text-sm font-medium text-foreground truncate mb-1">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <p className="text-base font-bold text-foreground">₹{product.price}</p>
                </div>
            </div>
        </Link>
    );
}

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [sortBy, setSortBy] = useState("popular");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Get all products if no query, or search results
    const baseResults = query ? searchProducts(query) : getAllProducts();

    // Get unique categories from results
    const categories = useMemo(() => {
        const cats = [...new Set(baseResults.map(p => p.category))];
        return cats.map(c => ({
            id: c,
            name: c.replace(/-/g, " ").replace(/\b\w/g, x => x.toUpperCase())
        }));
    }, [baseResults]);

    // Filter and sort
    const filteredProducts = useMemo(() => {
        let results = [...baseResults];

        // Filter by category
        if (selectedCategories.length > 0) {
            results = results.filter(p => selectedCategories.includes(p.category));
        }

        // Filter by price
        results = results.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

        // Sort
        switch (sortBy) {
            case "popular":
                results.sort((a, b) => b.likes - a.likes);
                break;
            case "newest":
                results.sort((a, b) => b.id - a.id);
                break;
            case "price-low":
                results.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                results.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                results.sort((a, b) => b.rating - a.rating);
                break;
        }

        return results;
    }, [baseResults, sortBy, selectedCategories, priceRange]);

    const toggleCategory = (catId) => {
        setSelectedCategories(prev =>
            prev.includes(catId)
                ? prev.filter(c => c !== catId)
                : [...prev, catId]
        );
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Search Header */}
            <div className="border-b border-border bg-secondary/30">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/" className="text-muted-foreground hover:text-foreground">
                            <ChevronLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-2xl font-bold">Search Results</h1>
                    </div>

                    {/* Search Bar */}
                    <form action="/search" method="GET" className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                name="q"
                                defaultValue={query}
                                placeholder="Search printing products..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </form>

                    {query && (
                        <p className="text-muted-foreground mt-4">
                            {filteredProducts.length} results for "{query}"
                        </p>
                    )}
                </div>
            </div>

            {/* Results */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-6">
                            <h3 className="font-semibold text-foreground">Filters</h3>

                            {/* Categories */}
                            <div>
                                <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat.id)}
                                                onChange={() => toggleCategory(cat.id)}
                                                className="rounded border-border"
                                            />
                                            <span className="text-sm text-muted-foreground">{cat.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="text-sm font-medium text-foreground mb-3">Price Range</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={priceRange.min || ""}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
                                        className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={priceRange.max === 10000 ? "" : priceRange.max}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 10000 }))}
                                        className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                                    />
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {(selectedCategories.length > 0 || priceRange.min > 0 || priceRange.max < 10000) && (
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setPriceRange({ min: 0, max: 10000 });
                                    }}
                                    className="text-sm text-primary hover:underline"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="section-title">Products ({filteredProducts.length})</h2>
                                    <div className="flex items-center gap-3">
                                        {/* Sort */}
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="px-4 py-2 border border-border rounded-lg text-sm bg-background text-foreground"
                                        >
                                            <option value="popular">Most Popular</option>
                                            <option value="newest">Newest</option>
                                            <option value="price-low">Price: Low to High</option>
                                            <option value="price-high">Price: High to Low</option>
                                            <option value="rating">Highest Rated</option>
                                        </select>

                                        {/* Mobile Filter Button */}
                                        <button
                                            onClick={() => setShowFilters(true)}
                                            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:bg-secondary transition-colors"
                                        >
                                            <SlidersHorizontal className="w-4 h-4" />
                                            Filter
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                <h2 className="text-xl font-semibold mb-2">No results found</h2>
                                <p className="text-muted-foreground mb-6">
                                    Try searching for "visiting cards", "wedding", or "banner"
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    Browse All Products
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {showFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold text-foreground">Filters</h3>
                            <button onClick={() => setShowFilters(false)}>
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat.id)}
                                            onChange={() => toggleCategory(cat.id)}
                                            className="rounded border-border"
                                        />
                                        <span className="text-sm text-muted-foreground">{cat.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-foreground mb-3">Price Range</h4>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min || ""}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
                                    className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max === 10000 ? "" : priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 10000 }))}
                                    className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setShowFilters(false)}
                            className="w-full py-3 bg-primary text-white rounded-lg font-medium"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-background flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                </div>
            }
        >
            <SearchResults />
        </Suspense>
    );
}
