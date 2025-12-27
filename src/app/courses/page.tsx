'use client';

import React from 'react';
import Link from 'next/link';

export default function CoursesIndex() {
    return (
        <div className="min-h-screen bg-[#0a0e27] text-white pt-24 px-8 pb-32">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Available Courses
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Level 1 Card */}
                    <Link href="/courses/level-1" className="group relative block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-blue-900/20 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-colors relative flex items-center justify-center">
                            <span className="text-6xl">🚀</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full">Beginner</span>
                                <span className="text-gray-400 text-xs">4 Weeks</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Level 1: AI Communication Fundamentals</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                Master the art of prompt engineering. Learn the core principles, patterns, and strategies to effectively communicate with Large Language Models.
                            </p>
                            <div className="flex items-center text-cyan-400 text-sm font-bold">
                                Start Learning <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Placeholder for Level 2 (Locked) */}
                    <div className="group relative block bg-white/5 border border-white/5 rounded-2xl overflow-hidden opacity-50 grayscale cursor-not-allowed">
                        <div className="aspect-video bg-black/40 flex items-center justify-center">
                            <span className="text-4xl opacity-50">🔒</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider rounded-full">Intermediate</span>
                                <span className="text-gray-400 text-xs">Coming Soon</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-500">Level 2: Advanced Reasoning & Agents</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Take your skills to the next level. Build autonomous agents, master RAG, and fine-tune models for specific domain expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
