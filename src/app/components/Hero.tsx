'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-purple-900 to-deep-space">
                <div className="absolute inset-0 opacity-30">
                    {/* Animated particles/stars could go here */}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl font-bold mb-6"
                >
                    Master <span className="text-cyber-blue">Prompt Engineering</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-300 mb-8"
                >
                    Transform your AI workflows with expert-level prompting techniques
                </motion.p>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href="/login" className="inline-block px-8 py-4 bg-cyber-blue text-deep-space rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                        Start Learning
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
