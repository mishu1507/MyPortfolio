"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all relative border"
            style={{
                backgroundColor: "var(--surface-hex)",
                borderColor: "var(--border-hex)",
                color: "var(--text-primary)",
            }}
            whileHover={{ scale: 1.1, borderColor: "var(--primary-hex)" }}
            whileTap={{ scale: 0.9 }}
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : 180,
                    scale: 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {theme === "light" ? (
                    <Sun size={18} className="text-[#FFC700]" />
                ) : (
                    <Moon size={18} className="text-[#FFD400]" />
                )}
            </motion.div>
        </motion.button>
    );
}
