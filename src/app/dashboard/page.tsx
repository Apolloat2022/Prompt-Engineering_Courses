'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { level1Curriculum, level2Curriculum } from '../../data/curriculum';
import { useProgress } from '../../hooks/useProgress';

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        },
    });

    const { progress, isModuleCompleted } = useProgress();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (status === 'loading' || !mounted) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    // Calculate Level 1 Progress
    const totalModulesL1 = level1Curriculum.weeks.flatMap(w => w.modules).length;
    const completedCountL1 = level1Curriculum.weeks.flatMap(w => w.modules).filter(m => isModuleCompleted(m.id)).length;
    const progressPercentL1 = Math.round((completedCountL1 / totalModulesL1) * 100);

    // Calculate Level 2 Progress
    const totalModulesL2 = level2Curriculum.weeks.flatMap(w => w.modules).length;
    const completedCountL2 = level2Curriculum.weeks.flatMap(w => w.modules).filter(m => isModuleCompleted(m.id)).length;
    const progressPercentL2 = Math.round((completedCountL2 / totalModulesL2) * 100);

    return (
        <div className="min-h-screen pt-32 px-8 bg-[url('/grid.svg')] bg-fixed bg-center">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h1 className="text-5xl font-bold mb-2">
                            Welcome back, <Link href="/profile" className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500 hover:opacity-80 transition-opacity">{session?.user?.name}</Link>
                        </h1>
                        <p className="text-gray-400 text-lg">Ready to continue your journey into AI mastery?</p>
                    </div>

                    {/* Resume Learning Quick Action */}
                    {completedCountL1 < totalModulesL1 && (
                        <Link
                            href={`/courses/level-1/modules/${level1Curriculum.weeks.flatMap(w => w.modules).find(m => !isModuleCompleted(m.id))?.id || "1.1"}`}
                            className="hidden md:flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
                        >
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Resume Learning</div>
                                <div className="text-sm font-bold text-white group-hover:text-cyan-400">
                                    {level1Curriculum.weeks.flatMap(w => w.modules).find(m => !isModuleCompleted(m.id))?.title || "1.1 LLM Perspective"}
                                </div>
                            </div>
                            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Level 1 Course Card */}
                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all border border-white/10 hover:border-cyan-500/30">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-4xl">🚀</span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">
                                {level1Curriculum.level}
                            </span>
                            <span className="text-xs text-gray-500">4 Weeks</span>
                        </div>

                        <h2 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {level1Curriculum.title}
                        </h2>

                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                            <span>{completedCountL1} / {totalModulesL1} MODULES</span>
                            <span>{progressPercentL1}%</span>
                        </div>

                        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-4 overflow-hidden">
                            <div className="bg-cyan-500 h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${progressPercentL1}%` }}></div>
                        </div>

                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                            Master the core principles of prompt engineering, from zero-shot to chain-of-thought reasoniong.
                        </p>

                        <a href="/courses/level-1" className="flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-400 font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                            <span>Continue Learning</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Level 2 Course Card (Unlocked) */}
                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all border border-purple-500/20 hover:border-purple-500/50">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-4xl">🤖</span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                                {level2Curriculum.level}
                            </span>
                            <span className="text-xs text-gray-500">Advanced</span>
                        </div>

                        <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                            {level2Curriculum.title}
                        </h2>

                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                            <span>{completedCountL2} / {totalModulesL2} MODULES</span>
                            <span>{progressPercentL2}%</span>
                        </div>

                        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-4 overflow-hidden">
                            <div className="bg-purple-500 h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: `${progressPercentL2}%` }}></div>
                        </div>

                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                            Build autonomous agents and RAG pipelines. Learn to orchestrate complex AI behaviors.
                        </p>

                        <a href="/courses/level-2" className="flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 text-purple-400 font-bold rounded-xl hover:from-purple-500 hover:to-pink-600 hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-purple-500/20">
                            <span>Start Level 2</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* AI Sandbox Card */}
                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all border border-pink-500/20 hover:border-pink-500/50">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-4xl">🧪</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 rounded-md bg-pink-500/10 text-pink-400 text-[10px] font-bold uppercase tracking-wider border border-pink-500/20">
                                Tool
                            </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">AI Prompt Sandbox</h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Test and score your prompts against our heuristic engine. Get real-time feedback.
                        </p>
                        <a href="/sandbox" className="flex items-center justify-between w-full py-3 px-4 bg-white/5 text-pink-400 font-bold rounded-xl hover:bg-pink-600 hover:text-white transition-all">
                            <span>Open Sandbox</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>

                {/* Student Resources Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                        Student Resources
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Resource Card 1: Slides */}
                        <div className="glass-card p-6 flex items-center gap-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
                            <div className="w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center text-3xl border border-red-500/20 group-hover:scale-110 transition-transform">
                                📑
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">Course Slides</h3>
                                <p className="text-sm text-gray-400 mb-2">Comprehensive deck covering all modules.</p>
                                <a
                                    href="/Prompt-engineering-slide.pdf"
                                    target="_blank"
                                    className="text-xs font-bold text-cyan-400 uppercase tracking-wider hover:underline flex items-center gap-1"
                                >
                                    Download PDF
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Resource Card 2: Roadmap */}
                        <div className="glass-card p-6 flex items-center gap-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
                            <div className="w-16 h-16 rounded-lg bg-blue-500/10 flex items-center justify-center text-3xl border border-blue-500/20 group-hover:scale-110 transition-transform">
                                🗺️
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">Novice to Pro Roadmap</h3>
                                <p className="text-sm text-gray-400 mb-2">Visual journey map for your skill progression.</p>
                                <a
                                    href="/Novice-to-pro.png"
                                    target="_blank"
                                    className="text-xs font-bold text-cyan-400 uppercase tracking-wider hover:underline flex items-center gap-1"
                                >
                                    View Image
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
