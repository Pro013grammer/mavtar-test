import Hero from "@/components/landing/Hero";
import TrustSection from "@/components/landing/TrustSection";
import ServicesOverview from "@/components/landing/ServicesOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
