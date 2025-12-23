import { Hero } from "@/components/home/hero";
import { BentoGrid } from "@/components/home/bento-grid";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <Hero />
      <div className="mt-6 mb-6">
        <BentoGrid />
      </div>
      <CtaSection />
    </div>
  );
}
