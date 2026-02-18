export type Platform = "mac" | "windows" | "ios" | "android";

export interface DownloadLink {
    platform: Platform;
    url: string;
    label: string;
    /** If true, this is an external store link (App Store / Play Store) */
    external?: boolean;
}

export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    features: string[];
    platforms: Platform[];
    downloads: DownloadLink[];
    developer: string;
    badge?: string; // e.g. "New", "Beta", "Coming Soon"
    comingSoon?: string; // text for upcoming platforms
}

export const products: Product[] = [
    {
        id: "blankr",
        name: "Blankr.",
        tagline: "Write. Close. Done.",
        description:
            "Blankr. is a minimal, zero-distraction note-taking app for macOS built around a single idea — open it and start writing immediately.\n\nNo dashboards. No accounts. No sync. No save button. No onboarding. No noise. Just a blank page and your words.\n\nThe moment you launch Blankr. you are greeted with nothing but a clean, empty writing surface with your cursor already waiting. When you are done, you simply close the app. Everything you wrote is automatically saved as a plain .txt file directly to your Desktop — timestamped, readable, and yours. No hidden folders. No proprietary formats. No lock-in.\n\nA slim formatting panel sits quietly on the side with only the essentials — bold, italic, underline, font size, and alignment. Nothing more. The writing canvas is always the focus.\n\nBlankr. does not try to organize your life. It does not try to be smart. It just gets out of your way completely.",
        icon: "/products/blankr/icon.png",
        features: [
            "Opens instantly to a blank writing canvas every time",
            "Auto-saves to your Desktop as a .txt file on close — no save button ever",
            "Timestamp-based file naming for effortless organization",
            "Minimal formatting panel with only the essentials",
            "Opens existing .txt files when double-clicked from Finder",
            "Fully offline, fully private, zero telemetry",
            "Native macOS app built with Swift and SwiftUI",
        ],
        platforms: ["mac"],
        downloads: [
            {
                platform: "mac",
                url: "/products/blankr/Blankr.dmg",
                label: "Download for Mac",
            },
        ],
        developer: "Sabiq Sabry — novusian",
        comingSoon: "Windows version coming soon.",
    },
];
