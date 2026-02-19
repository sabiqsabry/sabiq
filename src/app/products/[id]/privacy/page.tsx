import { products } from "@/components/products/products-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface PrivacyPageProps {
    params: Promise<{ id: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product || !product.privacyPolicy) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            {/* Navigation */}
            <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors mb-12 group"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Products
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[24px] overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800">
                    <Image
                        src={product.icon}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-1">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-sm font-medium uppercase tracking-wider">Legal</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                        Privacy Policy
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                        for {product.name}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed md:text-lg space-y-8">
                    {product.privacyPolicy.split("\n\n").map((block, i) => {
                        if (block.startsWith("## ")) {
                            return (
                                <h2 key={i} className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-4 mt-12 first:mt-0">
                                    {block.replace("## ", "")}
                                </h2>
                            )
                        }
                        if (block.startsWith("### ")) {
                            return (
                                <h3 key={i} className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-8">
                                    {block.replace("### ", "")}
                                </h3>
                            )
                        }
                        if (block.includes("\n* ") || block.startsWith("* ")) {
                            const lines = block.split("\n")
                            const intro = lines[0].startsWith("* ") ? "" : lines[0]
                            const items = lines.filter((l) => l.trim().startsWith("* "))
                            return (
                                <div key={i} className="space-y-4">
                                    {intro && <p>{intro}</p>}
                                    <ul className="list-disc pl-6 space-y-2">
                                        {items.map((item, j) => (
                                            <li key={j}>{item.replace("* ", "").trim()}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                        return (
                            <p key={i} className="whitespace-pre-line">
                                {block}
                            </p>
                        )
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 pt-10 border-t border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center gap-4">
                <p className="text-neutral-400 dark:text-neutral-500 text-sm">
                    © {new Date().getFullYear()} {product.developer}
                </p>
                <Link
                    href="/products"
                    className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:underline"
                >
                    View all products
                </Link>
            </div>
        </div>
    );
}
