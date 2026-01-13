"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button as HeroButton } from "@heroui/react";
import { jobOpenings, benefits } from "@/data/careers";

function JobCard({ job }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
        >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                    <p className="text-sm text-primary font-medium">{job.department}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/80 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {job.type}
                    </span>
                </div>
            </div>
            <p className="text-muted-foreground mb-4">{job.description}</p>
            <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Requirements:</h4>
                <ul className="space-y-1">
                    {job.requirements.map((req) => (
                        <li key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {req}
                        </li>
                    ))}
                </ul>
            </div>
            <HeroButton
                as={Link}
                href={`/contact?subject=Job Application: ${job.title}`}
                color="primary"
                variant="flat"
                size="sm"
                endContent={<ArrowRight className="w-4 h-4" />}
            >
                Apply Now
            </HeroButton>
        </motion.div>
    );
}

export default function CareersPage() {
    const activeJobs = jobOpenings.filter(job => job.isActive);

    return (
        <>
            {/* Hero */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        >
                            Join Our Team
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Build your career with Mavtar Printing Press. We're always looking for
                            talented individuals who share our passion for quality and excellence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 border-b border-border">
                <div className="site-container">
                    <div className="grid md:grid-cols-3 gap-6">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 md:py-20">
                <div className="site-container">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Open Positions
                        </h2>
                        <p className="text-muted-foreground">
                            Explore our current job openings and find the right fit for you.
                        </p>
                    </div>
                    <div className="grid gap-6">
                        {activeJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-secondary/30">
                <div className="site-container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Don't See the Right Role?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We're always interested in meeting talented people. Send us your resume
                        and we'll keep you in mind for future opportunities.
                    </p>
                    <HeroButton
                        as={Link}
                        href="/contact?subject=General Application"
                        color="primary"
                        size="lg"
                        endContent={<ArrowRight className="w-5 h-5" />}
                    >
                        Submit Your Resume
                    </HeroButton>
                </div>
            </section>
        </>
    );
}
