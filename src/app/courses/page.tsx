'use client';

import React from 'react';
import Link from 'next/link';

export default function CoursesIndex() {
    return (
        <div className="min-h-screen bg-[#0a0e27] text-white pt-32 px-8 pb-32 bg-[url('/grid.svg')] bg-fixed bg-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Course Catalog
                </h1>
                <p className="text-xl text-gray-400 mb-12">
                    Comprehensive training paths for mastering Generative AI.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Level 1 Card */}
                    <Link href="/courses/level-1" className="group relative block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-blue-900/20 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-colors relative flex items-center justify-center">
                            <span className="text-6xl">🚀</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-500/20">Level 1</span>
                                <span className="text-gray-400 text-xs">4 Weeks</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">AI Communication Fundamentals</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                Master the core principles of prompt engineering. Learn the core principles, patterns, and strategies to effectively communicate with Large Language Models.
                            </p>
                            <div className="flex items-center text-cyan-400 text-sm font-bold">
                                View Curriculum <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Level 2 Card (Unlocked) */}
                    <Link href="/courses/level-2" className="group relative block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-colors relative flex items-center justify-center">
                            <span className="text-6xl">🤖</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full border border-purple-500/20">Level 2</span>
                                <span className="text-gray-400 text-xs">Advanced</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Agentic Workflows</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                Go beyond simple prompting. Learn to build autonomous agents, RAG pipelines, and orchestrate complex multi-step AI workflows.
                            </p>
                            <div className="flex items-center text-purple-400 text-sm font-bold">
                                View Curriculum <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Sandbox Card */}
                    <Link href="/sandbox" className="group relative block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-pink-900/20 to-rose-900/20 group-hover:from-pink-500/10 group-hover:to-rose-500/10 transition-colors relative flex items-center justify-center">
                            <span className="text-6xl">🧪</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-wider rounded-full border border-pink-500/20">Tool</span>
                                <span className="text-gray-400 text-xs">Interactive</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">AI Prompt Sandbox</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                Test your prompting skills in real-time. Our heuristic engine analyzes your inputs and provides instant feedback on structure and clarity.
                            </p>
                            <div className="flex items-center text-pink-400 text-sm font-bold">
                                Open Tool <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
