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
        id: "pash",
        name: "Pash",
        tagline: "AI-Powered Personal Finance & Expense Splitting",
        description:
            "Pash is a smart, AI-powered bill-splitting and personal finance application. Create expense splits, track balances, manage group expenses, and handle payments seamlessly. Connect with friends and let Pash do the math for you.\n\nBuilt for speed and simplicity. Sign in via Google or email, and start splitting expenses securely with encrypted cloud storage.",
        icon: "/products/pash/icon.png",
        features: [
            "AI-powered expense splitting",
            "Group expense & balance management",
            "Payment and settlement tracking",
            "Google & Email Authentication",
            "Secure cloud storage with Supabase",
            "No ads. Data is encrypted and private.",
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
        comingSoon: "Available soon on App Store and Play Store.",
        developer: "Sabiq Sabry — novusian",
        privacyPolicy: `## Privacy Policy — Pash
Last updated: March 15, 2026

### 1. Overview
Pash ("the App") is a bill-splitting application developed by Sabiq Sabry. This policy explains what personal data the App collects, how it is used, and your rights regarding that data.

### 2. Data We Collect

**Account Information**
* Email address (used for authentication)
* Display name
* Username (chosen by you during setup)
* Profile photo (only if you sign in with Google, pulled from your Google account)

**Usage Data**
* Expense splits you create: description, total amount, currency, split type
* Participants in your splits (by name or linked username)
* Payment and settlement records you record
* Groups you create or belong to
* Friend connections you establish within the app
* In-app notifications sent to your account

**Authentication Data**
* If you sign in with Google, we receive your name, email, and profile photo from Google via OAuth 2.0. We do not store your Google password.
* If you sign in with email/password, your password is hashed and managed by Supabase Auth. We never have access to your plain-text password.

**Device / Technical Data**
We do not collect device identifiers, location data, advertising IDs, or usage analytics beyond what is described above.

### 3. How We Use Your Data
* To provide core app functionality (creating splits, tracking balances, notifying participants)
* To identify you to other users you choose to connect with
* To send you in-app notifications about splits and payments involving you

We do not sell your data. We do not use your data for advertising. We do not share your data with third parties except as described in Section 4.

### 4. Third-Party Services
**Supabase**
All data is stored in a Supabase-managed PostgreSQL database hosted on AWS infrastructure. Supabase is used for authentication, database storage, and row-level security enforcement. Supabase's privacy policy applies to infrastructure-level data handling: https://supabase.com/privacy

**Google OAuth**
If you choose to sign in with Google, authentication is handled via Google's OAuth 2.0 service. Google's privacy policy applies to that sign-in flow: https://policies.google.com/privacy

### 5. Data Retention
Your data is retained for as long as your account is active. If you wish to delete your account and associated data, contact us at the email below and we will process your request.

### 6. Data Security
All data is transmitted over HTTPS. Database access is protected by row-level security (RLS) policies — users can only read and write data they are authorized to access. Authentication tokens are managed by Supabase Auth.

### 7. Children's Privacy
Pash is not directed at children under 13. We do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal data, contact us and we will delete it.

### 8. Your Rights
Depending on your jurisdiction, you may have the right to:
* Access the personal data we hold about you
* Request correction of inaccurate data
* Request deletion of your account and data
* Withdraw consent at any time

To exercise any of these rights, contact us at the email below.

### 9. Changes to This Policy
We may update this policy from time to time. The "Last updated" date at the top will reflect any changes. Continued use of the App after changes constitutes acceptance of the updated policy.

### 10. Contact
If you have any questions or concerns about this Privacy Policy, please reach out via the contact information listed on the developer's portfolio.`,
    },
    {
        id: "paisa-convert",
        name: "Paisa Convert",
        tagline: "Currency Converter",
        description:
            "Track, convert, and manage multiple world currencies in one clean, fast app. Whether you're traveling abroad, managing international finances, or just curious about exchange rates, Paisa Convert gives you live rates and a smooth experience right in your pocket.\n\nBuilt with Material Design 3, Paisa Convert is fast, intuitive, and easy on the eyes — whether you prefer light or dark mode. No ads. No accounts. No unnecessary permissions.",
        icon: "/products/paisa-convert/icon.png",
        features: [
            "Real-time exchange rates (updated every 10 mins)",
            "Multi-currency tracking for 50+ options",
            "Built-in calculator with arithmetic expressions",
            "6 primary color themes & deep customization",
            "Offline-friendly with local rate caching",
            "No ads. No accounts. No tracking.",
        ],
        platforms: ["android", "ios"],
        downloads: [
            {
                platform: "android",
                url: "#",
                label: "Play Store",
                external: true,
            },
        ],
        comingSoon: "iOS version coming soon.",
        developer: "Sabiq Sabry — novusian",
        privacyPolicy: `## Privacy Policy for Paisa Convert
Effective Date: February 26, 2026
Last Updated: February 26, 2026

### 1. Introduction
Paisa Convert ("the App") is a currency converter application developed for personal and informational use. This Privacy Policy explains how the App handles your information. We are committed to transparency and to protecting your privacy.

### 2. Information We Do Not Collect
Paisa Convert does not collect, store, transmit, or share any personally identifiable information. This includes:
* No name, email address, or account information
* No location data
* No device identifiers
* No usage analytics or crash reporting sent to us
* No advertising tracking

### 3. Data Stored Locally on Your Device
The App stores the following data locally on your device only, using Android's SharedPreferences storage. This data never leaves your device and is never transmitted to us:
* Your selected currencies and preferred base currency
* The last amount you entered
* Cached exchange rates (to support offline use)
* Your in-app settings and preferences (theme, font size, display options, etc.)

This data is stored solely to improve your experience across sessions and can be cleared at any time by uninstalling the App or clearing the App's data via your device settings.

### 4. Third-Party Services
The App uses the ExchangeRate-API (https://www.exchangerate-api.com) to fetch live exchange rate data. When the App requests exchange rates, a standard HTTP request is made to this service. This request does not include any personal information about you.

Please refer to ExchangeRate-API's own privacy policy for information on how they handle requests made to their service.

### 5. Internet Permission
The App requests internet access solely to retrieve live exchange rates from ExchangeRate-API. No other network communication takes place.

### 6. Children's Privacy
Paisa Convert does not target or knowingly collect information from children under the age of 13. The App does not collect any personal information from any user, regardless of age.

### 7. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date at the top of this page. Continued use of the App after any changes constitutes your acceptance of the updated policy.

### 8. Contact
If you have any questions or concerns about this Privacy Policy, please reach out via the contact information listed on the developer's portfolio.`,
    },
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
                platform: "android",
                url: "#",
                label: "Play Store",
                external: true,
            },
        ],
        comingSoon: "iOS version coming soon.",
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
