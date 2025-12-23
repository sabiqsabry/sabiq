import { ServicesList } from "@/components/services/services-list";
import { CtaSection } from "@/components/cta-section";

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="py-12 md:py-20 text-center max-w-4xl mx-auto space-y-4">
                <h1 className="text-3xl md:text-5xl md:whitespace-nowrap font-bold text-neutral-900 dark:text-neutral-50">Digital solutions for your success</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    With experience across AI, web development, and mobile apps, I offer customized solutions that position your business in the digital age.
                </p>
            </div>

            <ServicesList />

            <CtaSection />
        </div>
    );
}
