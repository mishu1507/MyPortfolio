"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Filter, X, ChevronDown } from "lucide-react";
import {
    certifications,
    Certification,
    categoryLabels,
    categoryColors,
    categoryIcons
} from "@/data/certifications";
import ShowMoreButton from "./ui/ShowMoreButton";
import FeaturedSection from "./ui/FeaturedSection";
import ExpandableGrid from "./ui/ExpandableGrid";
import DynamicIcon from "./ui/DynamicIcon";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function CertificationsSection() {
    const [filter, setFilter] = useState<Certification["category"] | "all">("all");
    const [isExpanded, setIsExpanded] = useState(false);

    // Top-tier certifications to feature
    const featuredIds = [
        "aws-cloud-practitioner",
        "ibm-qradar-siem",
        "cisco-network-defense",
        "cpps",
        "qh-incident-response",
        "ai-engineer"
    ];

    const filteredCerts = certifications.filter(
        (cert) => filter === "all" || cert.category === filter
    );

    const featuredCerts = filteredCerts.filter(c => featuredIds.includes(c.id));
    const otherCerts = filteredCerts.filter(c => !featuredIds.includes(c.id));

    return (
        <motion.section
            id="certifications"
            className="py-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <FeaturedSection
                title="VERIFIED.CERTIFICATES"
                subtitle="Industry-validated expertise across the security and engineering spectrum"
                icon={<Award size={32} />}
            >
                {/* Filter Bar */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[var(--border-hex)]">
                    <button
                        onClick={() => setFilter("all")}
                        className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border"
                        style={{
                            backgroundColor: filter === "all" ? "var(--text-primary)" : "var(--surface-hex)",
                            color: filter === "all" ? "var(--background-hex)" : "var(--text-secondary)",
                            borderColor: filter === "all" ? "var(--text-primary)" : "var(--border-hex)",
                        }}
                    >
                        ALL CAPSULES
                    </button>
                    {(Object.keys(categoryLabels) as Array<Certification["category"]>).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border"
                            style={{
                                backgroundColor: filter === cat ? categoryColors[cat] : "var(--surface-hex)",
                                color: filter === cat ? "#000000" : "var(--text-secondary)",
                                borderColor: filter === cat ? categoryColors[cat] : "var(--border-hex)",
                            }}
                        >
                            {categoryLabels[cat].toUpperCase()}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Area */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[var(--primary-hex)] animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">
                            Primary Specializations
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {featuredCerts.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="glass-card group p-6 border-l-[6px] relative overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
                                    style={{
                                        borderColor: categoryColors[cert.category],
                                        backgroundColor: "var(--surface-hex)",
                                        boxShadow: "var(--block-shadow)"
                                    }}
                                    onClick={() => {
                                        if (cert.verifyUrl) {
                                            window.open(cert.verifyUrl, "_blank");
                                        } else {
                                            window.open(`/Certificates/${cert.fileName}`, "_blank");
                                        }
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="grayscale group-hover:grayscale-0 transition-all duration-300" style={{ color: categoryColors[cert.category] }}>
                                            <DynamicIcon name={cert.icon} size={32} />
                                        </div>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--background-hex)] border border-[var(--border-hex)] text-[var(--text-muted)]">
                                            ID: {cert.id.split('-').pop()?.toUpperCase()}
                                        </span>
                                    </div>
                                    <h3 className="font-black text-lg mb-1 leading-tight" style={{ color: "var(--text-primary)" }}>
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs font-bold mb-4" style={{ color: categoryColors[cert.category] }}>
                                        {cert.issuer}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {cert.skills.slice(0, 3).map(skill => (
                                            <span key={skill} className="px-2 py-0.5 rounded bg-[var(--background-hex)] text-[9px] font-bold text-[var(--text-secondary)] border border-[var(--border-hex)]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={12} className="text-[var(--text-muted)]" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </FeaturedSection>

            {/* Expandable Archive */}
            <div className="flex flex-col items-center w-full">
                <ExpandableGrid isExpanded={isExpanded}>
                    {isExpanded && otherCerts.length > 0 && (
                        <div className="w-full mt-4">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="h-px flex-1 bg-[var(--border-hex)]" />
                                <span className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">
                                    Archive of Accomplishments ({otherCerts.length})
                                </span>
                                <span className="h-px flex-1 bg-[var(--border-hex)]" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                                {otherCerts.map((cert) => (
                                    <motion.div
                                        key={cert.id}
                                        layout
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border-hex)] bg-[var(--surface-hex)]/40 hover:bg-[var(--surface-hex)] transition-colors group cursor-pointer"
                                        whileHover={{ x: 4 }}
                                        onClick={() => {
                                            if (cert.verifyUrl) {
                                                window.open(cert.verifyUrl, "_blank");
                                            } else {
                                                window.open(`/Certificates/${cert.fileName}`, "_blank");
                                            }
                                        }}
                                    >
                                        <div className="shrink-0 p-2 rounded-lg bg-[var(--background-hex)] border border-[var(--border-hex)] group-hover:scale-110 transition-transform" style={{ color: categoryColors[cert.category] }}>
                                            <DynamicIcon name={cert.icon} size={20} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-bold text-xs truncate" style={{ color: "var(--text-primary)" }}>
                                                {cert.title}
                                            </h4>
                                            <p className="text-[10px] font-medium opacity-60" style={{ color: "var(--text-secondary)" }}>
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <div
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ backgroundColor: categoryColors[cert.category] }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </ExpandableGrid>

                {otherCerts.length > 0 && (
                    <motion.div variants={itemVariants} className="mt-4">
                        <ShowMoreButton
                            onClick={() => setIsExpanded(!isExpanded)}
                            isExpanded={isExpanded}
                            labelShow="View All Certifications"
                            labelHide="Hide Archive"
                        />
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}
