"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Use a safe theme value that won't cause hydration mismatch
    const safeTheme = mounted ? theme : undefined

    return (
        <div className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 rounded-full p-1 bg-white dark:bg-neutral-900">
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "h-8 w-8 rounded-full",
                    safeTheme === "system" && "bg-neutral-100 dark:bg-neutral-800"
                )}
                onClick={() => setTheme("system")}
                title="System theme"
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">System theme</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "h-8 w-8 rounded-full",
                    safeTheme === "light" && "bg-neutral-100 dark:bg-neutral-800"
                )}
                onClick={() => setTheme("light")}
                title="Light theme"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light theme</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "h-8 w-8 rounded-full",
                    safeTheme === "dark" && "bg-neutral-100 dark:bg-neutral-800"
                )}
                onClick={() => setTheme("dark")}
                title="Dark theme"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark theme</span>
            </Button>
        </div>
    )
}
