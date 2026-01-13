"use client";

import { useState, useMemo, Suspense } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
    Search, Filter, Grid3X3, LayoutList, SlidersHorizontal,
    ShoppingCart, Heart, Eye, Star, X, ChevronDown, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { getAllProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

// Mock products data
const allProducts = [
    {
        id: 1,
        name: "Royal Wedding Card",
        category: "Wedding Cards",
        type: "digital",
        price: 499,
        originalPrice: 799,
        rating: 4.9,
        reviews: 128,
        badge: "Bestseller",
        colors: ["#8b5cf6", "#ec4899"],
    },
    {
        id: 2,
        name: "Premium Visiting Card",
        category: "Visiting Cards",
        type: "print",
        price: 299,
        originalPrice: 499,
        rating: 4.8,
        reviews: 89,
        badge: "Popular",
        colors: ["#06b6d4", "#3b82f6"],
    },
    {
        id: 3,
        name: "Elegant Invitation Set",
        category: "Invitation Cards",
        type: "hybrid",
        price: 699,
        originalPrice: 999,
        rating: 4.9,
        reviews: 156,
        badge: "New",
        colors: ["#f59e0b", "#ef4444"],
    },
    {
        id: 4,
        name: "Modern Logo Package",
        category: "Branding",
        type: "digital",
        price: 1999,
        originalPrice: 2999,
        rating: 5.0,
        reviews: 67,
        badge: "Premium",
        colors: ["#10b981", "#06b6d4"],
    },
    {
        id: 5,
        name: "Corporate ID Card",
        category: "ID Cards",
        type: "print",
        price: 199,
        originalPrice: 299,
        rating: 4.7,
        reviews: 45,
        badge: null,
        colors: ["#6366f1", "#8b5cf6"],
    },
    {
        id: 6,
        name: "Festival Greeting Cards",
        category: "Greeting Cards",
        type: "digital",
        price: 149,
        originalPrice: 249,
        rating: 4.6,
        reviews: 72,
        badge: "Sale",
        colors: ["#ec4899", "#f43f5e"],
    },
    {
        id: 7,
        name: "Business Letterhead",
        category: "Stationery",
        type: "hybrid",
        price: 599,
        originalPrice: 799,
        rating: 4.8,
        reviews: 38,
        badge: null,
        colors: ["#14b8a6", "#10b981"],
    },
    {
        id: 8,
        name: "Social Media Kit",
        category: "Digital Marketing",
        type: "digital",
        price: 799,
        originalPrice: 1299,
        rating: 4.9,
        reviews: 94,
        badge: "Trending",
        colors: ["#f59e0b", "#eab308"],
    },
];

const categories = [
    "All Categories",
    "Wedding Cards",
    "Visiting Cards",
    "Invitation Cards",
    "Branding",
    "ID Cards",
    "Greeting Cards",
    "Stationery",
    "Digital Marketing",
];

const productTypes = [
    { value: "all", label: "All Types" },
    { value: "digital", label: "Digital Assets" },
    { value: "print", label: "Printing Services" },
    { value: "hybrid", label: "Hybrid Packages" },
];

const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
];

