"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
    Terminal,
    Menu,
    X,
    ArrowRight,
    Search,
    Monitor,
    Shield,
    ChevronRight
} from "lucide-react";

interface NavItem {
    id: string;
    label: string;
}

const navLinks = [
    { id: "command-center", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Ecosystem" },
    { id: "certifications", label: "Credentials" },
    { id: "lab", label: "Lab" },
    { id: "contact", label: "Contact" },
];

interface NavigationProps {
    activeSection: string;
    onNavigate: (section: string) => void;
    onToggleTerminal: () => void;
    terminalOpen: boolean;
}

import ThemeToggle from "./ThemeToggle";

export default function Navigation({
    activeSection,
    onNavigate,
    onToggleTerminal,
    terminalOpen,
}: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleNav = useCallback(
        (id: string) => {
            onNavigate(id);
            setMobileMenuOpen(false);
        },
        [onNavigate]
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <motion.nav
                className="max-w-6xl mx-auto rounded-2xl border border-[var(--border-hex)] bg-[var(--surface-hex)]/70 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => handleNav("command-center")}
                >
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary-hex)] flex items-center justify-center text-black font-black text-[10px] group-hover:rotate-12 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                        EXE
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black tracking-tighter text-sm leading-tight" style={{ color: "var(--text-primary)" }}>
                            ADITI BORKAR
                        </span>
                        <span className="text-[9px] font-mono font-bold opacity-50 tracking-widest line-height-none" style={{ color: "var(--text-secondary)" }}>
                            SYSTEMS_ENGINEER
                        </span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNav(link.id)}
                            className="relative text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer py-1 px-2 hover:bg-[var(--background-hex)] rounded-md"
                            style={{
                                color: activeSection === link.id ? "var(--text-primary)" : "var(--text-secondary)"
                            }}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[var(--primary-hex)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Desktop Right Tools */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-4 px-3 py-1.5 rounded-xl bg-[var(--background-hex)]/50 border border-[var(--border-hex)]">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-mono font-bold leading-none" style={{ color: "var(--text-muted)" }}>UPTIME</span>
                            <span className="text-[10px] font-mono font-black" style={{ color: "var(--success-hex)" }}>99.9%</span>
                        </div>
                        <div className="w-px h-6 bg-[var(--border-hex)]" />
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-mono font-bold leading-none" style={{ color: "var(--text-muted)" }}>LOCAL_TIME</span>
                            <span className="text-[10px] font-mono font-black" style={{ color: "var(--text-primary)" }}>
                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>

                    <div className="w-px h-4 bg-[var(--border-hex)] mx-1" />

                    <motion.button
                        onClick={onToggleTerminal}
                        className="p-2 rounded-xl border border-[var(--border-hex)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-hex)] transition-all cursor-pointer"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        title="Terminal Mode"
                    >
                        <Terminal size={16} />
                    </motion.button>

                    <ThemeToggle />
                </div>

                {/* Mobile Menu Trigger */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-1.5 rounded-lg text-[var(--text-primary)]"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary-hex)] origin-left z-[60]"
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-6 right-6 p-4 rounded-2xl border border-[var(--border-hex)] bg-[var(--surface-hex)]/95 backdrop-blur-xl shadow-2xl md:hidden z-40 overflow-hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNav(link.id)}
                                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition-all"
                                    style={{
                                        backgroundColor: activeSection === link.id ? "var(--primary-hex)" : "transparent",
                                        color: activeSection === link.id ? "#000000" : "var(--text-primary)",
                                    }}
                                >
                                    {link.label}
                                    {activeSection === link.id && <ChevronRight size={18} />}
                                </button>
                            ))}
                            <div className="h-px bg-[var(--border-hex)] my-2" />
                            <button
                                onClick={() => {
                                    onToggleTerminal();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium text-[var(--text-primary)]"
                            >
                                <Terminal size={18} />
                                <span>Terminal Mode</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
