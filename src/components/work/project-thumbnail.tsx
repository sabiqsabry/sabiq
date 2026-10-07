import {
    Bot,
    Brain,
    Code,
    Globe,
    Monitor,
    Puzzle,
    Smartphone,
    type LucideIcon,
} from "lucide-react"

// Accent per category. Class strings must stay literal so Tailwind picks them up.
const CATEGORY_STYLES: Record<string, { icon: LucideIcon; accent: string; glow: string }> = {
    "AI & ML": { icon: Brain, accent: "text-violet-600 dark:text-violet-400", glow: "bg-violet-500" },
    "Web App": { icon: Globe, accent: "text-blue-600 dark:text-blue-400", glow: "bg-blue-500" },
    "Mobile App": { icon: Smartphone, accent: "text-emerald-600 dark:text-emerald-400", glow: "bg-emerald-500" },
    "Desktop App": { icon: Monitor, accent: "text-amber-600 dark:text-amber-400", glow: "bg-amber-500" },
    "Browser Extension": { icon: Puzzle, accent: "text-rose-600 dark:text-rose-400", glow: "bg-rose-500" },
    Robotics: { icon: Bot, accent: "text-orange-600 dark:text-orange-400", glow: "bg-orange-500" },
}

const FALLBACK_STYLE = { icon: Code, accent: "text-neutral-700 dark:text-neutral-300", glow: "bg-neutral-500" }

interface ProjectThumbnailProps {
    category: string
    /** Optional project-specific icon; falls back to the category icon */
    icon?: LucideIcon
    className?: string
}

export function ProjectThumbnail({ category, icon, className = "" }: ProjectThumbnailProps) {
    const style = CATEGORY_STYLES[category] ?? FALLBACK_STYLE
    const Icon = icon ?? style.icon

    return (
        <div
            className={`relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 ${className}`}
            aria-hidden="true"
        >
            {/* Dot grid, faded towards the edges */}
            <div
                className="absolute inset-0 text-neutral-300 dark:text-neutral-700 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                }}
            />

            {/* Soft accent glow */}
            <div
                className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${style.glow}`}
            />

            {/* Icon tile */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm transition-transform duration-500 group-hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800">
                    <Icon className={`h-7 w-7 ${style.accent}`} strokeWidth={1.75} />
                </div>
            </div>
        </div>
    )
}
