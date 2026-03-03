"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectSkillsSummary, type Project } from "@/data/projects";
import {
    ExternalLink,
    Github,
    ChevronDown,
    ChevronUp,
    Tag,
    Layers,
    Wrench,
    Lightbulb,
    AlertCircle,
    FileText,
    Sparkles,
    FolderKanban,
} from "lucide-react";
import ShowMoreButton from "./ui/ShowMoreButton";
import FeaturedSection from "./ui/FeaturedSection";
import ExpandableGrid from "./ui/ExpandableGrid";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function StatusBadge({ status }: { status: Project["status"] }) {
    const config = {
        deployed: { label: "● DEPLOYED", bg: "var(--success-hex)", color: "#000000" },
        archived: { label: "○ ARCHIVED", bg: "var(--border-hex)", color: "var(--text-primary)" },
        concept: { label: "◐ CONCEPT", bg: "var(--primary-hex)", color: "#000000" },
    };
    const s = config[status];
    return (
        <span
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{ backgroundColor: s.bg, color: s.color }}
        >
            {s.label}
        </span>
    );
}

function CaseFile({ project, featured = false }: { project: Project; featured?: boolean }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            variants={itemVariants}
            className={`glass-card overflow-hidden transition-all ${featured ? 'border-l-[8px]' : 'border-l-[4px]'}`}
            style={{
                borderColor: project.color,
                backgroundColor: "var(--surface-hex)",
                boxShadow: "var(--block-shadow)"
            }}
        >
            {/* Case File Header */}
            <div className={`${featured ? 'p-6 md:p-8' : 'p-5'}`}>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-5">
                        <motion.div
                            className={`${featured ? 'w-16 h-16 text-3xl' : 'w-12 h-12 text-xl'} rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]`}
                            style={{
                                backgroundColor: project.color,
                                color: "#000000",
                                border: "2px solid #000000",
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            {project.icon}
                        </motion.div>
                        <div>
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span
                                    className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border"
                                    style={{
                                        backgroundColor: "var(--background-hex)",
                                        color: project.color,
                                        borderColor: `${project.color}40`
                                    }}
                                >
                                    {project.codename}
                                </span>
                                <StatusBadge status={project.status} />
                            </div>
                            <h3
                                className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-black tracking-tighter`}
                                style={{ color: "var(--text-primary)" }}
                            >
                                {project.title}
                            </h3>
                            <p className="text-[11px] mt-1 font-bold opacity-60 tracking-wider flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                                <Sparkles size={10} style={{ color: project.color }} />
                                {project.skillsRole.toUpperCase()}
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 shrink-0">
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black cursor-pointer border-2 border-black shadow-[3px_3px_0px_black]"
                                style={{
                                    backgroundColor: "var(--primary-hex)",
                                    color: "#000000",
                                }}
                                whileHover={{ translate: "-1px -1px", boxShadow: "4px 4px 0px black" }}
                                whileTap={{ translate: "1px 1px", boxShadow: "0px 0px 0px black" }}
                            >
                                <ExternalLink size={14} /> LIVE
                            </motion.a>
                        )}
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold cursor-pointer border border-[var(--border-hex)] hover:bg-[var(--background-hex)] transition-colors"
                                style={{
                                    color: "var(--text-primary)",
                                }}
                                whileHover={{ x: 2 }}
                            >
                                <Github size={14} /> CODE
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Problem Section */}
                <div className="mb-6 bg-[var(--background-hex)]/30 p-4 rounded-xl border border-[var(--border-hex)]/50">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={14} style={{ color: project.color }} />
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[var(--text-muted)]">
                            Problem Definition
                        </span>
                    </div>
                    <p className={`${featured ? 'text-base' : 'text-sm'} leading-relaxed font-medium`} style={{ color: "var(--text-secondary)" }}>
                        {project.problem}
                    </p>
                </div>

                {/* Tools */}
                <div className="flex items-center gap-2 flex-wrap mb-6">
                    <Wrench size={14} className="text-[var(--text-muted)] mr-1" />
                    {project.tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-3 py-1 rounded-lg text-xs font-bold border-2 transition-all hover:scale-105"
                            style={{
                                backgroundColor: "var(--background-hex)",
                                color: "var(--text-primary)",
                                borderColor: "var(--border-hex)",
                            }}
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                {/* Open Case File Button */}
                <motion.button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase px-6 py-2.5 rounded-xl cursor-pointer w-full justify-center transition-all border-2 border-[var(--border-hex)]"
                    style={{
                        backgroundColor: expanded ? "var(--background-hex)" : "var(--surface-hex)",
                        color: expanded ? "var(--text-primary)" : "var(--primary-hex)",
                    }}
                    whileHover={{ borderColor: "var(--primary-hex)" }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FileText size={14} />
                    {expanded ? "Close Investigation" : "Open Full Case File"}
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                        <ChevronDown size={14} />
                    </motion.div>
                </motion.button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-8 space-y-8 border-t border-[var(--border-hex)] pt-8">
                            {/* System Design */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Layers size={14} className="text-[var(--success-hex)]" />
                                        <span className="text-[10px] font-black tracking-widest uppercase text-[var(--success-hex)]">
                                            System Design
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                        {project.systemDesign}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb size={14} className="text-[var(--accent-hex)]" />
                                        <span className="text-[10px] font-black tracking-widest uppercase text-[var(--accent-hex)]">
                                            Core Learnings
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                        {project.whatILearned}
                                    </p>
                                </div>
                            </div>

                            {/* Architecture */}
                            <div className="bg-[var(--background-hex)] p-6 rounded-2xl border border-[var(--border-hex)]">
                                <div className="flex items-center gap-2 mb-4">
                                    <Tag size={14} className="text-[var(--blue-hex)]" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-[var(--blue-hex)]">
                                        Architecture & Logic
                                    </span>
                                </div>
                                <div className="font-mono text-[11px] leading-loose opacity-80" style={{ color: "var(--text-primary)" }}>
                                    {project.architecture}
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles size={14} className="text-[var(--primary-hex)]" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-[var(--primary-hex)]">
                                        Skills Verified
                                    </span>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono bg-[var(--background-hex)] border border-[var(--border-hex)] text-[var(--text-secondary)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Sort projects to prioritize flagship/featured ones
    const featuredProjects = projects.filter(p => p.classification === "flagship");
    const otherProjects = projects.filter(p => p.classification !== "flagship");

    return (
        <motion.section
            id="projects"
            className="py-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            <FeaturedSection
                title="PROJECT.INDEX"
                subtitle="Systemic investigations into cybersecurity, automation, and engineering"
                icon={<FolderKanban size={32} />}
            >
                {/* Featured Projects (Primary View) */}
                <div className="space-y-8 mb-12">
                    {featuredProjects.map((project) => (
                        <CaseFile key={project.id} project={project} featured={true} />
                    ))}
                </div>
            </FeaturedSection>

            {/* Expandable Section */}
            <div className="flex flex-col items-center w-full">
                <ExpandableGrid isExpanded={isExpanded}>
                    {isExpanded && (
                        <div className="w-full space-y-6 mb-12">
                            <div className="flex items-center gap-4 my-8">
                                <span className="h-px flex-1 bg-[var(--border-hex)]" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30">
                                    Extended Archive
                                </span>
                                <span className="h-px flex-1 bg-[var(--border-hex)]" />
                            </div>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {otherProjects.map((project) => (
                                    <CaseFile key={project.id} project={project} />
                                ))}
                            </motion.div>
                        </div>
                    )}
                </ExpandableGrid>

                <motion.div variants={itemVariants} className="mt-4">
                    <ShowMoreButton
                        onClick={() => setIsExpanded(!isExpanded)}
                        isExpanded={isExpanded}
                        labelShow="Show More Projects →"
                        labelHide="Show Less Archive"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
