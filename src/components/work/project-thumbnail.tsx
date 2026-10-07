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

// Default icon per category, used when a project doesn't set its own
const CATEGORY_ICONS: Record<string, LucideIcon> = {
    "AI & ML": Brain,
    "Web App": Globe,
    "Mobile App": Smartphone,
    "Desktop App": Monitor,
    "Browser Extension": Puzzle,
    Robotics: Bot,
}

interface ProjectThumbnailProps {
    category: string
    /** Optional project-specific icon; falls back to the category icon */
    icon?: LucideIcon
    /** Position in the project list, shown as 01, 02, ... */
    index?: number
    className?: string
}

export function ProjectThumbnail({ category, icon, index, className = "" }: ProjectThumbnailProps) {
    const Icon = icon ?? CATEGORY_ICONS[category] ?? Code

    return (
        <div
            className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 ${className}`}
            aria-hidden="true"
        >
            {index !== undefined && (
                <span className="absolute left-5 top-4 text-[10px] font-semibold uppercase tracking-widest tabular-nums text-neutral-400 dark:text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                </span>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
                <Icon
                    className="h-12 w-12 text-neutral-900 dark:text-neutral-100 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.25}
                />
            </div>
        </div>
    )
}
