"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BootScreen from "@/components/BootScreen";
import Navigation from "@/components/Navigation";
import CommandCenter from "@/components/CommandCenter";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import LabSection from "@/components/LabSection";
import ContactSection from "@/components/ContactSection";
import TerminalMode from "@/components/TerminalMode";

export default function Home() {
    const [booted, setBooted] = useState(false);
    const [activeSection, setActiveSection] = useState("command-center");
    const [terminalOpen, setTerminalOpen] = useState(false);

    const mainRef = useRef<HTMLDivElement>(null);

    const handleBootComplete = useCallback(() => {
        setBooted(true);
    }, []);

    const handleNavigate = useCallback((section: string) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const handleToggleTerminal = useCallback(() => {
        setTerminalOpen((prev) => !prev);
    }, []);

    return (
        <>
            {/* Boot Screen */}
            <AnimatePresence>
                {!booted && <BootScreen onComplete={handleBootComplete} />}
            </AnimatePresence>

            {/* Main App */}
            {booted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen"
                    style={{ backgroundColor: "var(--background-hex)" }}
                >
                    {/* Background Pattern */}
                    <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0" />

                    {/* Navigation */}
                    <Navigation
                        activeSection={activeSection}
                        onNavigate={handleNavigate}
                        onToggleTerminal={handleToggleTerminal}
                        terminalOpen={terminalOpen}
                    />

                    {/* Main Content */}
                    <main
                        ref={mainRef}
                        className="relative z-10 px-4 md:px-12 lg:px-20 pt-28 max-w-6xl mx-auto"
                    >
                        <CommandCenter onNavigate={handleNavigate} />

                        <div
                            className="h-px my-4"
                            style={{ backgroundColor: "var(--border-hex)" }}
                        />

                        <ProjectsSection />

                        <div
                            className="h-px my-4"
                            style={{ backgroundColor: "rgba(42, 57, 88, 0.5)" }}
                        />

                        <CertificationsSection />

                        <div
                            className="h-px my-4"
                            style={{ backgroundColor: "rgba(42, 57, 88, 0.5)" }}
                        />

                        <SkillsSection />

                        <div
                            className="h-px my-4"
                            style={{ backgroundColor: "rgba(42, 57, 88, 0.5)" }}
                        />

                        <LabSection />

                        <div
                            className="h-px my-4"
                            style={{ backgroundColor: "rgba(42, 57, 88, 0.5)" }}
                        />

                        <ContactSection />
                    </main>

                    {/* Terminal Mode */}
                    <TerminalMode
                        isOpen={terminalOpen}
                        onClose={() => setTerminalOpen(false)}
                    />
                </motion.div>
            )}
        </>
    );
}
