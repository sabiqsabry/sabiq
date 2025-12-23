import * as React from "react"
import { cn } from "@/components/ui/button"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
        secondary: "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50",
        outline: "border border-neutral-200 text-neutral-900 dark:border-neutral-800 dark:text-neutral-50",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }

