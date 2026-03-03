"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ExpandableGridProps {
    children: ReactNode;
    isExpanded: boolean;
    initialHeight?: number;
}

export default function ExpandableGrid({ children, isExpanded }: ExpandableGridProps) {
    return (
        <motion.div
            layout
            initial={false}
            animate={{ height: "auto" }}
            className="relative overflow-hidden"
        >
            <AnimatePresence mode="popLayout" initial={false}>
                {children}
            </AnimatePresence>
        </motion.div>
    );
}
