import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg mx-auto">
                {/* 404 Visual */}
                <div className="relative mb-8">
                    <h1 className="text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center">
                            <Search className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                    >
                        Browse Services
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        Looking for something specific?
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/services" className="text-sm text-primary hover:underline">
                            Services
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/category/visiting-cards" className="text-sm text-primary hover:underline">
                            Visiting Cards
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/quote" className="text-sm text-primary hover:underline">
                            Get Quote
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/contact" className="text-sm text-primary hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
