"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Github,
    Linkedin,
    Award,
    ExternalLink,
    Send,
    Heart,
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const contactLinks = [
    {
        icon: <Mail size={22} />,
        label: "Email",
        value: "aditi.borkar1507@gmail.com",
        href: "mailto:aditi.borkar1507@gmail.com",
        color: "#2F80ED",
        description: "Best for project inquiries and collaboration",
    },
    {
        icon: <Linkedin size={22} />,
        label: "LinkedIn",
        value: "mishuborkar-csa152006",
        href: "https://linkedin.com/in/mishuborkar-csa152006/",
        color: "#2F80ED",
        description: "Professional network and career updates",
    },
    {
        icon: <Github size={22} />,
        label: "GitHub",
        value: "mishu1507",
        href: "https://github.com/mishu1507",
        color: "#FF5C8A",
        description: "Source code and project repositories",
    },
    {
        icon: <Award size={22} />,
        label: "Credly",
        value: "aditi-borkar",
        href: "https://www.credly.com/users/aditi-borkar.0783ec0b",
        color: "#FFD400",
        description: "Verified badges and certifications",
    },
];

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            className="py-12 pb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <Send size={28} style={{ color: "var(--primary-hex)" }} />
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Let&apos;s Connect
                    </h2>
                </div>
                <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                    Always open to discussing cybersecurity, systems thinking, and
                    collaborative projects.
                </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
                {contactLinks.map((link) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className="glass-card glass-card-hover p-5 flex items-start gap-4 transition-all duration-300 cursor-pointer group border"
                        style={{
                            backgroundColor: "var(--surface-hex)",
                            borderColor: "var(--border-hex)",
                            boxShadow: "var(--block-shadow)",
                        }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                                backgroundColor: link.color,
                                color: "#000000",
                            }}
                        >
                            {link.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h3
                                    className="font-bold text-sm"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {link.label}
                                </h3>
                                <ExternalLink
                                    size={12}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ color: link.color }}
                                />
                            </div>
                            <p
                                className="text-xs font-mono truncate"
                                style={{ color: link.color }}
                            >
                                {link.value}
                            </p>
                            <p className="text-[11px] mt-1" style={{ color: "var(--text-secondary)" }}>
                                {link.description}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Footer */}
            <motion.div variants={itemVariants} className="text-center">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs border"
                    style={{
                        backgroundColor: "var(--surface-hex)",
                        borderColor: "var(--border-hex)",
                        color: "var(--text-secondary)",
                        boxShadow: "var(--block-shadow)",
                    }}
                >
                    <span>Built with</span>
                    <Heart size={12} style={{ color: "#FF5C8A" }} className="animate-pulse" />
                    <span>by Aditi Borkar</span>
                    <span>•</span>
                    <span className="font-mono">Portfolio v2.0.27</span>
                </div>
            </motion.div>
        </motion.section>
    );
}
