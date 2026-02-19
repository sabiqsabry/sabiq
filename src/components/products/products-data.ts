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
    privacyPolicy?: string; // detailed privacy policy text
}

export const products: Product[] = [
    {
        id: "sky-said-so",
        name: "Sky Said So",
        tagline: "Just weather. The way it should be.",
        description:
            "Sky Said So is a clean, minimal weather app that tells you exactly what the sky has planned — no clutter, no noise, no unnecessary distractions.\n\nBold, typography-driven design and a clean layout make it easy to read. Get accurate, up-to-date weather based on your location including current temperature, feels-like, humidity, wind speed, and detailed forecasts.",
        icon: "/products/sky-said-so/icon.png",
        features: [
            "Bold, typography-driven design",
            "Minimal and easy to read",
            "Slightly witty forecast summaries",
            "Smooth, modern interface",
            "Real-time weather based on location",
            "No ads. No tracking. No nonsense.",
        ],
        platforms: ["ios", "android"],
        downloads: [
            {
                platform: "ios",
                url: "#",
                label: "App Store",
                external: true,
            },
            {
                platform: "android",
                url: "#",
                label: "Play Store",
                external: true,
            },
        ],
        developer: "Sabiq Sabry — novusian",
        privacyPolicy: `## Privacy Policy for Sky Said So

Effective Date: February 20, 2026

Sky Said So (“we”, “our”, or “the app”) respects your privacy.

### Information We Collect

Sky Said So requests access to your device’s location in order to provide accurate weather forecasts.

Users may choose to grant:
* Approximate location, or
* Precise location

Location data is used only at the time of the request to retrieve weather information.

We do not:
* Store your location
* Track your movements
* Retain location history
* Share your personal data with third parties for marketing purposes

### Data Usage

Location information is transmitted securely to a third-party weather API solely to retrieve forecast data.

Sky Said So does not maintain its own servers that store personal user data.

### Advertising

Sky Said So does not display advertisements.

### Analytics

Sky Said So does not use analytics tools to track user behavior.

### Children’s Privacy

Sky Said So does not knowingly collect personal information from children.

### Changes to This Policy

We may update this Privacy Policy in the future. Any changes will be reflected on this page.

### Contact

If you have questions about this Privacy Policy, please contact:

Sabiq Sabry - novusian
sabiqsabry48@gmail.com / novusian.sabiq@gmail.com`,
    },
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
