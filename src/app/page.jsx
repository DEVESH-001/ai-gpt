import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PricingPage from "@/components/Pricing";

export default function Home() {
  return (
    <section>
      <HeroSection />

      <div id="features" className="mt-20 scroll-mt-20">
        <FeatureSection />
      </div>

      <PricingPage />
      <div id="about" className="mt-20 scroll-mt-20">
        <Footer />
      </div>
    </section>
  );
}
