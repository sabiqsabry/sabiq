"use client"

import { useEffect, useState } from "react"

export function useTheme() {
    const [theme, setThemeState] = useState<"light" | "dark">("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Get theme from localStorage or default to light
        const stored = localStorage.getItem("theme") as "light" | "dark" | null
        const initialTheme = stored || "light"
        setThemeState(initialTheme)
        
        // Apply theme to document
        if (initialTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const setTheme = (newTheme: "light" | "dark") => {
        setThemeState(newTheme)
        localStorage.setItem("theme", newTheme)
        
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return { theme, setTheme, mounted }
}
