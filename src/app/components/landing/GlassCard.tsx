"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20 group ${className}`}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
