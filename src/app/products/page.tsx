import { ProductsList } from "@/components/products/products-list";
import { CtaSection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | Sabiq Sabry",
    description: "Apps and tools built by Sabiq Sabry — available on macOS, Windows, iOS, and Android.",
};

export default function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="py-12 md:py-20 text-center max-w-4xl mx-auto space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
                    Apps built for real use
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    A collection of native apps and tools I&apos;ve designed and shipped — minimal, purposeful, and built to last.
                </p>
            </div>

            <ProductsList />

            <CtaSection />
        </div>
    );
}