function ProductCard({ product, index, onAddToCart }) {
    const [isAdded, setIsAdded] = useState(false);
    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
        >
            <Link href={`/products/${product.id}`}>
                <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative rounded-3xl glass overflow-hidden cursor-pointer"
                >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(135deg, ${product.colors[0]}40 0%, ${product.colors[1]}40 100%)`,
                            }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-20 h-20 rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${product.colors[0]} 0%, ${product.colors[1]} 100%)`,
                                }}
                            />
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            {product.badge && (
                                <Badge className="gradient-bg text-white border-0 text-xs">
                                    {product.badge}
                                </Badge>
                            )}
                            {discount > 0 && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-0 text-xs">
                                    -{discount}%
                                </Badge>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/20"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                <Heart className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/20"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                <Eye className="w-4 h-4" />
                            </motion.button>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button
                                className={`btn-premium text-sm ${isAdded ? 'bg-green-500 hover:bg-green-600' : ''}`}
                                onClick={handleAddToCart}
                                disabled={isAdded}
                            >
                                {isAdded ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Added!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Add to Cart
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <span className="text-xs text-primary uppercase tracking-wide">
                            {product.category}
                        </span>

                        <h3 className="text-base font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span className="text-xs font-medium">{product.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                                ({product.reviews})
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold gradient-text">
                                    ₹{product.price}
                                </span>
                                {product.originalPrice > product.price && (
                                    <span className="text-xs text-muted-foreground line-through">
                                        ₹{product.originalPrice}
                                    </span>
                                )}
                            </div>
                            <Badge variant="outline" className="text-[10px]">
                                {product.type === "digital" && "Digital"}
                                {product.type === "print" && "Print"}
                                {product.type === "hybrid" && "Hybrid"}
                            </Badge>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

function FilterSidebar({
    selectedCategory,
    setSelectedCategory,
    selectedType,
    setSelectedType,
    priceRange,
    setPriceRange
}) {
    return (
        <div className="space-y-8">
            {/* Categories */}
            <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === category
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-secondary text-muted-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Type */}
            <div>
                <h3 className="font-semibold mb-4">Product Type</h3>
                <div className="space-y-2">
                    {productTypes.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedType === type.value
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-secondary text-muted-foreground"
                                }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <Input
                            type="number"
                            placeholder="Min"
                            value={priceRange[0] || ""}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="bg-secondary"
                        />
                        <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange[1] || ""}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="bg-secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductsPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { addItem } = useCart();
    const typeFromUrl = searchParams.get("type") || "all";

    // Get products from data layer
    const allProducts = getAllProducts();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedType, setSelectedType] = useState(typeFromUrl);
    const [sortBy, setSortBy] = useState("featured");
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [viewMode, setViewMode] = useState("grid");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Get unique categories from products
    const categories = useMemo(() => {
        const cats = [...new Set(allProducts.map(p => p.category?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Other'))];
        return ['All Categories', ...cats];
    }, [allProducts]);

    const handleAddToCart = (product) => {
        addItem(product, 1);
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...allProducts];

        // Filter by search
        if (searchQuery) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategory !== "All Categories") {
            result = result.filter((p) => {
                const productCategory = p.category?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Other';
                return productCategory === selectedCategory;
            });
        }

        // Filter by type
        if (selectedType !== "all") {
            result = result.filter((p) => p.type === selectedType);
        }

        // Filter by price
        if (priceRange[1] > 0) {
            result = result.filter((p) =>
                p.price >= priceRange[0] && p.price <= priceRange[1]
            );
        }

        // Sort
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            case "newest":
                result.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }

        return result;
    }, [allProducts, searchQuery, selectedCategory, selectedType, sortBy, priceRange]);

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-2"
                    >
                        {selectedType === "digital" && "Digital Assets"}
                        {selectedType === "print" && "Printing Services"}
                        {selectedType === "hybrid" && "Hybrid Packages"}
                        {selectedType === "all" && "All Products"}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground"
                    >
                        Browse our collection of {filteredProducts.length} premium designs
                    </motion.p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 bg-secondary border-border"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Mobile Filter */}
                        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="outline" className="gap-2">
                                    <SlidersHorizontal className="w-4 h-4" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80 glass">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6">
                                    <FilterSidebar
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        selectedType={selectedType}
                                        setSelectedType={setSelectedType}
                                        priceRange={priceRange}
                                        setPriceRange={setPriceRange}
                                    />
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="h-10 px-4 pr-10 rounded-lg bg-secondary border border-border text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value} className="bg-background">
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                        </div>

                        {/* View Toggle */}
                        <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-secondary">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-primary/20" : "hover:bg-secondary/80"
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-primary/20" : "hover:bg-secondary/80"
                                    }`}
                            >
                                <LayoutList className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex gap-8">
                    {/* Sidebar (Desktop) */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 p-6 rounded-2xl glass">
                            <FilterSidebar
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                selectedType={selectedType}
                                setSelectedType={setSelectedType}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                            />
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className={`grid gap-6 ${viewMode === "grid"
                                ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                                : "grid-cols-1"
                                }`}>
                                {filteredProducts.map((product, index) => (
                                    <ProductCard key={product.id} product={product} index={index} onAddToCart={handleAddToCart} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                                <p className="text-muted-foreground mb-6">
                                    Try adjusting your filters or search query
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All Categories");
                                        setSelectedType("all");
                                        setPriceRange([0, 0]);
                                    }}
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Loading fallback component
function ProductsLoading() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-8">
                    <div className="h-10 w-48 bg-secondary animate-pulse rounded-lg mb-2"></div>
                    <div className="h-6 w-64 bg-secondary animate-pulse rounded-lg"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="rounded-3xl bg-secondary animate-pulse aspect-[4/3]"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<ProductsLoading />}>
            <ProductsPageContent />
        </Suspense>
    );
}
