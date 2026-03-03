"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import {
    Github,
    Linkedin,
    Award,
    FolderGit2,
    BookOpen,
    ExternalLink,
    ArrowRight,
    Sparkles,
    FlaskConical,
} from "lucide-react";

interface CommandCenterProps {
    onNavigate: (section: string) => void;
}

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

export default function CommandCenter({ onNavigate }: CommandCenterProps) {
    const deployedProjects = projects.filter((p) => p.status === "deployed");
    const conceptProjects = projects.filter((p) => p.status === "concept");
    const flagshipProjects = projects.filter(
        (p) => p.classification === "flagship" && p.status !== "archived"
    );

    return (
        <motion.section
            id="command-center"
            className="min-h-screen py-8 md:py-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Minimal System Identity Header */}
            <motion.div variants={itemVariants} className="mb-16 mt-4">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-tighter"
                                style={{
                                    backgroundColor: "var(--primary-hex)",
                                    color: "#000000",
                                }}
                            >
                                SYSTEM_STATUS: ONLINE
                            </span>
                            <span
                                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-tighter border"
                                style={{
                                    borderColor: "var(--border-hex)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                CORE_VERSION: 2.0.27
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter leading-none"
                            style={{ color: "var(--text-primary)" }}
                        >
                            ADITI BORKAR
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                            <p
                                className="text-xl md:text-2xl font-medium tracking-tight"
                                style={{ color: "var(--blue-hex)" }}
                            >
                                Cybersecurity Systems Engineer
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success-hex)]" />
                                <p className="text-sm font-mono" style={{ color: "var(--text-secondary)" }}>
                                    Parul University [2023–2027]
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 max-w-2xl">
                            <p
                                className="text-lg md:text-xl font-light leading-relaxed"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Transforming complex security architectures into
                                <span className="font-medium" style={{ color: "var(--text-primary)" }}> fluid, human-centric systems.</span>
                                <br />
                                Currently building investigation frameworks and simulation environments.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
                        <motion.a
                            href="https://github.com/mishu1507"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-0 py-1 transition-all"
                            style={{ color: "var(--text-secondary)" }}
                            whileHover={{ color: "var(--text-primary)", x: 4 }}
                        >
                            <span className="font-mono text-[10px] opacity-50">01.</span>
                            <Github size={16} />
                            <span className="font-bold tracking-widest text-[11px]">GITHUB</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/mishuborkar-csa152006/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-0 py-1 transition-all"
                            style={{ color: "var(--text-secondary)" }}
                            whileHover={{ color: "var(--blue-hex)", x: 4 }}
                        >
                            <span className="font-mono text-[10px] opacity-50">02.</span>
                            <Linkedin size={16} />
                            <span className="font-bold tracking-widest text-[11px]">LINKEDIN</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                        </motion.a>
                        <motion.a
                            href="https://www.credly.com/users/aditi-borkar.0783ec0b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-0 py-1 transition-all"
                            style={{ color: "var(--text-secondary)" }}
                            whileHover={{ color: "var(--primary-hex)", x: 4 }}
                        >
                            <span className="font-mono text-[10px] opacity-50">03.</span>
                            <Award size={16} />
                            <span className="font-bold tracking-widest text-[11px]">CREDLY</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {/* Projects */}
                <motion.div variants={itemVariants}>
                    <div
                        className="glass-card glass-card-hover p-5 h-full transition-all duration-300 cursor-pointer border"
                        onClick={() => onNavigate("projects")}
                        style={{ boxShadow: "var(--block-shadow)", backgroundColor: "var(--surface-hex)", borderColor: "var(--border-hex)" }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "var(--surface-hex)", border: "1px solid var(--blue-hex)" }}
                            >
                                <FolderGit2 size={20} style={{ color: "var(--blue-hex)" }} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                                    {projects.length}
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                                    Total Projects
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            <span
                                className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--success-hex)", borderColor: "var(--success-hex)" }}
                            >
                                {deployedProjects.length} live
                            </span>
                            <span
                                className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--accent-hex)", borderColor: "var(--accent-hex)" }}
                            >
                                {conceptProjects.length} concept
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={itemVariants}>
                    <div
                        className="glass-card glass-card-hover p-5 h-full transition-all duration-300 cursor-pointer border"
                        onClick={() => onNavigate("certifications")}
                        style={{ boxShadow: "var(--block-shadow)", backgroundColor: "var(--surface-hex)", borderColor: "var(--border-hex)" }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "var(--surface-hex)", border: "1px solid var(--accent-hex)" }}
                            >
                                <Award size={20} style={{ color: "var(--accent-hex)" }} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                                    {certifications.length}
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                                    Certifications
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--blue-hex)", borderColor: "var(--blue-hex)" }}>
                                6 security
                            </span>
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--success-hex)", borderColor: "var(--success-hex)" }}>
                                6 cloud
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Flagship */}
                <motion.div variants={itemVariants}>
                    <div
                        className="glass-card glass-card-hover p-5 h-full transition-all duration-300 cursor-pointer border"
                        onClick={() => onNavigate("projects")}
                        style={{ boxShadow: "var(--block-shadow)", backgroundColor: "var(--surface-hex)", borderColor: "var(--border-hex)" }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "var(--surface-hex)", border: "1px solid var(--primary-hex)" }}
                            >
                                <Sparkles size={20} style={{ color: "var(--primary-hex)" }} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                                    {flagshipProjects.length}
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                                    Flagship Projects
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--primary-hex)", borderColor: "var(--primary-hex)" }}>
                                ★ core portfolio
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Learning Focus */}
                <motion.div variants={itemVariants}>
                    <div
                        className="glass-card glass-card-hover p-5 h-full transition-all duration-300 cursor-pointer border"
                        onClick={() => onNavigate("lab")}
                        style={{ boxShadow: "var(--block-shadow)", backgroundColor: "var(--surface-hex)", borderColor: "var(--border-hex)" }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "var(--surface-hex)", border: "1px solid var(--success-hex)" }}
                            >
                                <FlaskConical size={20} style={{ color: "var(--success-hex)" }} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                                    Active
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                                    Learning Focus
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--blue-hex)", borderColor: "var(--blue-hex)" }}>
                                Cloud Security
                            </span>
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono border"
                                style={{ backgroundColor: "var(--surface-hex)", color: "var(--accent-hex)", borderColor: "var(--accent-hex)" }}>
                                AI Security
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Interactive Project Map */}
            <motion.div variants={itemVariants}>
                <div className="glass-card p-6 md:p-8 border" style={{ boxShadow: "var(--block-shadow)", backgroundColor: "var(--surface-hex)", borderColor: "var(--border-hex)" }}>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Sparkles size={20} style={{ color: "var(--accent-hex)" }} />
                            <h2
                                className="text-xl font-bold"
                                style={{ color: "var(--text-primary)" }}
                            >
                                Project Network
                            </h2>
                        </div>
                        <motion.button
                            onClick={() => onNavigate("projects")}
                            className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg cursor-pointer border"
                            style={{ color: "var(--blue-hex)", backgroundColor: "var(--surface-hex)", borderColor: "var(--blue-hex)", boxShadow: "var(--block-shadow)" }}
                            whileHover={{
                                backgroundColor: "var(--background-hex)",
                                x: 4,
                            }}
                        >
                            View All <ArrowRight size={14} />
                        </motion.button>
                    </div>

                    {/* Node Map - Flagship Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {flagshipProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-node relative glass-card p-5 cursor-pointer border"
                                style={{
                                    borderLeft: `3px solid ${project.color}`,
                                    boxShadow: "var(--block-shadow)",
                                    backgroundColor: "var(--surface-hex)",
                                    borderColor: "var(--border-hex)",
                                }}
                                onClick={() => onNavigate("projects")}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: `4px 4px 0px #000000`, // Keep hard shadow on hover
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                {/* Node indicator */}
                                <div
                                    className="absolute -left-[7px] top-6 w-3 h-3 rounded-full border-2 border-white"
                                    style={{ backgroundColor: project.color }}
                                />

                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">{project.icon}</span>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                                            {project.title}
                                        </h3>
                                        <p
                                            className="text-[10px] font-mono mb-2"
                                            style={{ color: project.color }}
                                        >
                                            {project.codename}
                                        </p>
                                        <p
                                            className="text-xs line-clamp-2"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {project.problem.substring(0, 90)}...
                                        </p>

                                        <div className="flex gap-1.5 mt-3 flex-wrap">
                                            {project.tools.slice(0, 3).map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="px-2 py-0.5 rounded text-[9px] font-bold font-mono border"
                                                    style={{
                                                        backgroundColor: "var(--surface-hex)",
                                                        color: project.color,
                                                        borderColor: project.color,
                                                        boxShadow: `1px 1px 0px var(--shadow-color)`,
                                                    }}
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="absolute top-3 right-3">
                                    <span
                                        className="flex items-center gap-1 text-[9px] font-mono"
                                        style={{
                                            backgroundColor:
                                                project.status === "deployed"
                                                    ? "var(--surface-hex)"
                                                    : "var(--surface-hex)",
                                            color:
                                                project.status === "deployed"
                                                    ? "var(--success-hex)"
                                                    : "var(--primary-hex)",
                                            border: `1px solid ${project.status === "deployed" ? "var(--success-hex)" : "var(--primary-hex)"}`,
                                        }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    project.status === "deployed"
                                                        ? "var(--success-hex)"
                                                        : "var(--primary-hex)",
                                            }}
                                        />
                                        {project.status === "deployed" ? "LIVE" : "CONCEPT"}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
