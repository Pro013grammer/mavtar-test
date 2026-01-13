"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg mx-auto">
                {/* Error Icon */}
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                {/* Content */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Something went wrong
                </h2>
                <p className="text-muted-foreground mb-8">
                    We apologize for the inconvenience. An unexpected error has occurred.
                    Please try again or contact support if the problem persists.
                </p>

                {/* Error Details (Development only) */}
                {process.env.NODE_ENV === "development" && error?.message && (
                    <div className="mb-8 p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-left">
                        <p className="text-sm text-red-600 dark:text-red-400 font-mono break-all">
                            {error.message}
                        </p>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                </div>

                {/* Support Link */}
                <p className="mt-8 text-sm text-muted-foreground">
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                        Contact our support team
                    </Link>
                </p>
            </div>
        </div>
    );
}
