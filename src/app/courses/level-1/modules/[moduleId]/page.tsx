'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Data (In a real app, this would come from a DB or API)
const courseData = {
    title: "AI Communication Fundamentals",
    weeks: [
        {
            id: 1,
            title: "Week 1: The AI Mindset",
            modules: [
                { id: "1.1", title: "1.1 LLM Perspective", type: "video", duration: "10m" },
                { id: "1.2", title: "1.2 First Contact", type: "video", duration: "15m" }
            ]
        },
        {
            id: 2,
            title: "Week 2: Core Principles",
            modules: [
                { id: "2.1", title: "2.1 Anatomy of a Prompt", type: "video", duration: "12m" },
                { id: "2.2", title: "2.2 Essential Patterns", type: "video", duration: "20m" }
            ]
        }
    ]
};

export default function ModulePlayer({ params }: { params: Promise<{ moduleId: string }> }) {
    // Safe handling for build in Next.js 15: params is a Promise
    const resolvedParams = React.use(params);
    const activeModuleId = resolvedParams.moduleId || "1.1";

    // Find current module info
    const activeModule = courseData.weeks
        .flatMap(w => w.modules)
        .find(m => m.id === activeModuleId) || courseData.weeks[0].modules[0];

    return (
        <div className="flex h-screen bg-[#0a0e27] text-white overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-80 bg-[#0f1535] border-r border-white/5 flex flex-col hidden md:flex">
                <div className="p-6 border-b border-white/5">
                    <Link href="/courses/level-1" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 mb-4">
                        ← Back to Overview
                    </Link>
                    <h2 className="font-bold text-lg text-cyan-400">{courseData.title}</h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {courseData.weeks.map(week => (
                        <div key={week.id}>
                            <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">
                                {week.title}
                            </h3>
                            <div className="space-y-1">
                                {week.modules.map(module => (
                                    <Link
                                        key={module.id}
                                        href={`/courses/level-1/modules/${module.id}`}
                                        className={`flex items-center justify-between p-3 rounded-lg text-sm transition-all ${activeModuleId === module.id
                                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                            }`}
                                    >
                                        <span>{module.title}</span>
                                        <span className="text-xs opacity-50">{module.duration}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Bar (Mobile Nav would go here) */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0e27]/95 backdrop-blur">
                    <h1 className="text-xl font-bold">{activeModule.title}</h1>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
                            Ask AI Assistant
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-sm font-bold transition-colors shadow-lg shadow-cyan-500/20">
                            Complete & Continue
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Video Player Placeholder */}
                        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-8 relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                                <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-cyan-400 border-b-[12px] border-b-transparent ml-2" />
                                </div>
                            </div>
                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                                <div className="w-1/3 h-full bg-cyan-500" />
                            </div>
                        </div>

                        {/* Lesson Content */}
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-white mb-4">Lesson Overview</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                In this module, we explore the fundamental architecture of Large Language Models (LLMs) and how they process information. Understanding this "perspective" is crucial for crafting effective prompts.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-3">Key Takeaways</h3>
                            <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-8">
                                <li>LLMs are probabilistic, not deterministic.</li>
                                <li>Context window limitations and how to manage them.</li>
                                <li>The difference between training data and active context.</li>
                            </ul>

                            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-8">
                                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                    <span>💡</span> Pro Tip
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Always treat the LLM as a sophisticated pattern matcher, not a human brain. It predicts the next token based on the sequence you provide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
