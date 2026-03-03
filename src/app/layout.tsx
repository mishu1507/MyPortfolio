import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Aditi Borkar | Cybersecurity Systems Engineer",
    description:
        "Portfolio of Aditi Borkar - Cybersecurity Engineering Student building investigation frameworks and simulation-driven learning platforms. Explore projects, certifications, and systems thinking approach.",
    keywords: [
        "cybersecurity",
        "portfolio",
        "Aditi Borkar",
        "digital forensics",
        "security engineer",
        "ForensicLens",
        "systems engineering",
    ],
    authors: [{ name: "Aditi Borkar" }],
    openGraph: {
        title: "Aditi Borkar | Cybersecurity Systems Engineer",
        description:
            "Turning complex systems into understandable experiences. Explore my cyber systems lab.",
        type: "website",
    },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${ibmPlexMono.variable}`} suppressHydrationWarning>
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=general-sans@700,600,500,400&display=swap"
                    rel="stylesheet"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('portfolio-theme');
                                    var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                                    if (!theme && supportDarkMode) theme = 'dark';
                                    if (!theme) theme = 'light';
                                    document.documentElement.setAttribute('data-theme', theme);
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
