"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import { Cpu, X } from "lucide-react";

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

const proficiencyLabel: Record<Skill["proficiency"], { label: string; color: string }> = {
    core: { label: "Core", color: "#2F80ED" },
    proficient: { label: "Proficient", color: "#00B894" },
    familiar: { label: "Familiar", color: "#FFD400" },
};

import { useRef, useEffect } from "react";

export default function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState<{
        skill: Skill;
        categoryColor: string;
    } | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedSkill(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setSelectedSkill(null);
            }
        };
        if (selectedSkill) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectedSkill]);

    return (
        <motion.section
            id="skills"
            className="py-12 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
                    <div className="p-3 rounded-2xl bg-[var(--surface-hex)] border border-[var(--border-hex)] text-[var(--success-hex)]">
                        <Cpu size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
                            TECH<span className="text-[var(--primary-hex)]">.ECOSYSTEM</span>
                        </h2>
                        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                            Curated technology stack - click nodes for deployment context
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.id}
                        variants={itemVariants}
                        className="glass-card group p-6 border-t-[6px] transition-all duration-300"
                        style={{
                            borderColor: category.color,
                            backgroundColor: "var(--surface-hex)",
                            boxShadow: "var(--block-shadow)"
                        }}
                    >
                        {/* Category Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl">{category.icon}</span>
                            <h3 className="font-bold tracking-tight text-lg" style={{ color: "var(--text-primary)" }}>
                                {category.title}
                            </h3>
                        </div>

                        {/* Chips Grid */}
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => {
                                const profLevel = proficiencyLabel[skill.proficiency];
                                const isSelected = selectedSkill?.skill.name === skill.name;

                                return (
                                    <motion.button
                                        key={skill.name}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedSkill({ skill, categoryColor: category.color });
                                        }}
                                        className="relative px-3.5 py-1.5 rounded-xl text-[13px] font-bold border transition-all cursor-pointer flex items-center gap-2"
                                        style={{
                                            backgroundColor: isSelected ? category.color : "var(--background-hex)",
                                            color: isSelected ? "#000000" : "var(--text-secondary)",
                                            borderColor: isSelected ? "#000000" : "var(--border-hex)",
                                            boxShadow: isSelected ? "2px 2px 0px var(--shadow-color)" : "none",
                                        }}
                                        whileHover={{
                                            y: -2,
                                            backgroundColor: isSelected ? category.color : "var(--surface-hex)",
                                            color: isSelected ? "#000000" : "var(--text-primary)",
                                            borderColor: isSelected ? "#000000" : category.color,
                                            boxShadow: "4px 4px 0px var(--shadow-color)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill.name}
                                        <div
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: isSelected ? "#000000" : profLevel.color }}
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Instant Info Panel (Floating) */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        ref={panelRef}
                        className="fixed bottom-8 right-8 z-[100] w-[90%] max-w-[340px] md:max-w-[400px]"
                        initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div
                            className="glass-card p-6 border-l-[8px] relative shadow-2xl overflow-hidden"
                            style={{
                                borderColor: selectedSkill.categoryColor,
                                backgroundColor: "var(--surface-hex)",
                            }}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none rotate-12">
                                <Cpu size={120} />
                            </div>

                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="absolute top-4 right-4 p-1 rounded-full hover:bg-[var(--border-hex)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-black tracking-widest uppercase opacity-50" style={{ color: "var(--text-primary)" }}>
                                        Deployment Context
                                    </span>
                                    <div className="h-px flex-1 bg-[var(--border-hex)]" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
                                    {selectedSkill.skill.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span
                                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                        style={{
                                            backgroundColor: proficiencyLabel[selectedSkill.skill.proficiency].color + "20",
                                            color: proficiencyLabel[selectedSkill.skill.proficiency].color,
                                            border: `1px solid ${proficiencyLabel[selectedSkill.skill.proficiency].color}40`
                                        }}
                                    >
                                        {proficiencyLabel[selectedSkill.skill.proficiency].label.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: "var(--text-secondary)" }}>
                                {selectedSkill.skill.context}
                            </p>

                            {/* Related Projects */}
                            {projects.filter(p => p.tools.includes(selectedSkill.skill.name)).length > 0 && (
                                <div className="mb-6">
                                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                                        Active Deployment In:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {projects
                                            .filter(p => p.tools.includes(selectedSkill.skill.name))
                                            .map(p => (
                                                <div
                                                    key={p.id}
                                                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--background-hex)] border border-[var(--border-hex)]"
                                                >
                                                    <span className="text-xs">{p.icon}</span>
                                                    <span className="text-[10px] font-bold" style={{ color: "var(--text-primary)" }}>{p.title}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between text-[11px] font-mono border-t pt-4" style={{ borderColor: "var(--border-hex)" }}>
                                <span style={{ color: "var(--text-muted)" }}>Status: Operational</span>
                                <span
                                    className="font-bold flex items-center gap-1.5"
                                    style={{ color: selectedSkill.categoryColor }}
                                >
                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedSkill.categoryColor }} />
                                    Active Stack
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section >
    );
}
