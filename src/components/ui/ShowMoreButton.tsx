"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";

interface ShowMoreButtonProps {
    onClick: () => void;
    isExpanded: boolean;
    labelShow?: string;
    labelHide?: string;
}

export default function ShowMoreButton({
    onClick,
    isExpanded,
    labelShow = "Show More",
    labelHide = "Show Less"
}: ShowMoreButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer border-2"
            style={{
                backgroundColor: isExpanded ? "transparent" : "var(--primary-hex)",
                color: isExpanded ? "var(--text-primary)" : "#000000",
                borderColor: isExpanded ? "var(--border-hex)" : "#000000",
                boxShadow: isExpanded ? "none" : "4px 4px 0px #000000",
            }}
            whileHover={{
                translate: isExpanded ? "0px" : "-2px -2px",
                boxShadow: isExpanded ? "none" : "6px 6px 0px #000000",
                backgroundColor: isExpanded ? "var(--surface-hex)" : "var(--primary-hex)"
            }}
            whileTap={{ translate: isExpanded ? "0px" : "2px 2px", boxShadow: "0px 0px 0px #000000" }}
        >
            <span>{isExpanded ? labelHide : labelShow}</span>
            <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isExpanded ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
            </motion.div>
        </motion.button>
    );
}
