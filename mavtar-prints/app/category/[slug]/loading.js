export default function CategoryLoading() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Skeleton */}
            <div className="h-48 md:h-64 bg-secondary animate-pulse" />

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="h-8 w-32 bg-secondary rounded animate-pulse mb-6" />

                {/* Grid Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="aspect-square bg-secondary animate-pulse" />
                            <div className="p-3 space-y-2">
                                <div className="h-4 bg-secondary rounded animate-pulse" />
                                <div className="h-3 w-1/2 bg-secondary rounded animate-pulse" />
                                <div className="h-5 w-1/3 bg-secondary rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
