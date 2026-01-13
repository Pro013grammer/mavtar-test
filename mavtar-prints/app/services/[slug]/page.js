import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { getServiceBySlug, getSubServices, services } from "@/data/services";

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug || service.id,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found | Mavtar Printing Press",
        };
    }

    return {
        title: `${service.title} | Mavtar Printing Press`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Mavtar Printing Press`,
            description: service.description,
        },
    };
}

export default async function ServiceCategoryPage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
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

    const subServices = getSubServices(service.id);
    const ServiceIcon = service.icon;

    return (
        <>
            {/* Hero */}
            <section
                className="py-16 md:py-24 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}30 100%)`
                }}
            >
                <div className="site-container relative z-10">
                    {/* Back Link */}
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Services
                    </Link>

                    <div className="flex items-start gap-6">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${service.color}20` }}
                        >
                            <ServiceIcon className="w-10 h-10" style={{ color: service.color }} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                                {service.title}
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Services Grid */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <h2 className="text-xl font-semibold text-foreground mb-8">
                        Choose a Service Type
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subServices.map((sub) => (
                            <Link
                                key={sub.id}
                                href={
                                    sub.serviceType === "custom"
                                        ? `/quote?service=${encodeURIComponent(sub.name)}`
                                        : `/services/${slug}/${sub.slug}`
                                }
                            >
                                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {sub.name}
                                        </h3>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${sub.serviceType === "standard"
                                                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                            }`}>
                                            {sub.serviceType === "standard" ? "Standard" : "Custom Quote"}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {sub.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Starting from</p>
                                            <p className="font-semibold text-foreground">{sub.priceRange}</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    {sub.minQuantity && (
                                        <p className="text-xs text-muted-foreground mt-2">
                                            Min. order: {sub.minQuantity} pcs
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <h2 className="text-xl font-semibold text-foreground mb-8">
                        What We Offer
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                            >
                                <div
                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                    style={{ backgroundColor: service.color }}
                                />
                                <p className="text-foreground/80">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Can't find what you're looking for? Our team can help create a custom printing solution tailored to your specific needs.
                    </p>
                    <Link
                        href={`/quote?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Get a Custom Quote
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
