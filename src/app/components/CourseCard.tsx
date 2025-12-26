'use client';

import { motion } from 'framer-motion';

interface CourseCardProps {
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    image: string;
}

export function CourseCard({ title, description, level, image }: CourseCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-6 rounded-xl overflow-hidden group cursor-pointer relative"
        >
            {/* Animated gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/10 to-cyber-blue/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10">
                <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                    {/* Using a placeholder div if image fails to load, but ideally this is an img */}
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded-full">
                    {level}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
                <motion.div
                    className="mt-4 text-cyber-blue font-semibold flex items-center gap-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                >
                    Learn more →
                </motion.div>
            </div>
        </motion.div>
    );
}
