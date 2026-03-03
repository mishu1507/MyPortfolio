import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: "#F4F8FF",
                    primary: "#5B8CFF",
                    accent: "#FFB86B",
                    secondary: "#7ED7C1",
                    text: "#1A2238",
                    card: "#FFFFFF",
                    "card-hover": "#EEF3FF",
                    muted: "#8896B3",
                    border: "#D6E0F5",
                    "terminal-bg": "#1A2238",
                    "terminal-text": "#7ED7C1",
                    "terminal-accent": "#FFB86B",
                    success: "#6BCB77",
                    warning: "#FFB86B",
                    error: "#FF6B6B",
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                "terminal-blink": "terminalBlink 1s step-end infinite",
                "float": "float 6s ease-in-out infinite",
                "node-pulse": "nodePulse 3s ease-in-out infinite",
                "scan-line": "scanLine 4s linear infinite",
                "typing": "typing 3.5s steps(40, end)",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(91, 140, 255, 0.3)" },
                    "50%": { boxShadow: "0 0 20px rgba(91, 140, 255, 0.6)" },
                },
                terminalBlink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                nodePulse: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
                    "50%": { transform: "scale(1.05)", opacity: "1" },
                },
                scanLine: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
                typing: {
                    "0%": { width: "0" },
                    "100%": { width: "100%" },
                },
            },
            boxShadow: {
                "cyber-sm": "0 2px 8px rgba(91, 140, 255, 0.08)",
                "cyber-md": "0 4px 16px rgba(91, 140, 255, 0.12)",
                "cyber-lg": "0 8px 32px rgba(91, 140, 255, 0.16)",
                "cyber-glow": "0 0 20px rgba(91, 140, 255, 0.3)",
                "accent-glow": "0 0 20px rgba(255, 184, 107, 0.3)",
            },
        },
    },
    plugins: [],
};
export default config;
