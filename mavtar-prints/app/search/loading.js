export default function SearchLoading() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Skeleton */}
            <div className="border-b border-border bg-secondary/30">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-4" />
                    <div className="h-12 max-w-2xl bg-secondary rounded-full animate-pulse" />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex gap-8">
                    {/* Sidebar Skeleton */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="space-y-6">
                            <div className="h-6 w-20 bg-secondary rounded animate-pulse" />
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-4 bg-secondary rounded animate-pulse" />
                            ))}
                        </div>
                    </div>

                    {/* Grid Skeleton */}
                    <div className="flex-1">
                        <div className="h-6 w-32 bg-secondary rounded animate-pulse mb-6" />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {[...Array(6)].map((_, i) => (
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
            </div>
        </div>
    );
}
