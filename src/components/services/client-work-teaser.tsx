import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export function ClientWorkTeaser() {
    return (
        <section className="mt-20 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="space-y-3 max-w-xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                        <Briefcase size={14} />
                        Case studies
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">See client work on Work</h2>
                    <p className="text-neutral-400 leading-relaxed">
                        Lighthouse, Clinical Flow, Lamissi&apos;s Booth, and more - case studies now live on the Work page, separate from personal projects.
                    </p>
                </div>
                <Link
                    href="/work#client-work"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors shrink-0"
                >
                    View client work
                    <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
