"use client";

import { motion } from "framer-motion";
import { FlaskConical, Brain, Search, Network, Shield, Code } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const pillars = [
    {
        icon: <Search size={24} />,
        title: "Investigation-First Thinking",
        description:
            "I approach every system like a forensic case. Before writing code, I analyze the problem, map the attack surface, and understand the full context. This means I build solutions that address root causes, not symptoms.",
        color: "#3A7DFF",
        example:
            "In ForensicLens V2, I designed the log ingestion pipeline by first understanding how investigators manually correlate events - then automated that workflow.",
    },
    {
        icon: <Network size={24} />,
        title: "Systems Over Silos",
        description:
            "I see technology as interconnected systems, not isolated tools. Every component exists in relationship to others. Understanding these connections reveals both opportunities and vulnerabilities.",
        color: "#6EC2B3",
        example:
            "MERNVerseOS demonstrates this by simulating how OS components interact - processes, filesystems, and schedulers working as one system.",
    },
    {
        icon: <Shield size={24} />,
        title: "Defense-in-Depth Mindset",
        description:
            "Security isn't a layer you add - it's a perspective you design with. I think about trust boundaries, data flow, and failure modes from the beginning of every project.",
        color: "#E6A15A",
        example:
            "Through Quick Heal Academy training, I've internalized that every system should account for incident response, not just prevention.",
    },
    {
        icon: <Code size={24} />,
        title: "Build to Understand",
        description:
            "The best way to deeply understand a system is to build one. I create simulation environments and tools that make abstract concepts tangible and interactive.",
        color: "#5FAF7A",
        example:
            "BrainSparkz was born from the belief that cognitive skills improve through interactive practice, not passive consumption.",
    },
];

export default function LabSection() {
    return (
        <motion.section
            id="lab"
            className="py-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <FlaskConical size={28} style={{ color: "var(--accent-hex)" }} />
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        How I Understand Systems
                    </h2>
                </div>
                <p className="text-sm max-w-xl" style={{ color: "var(--text-secondary)" }}>
                    My approach to learning and building - not just what I know, but how I
                    think about technology and security.
                </p>
            </motion.div>

            {/* Philosophy Overview */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                    <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(58, 125, 255, 0.1)" }}
                    >
                        <Brain size={24} style={{ color: "#3A7DFF" }} />
                    </div>
                    <div>
                        <h3
                            className="text-lg font-bold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            My Learning Philosophy
                        </h3>
                        <p
                            className="text-sm leading-relaxed mb-4"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            I believe cybersecurity is fundamentally about understanding{" "}
                            <strong style={{ color: "var(--blue-hex)" }}>how systems work</strong>,
                            not just how they break. Through my training at Quick Heal Academy
                            and hands-on project work, I&apos;ve developed a methodology that
                            combines{" "}
                            <strong style={{ color: "var(--success-hex)" }}>
                                investigation rigor
                            </strong>{" "}
                            with{" "}
                            <strong style={{ color: "var(--accent-hex)" }}>
                                creative engineering
                            </strong>
                            .
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            Every project I build is an experiment in translating complex
                            systems into something understandable and interactive. Whether it&apos;s
                            a forensic investigation framework or a gamified learning platform,
                            the core question is always the same:{" "}
                            <em style={{ color: "var(--blue-hex)" }}>
                                &ldquo;How does this system actually work?&rdquo;
                            </em>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Thinking Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        variants={itemVariants}
                        className="glass-card glass-card-hover p-6 transition-all duration-300"
                        style={{
                            borderLeft: `3px solid ${pillar.color}`,
                            backgroundColor: "var(--surface-hex)",
                            borderColor: "var(--border-hex)",
                            boxShadow: "var(--block-shadow)",
                        }}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                                style={{
                                    backgroundColor: "var(--surface-hex)",
                                    border: `2px solid var(--blue-hex)`,
                                    boxShadow: "2px 2px 0px var(--shadow-color)",
                                    color: pillar.color
                                }}
                            >
                                {pillar.icon}
                            </div>
                            <div>
                                <h3
                                    className="font-bold text-base mb-2"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {pillar.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-3"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {pillar.description}
                                </p>

                                {/* Example */}
                                <div
                                    className="p-4 rounded border"
                                    style={{
                                        backgroundColor: "var(--surface-hex)",
                                        borderColor: "var(--border-hex)",
                                        boxShadow: "2px 2px 0px var(--shadow-color)",
                                    }}
                                >
                                    <p
                                        className="text-xs font-semibold mb-1"
                                        style={{ color: pillar.color }}
                                    >
                                        In Practice:
                                    </p>
                                    <p
                                        className="text-xs leading-relaxed"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {pillar.example}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Training Badge */}
            <motion.div
                variants={itemVariants}
                className="mt-8 glass-card p-6 text-center"
                style={{
                    backgroundColor: "var(--surface-hex)",
                    borderColor: "var(--border-hex)",
                    boxShadow: "var(--block-shadow)",
                }}
            >
                <p
                    className="text-xs font-mono tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                >
                    TRAINED BY
                </p>
                <p className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    Quick Heal Academy
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Industry Embedded Cybersecurity Program at Parul University
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {[
                        "Incident Response",
                        "Digital Forensics",
                        "Network Defense",
                        "VAPT",
                        "SIEM Monitoring",
                        "Cloud Security",
                    ].map((area) => (
                        <span
                            key={area}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                backgroundColor: "var(--success-hex)",
                                color: "#000000",
                                border: "1px solid #000000",
                            }}
                        >
                            {area}
                        </span>
                    ))}
                    <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold"
                        style={{
                            backgroundColor: "var(--success-hex)",
                            color: "#000000",
                            border: "1px solid #000000",
                        }}
                    >
                        VERIFIED SYSTEM
                    </span>
                </div>
            </motion.div>
        </motion.section>
    );
}
