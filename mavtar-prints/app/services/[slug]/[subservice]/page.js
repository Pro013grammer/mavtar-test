import Link from "next/link";
import { ArrowRight, ChevronLeft, ShoppingCart, FileQuestion } from "lucide-react";
import { getServiceBySlug, getSubServiceBySlug, services, subServices } from "@/data/services";
import { getProductsByCategory } from "@/data/products";

// Generate static params
export async function generateStaticParams() {
    const params = [];
    services.forEach((service) => {
        const subs = subServices[service.id] || [];
        subs.forEach((sub) => {
            params.push({
                slug: service.slug || service.id,
                subservice: sub.slug,
            });
        });
    });
    return params;
}

// Generate metadata
export async function generateMetadata({ params }) {
    const { slug, subservice } = await params;
    const service = getServiceBySlug(slug);
    const sub = getSubServiceBySlug(service?.id, subservice);

    if (!service || !sub) {
        return { title: "Service Not Found | Mavtar Printing Press" };
    }

    return {
        title: `${sub.name} - ${service.title} | Mavtar Printing Press`,
        description: sub.description,
    };
}

export default async function SubServicePage({ params }) {
    const { slug, subservice } = await params;
    const service = getServiceBySlug(slug);
    const sub = service ? getSubServiceBySlug(service.id, subservice) : null;

    if (!service || !sub) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-primary hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    // Try to find related products
    const relatedProducts = getProductsByCategory(sub.slug) || [];
    const ServiceIcon = service.icon;

    return (
        <>
            {/* Breadcrumb */}
            <section className="py-4 border-b border-border bg-secondary/20">
                <div className="site-container">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/services" className="hover:text-foreground">Services</Link>
                        <span>/</span>
                        <Link href={`/services/${slug}`} className="hover:text-foreground">{service.title}</Link>
                        <span>/</span>
                        <span className="text-foreground">{sub.name}</span>
                    </div>
                </div>
            </section>

            {/* Hero */}
            <section className="py-12 md:py-16" style={{ background: `linear-gradient(135deg, ${service.color}10 0%, ${service.color}20 100%)` }}>
                <div className="site-container">
                    <Link
                        href={`/services/${slug}`}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to {service.title}
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${sub.serviceType === "standard"
                                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                }`}>
                                {sub.serviceType === "standard" ? "Standard Service" : "Custom Quote Required"}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                                {sub.name}
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                {sub.description}
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-6 md:min-w-[280px]">
                            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                            <p className="text-2xl font-bold text-foreground mb-1">{sub.priceRange}</p>
                            <p className="text-sm text-muted-foreground">Min. order: {sub.minQuantity} pcs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Point */}
            <section className="py-12 md:py-16">
                <div className="site-container">
                    <h2 className="text-xl font-semibold text-foreground mb-8">
                        How would you like to proceed?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                        {/* Standard Flow - Browse Products */}
                        <Link href={relatedProducts.length > 0 ? `/category/${sub.slug}` : "/search"}>
                            <div className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                                    <ShoppingCart className="w-7 h-7 text-green-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Browse & Order
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    View our pre-designed options, select specifications, and place your order directly.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-medium">
                                    View Products
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Custom Flow - Get Quote */}
                        <Link href={`/quote?service=${encodeURIComponent(sub.name)}`}>
                            <div className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                                    <FileQuestion className="w-7 h-7 text-amber-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Get Custom Quote
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Have specific requirements? Share your details and we'll provide a tailored quote.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-medium">
                                    Request Quote
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Products Preview */}
            {relatedProducts.length > 0 && (
                <section className="py-12 md:py-16 bg-secondary/30">
                    <div className="site-container">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-semibold text-foreground">
                                Popular {sub.name} Options
                            </h2>
                            <Link href={`/category/${sub.slug}`} className="text-primary hover:underline text-sm">
                                View All →
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedProducts.slice(0, 4).map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`}>
                                    <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
                                        <div
                                            className="aspect-square rounded-lg mb-3 flex items-center justify-center"
                                            style={{ background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}40 100%)` }}
                                        >
                                            <ServiceIcon className="w-12 h-12" style={{ color: service.color }} />
                                        </div>
                                        <h3 className="font-medium text-foreground text-sm truncate">{product.name}</h3>
                                        <p className="text-primary font-bold mt-1">₹{product.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Info Section */}
            <section className="py-12 md:py-16">
                <div className="site-container">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Quality Guarantee</h3>
                            <p className="text-sm text-muted-foreground">
                                We ensure premium quality printing with attention to every detail.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Fast Turnaround</h3>
                            <p className="text-sm text-muted-foreground">
                                Standard orders are processed within 3-5 business days.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Free Delivery</h3>
                            <p className="text-sm text-muted-foreground">
                                Free delivery on orders above ₹2,000 within Surat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
