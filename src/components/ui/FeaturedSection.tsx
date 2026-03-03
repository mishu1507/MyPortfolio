"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeaturedSectionProps {
    title: string;
    subtitle?: string;
    icon: ReactNode;
    children: ReactNode;
    color?: string;
}

export default function FeaturedSection({
    title,
    subtitle,
    icon,
    children,
    color = "var(--primary-hex)"
}: FeaturedSectionProps) {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
                <div
                    className="p-3 rounded-2xl border bg-[var(--surface-hex)] shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
                    style={{ color, borderColor: "var(--border-hex)" }}
                >
                    {icon}
                </div>
                <div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-sm font-medium mt-1" style={{ color: "var(--text-secondary)" }}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}
