'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { level1Curriculum } from '../../data/curriculum';

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        },
    });

    if (status === 'loading') {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen pt-32 px-8 bg-[url('/grid.svg')] bg-fixed bg-center">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h1 className="text-5xl font-bold mb-2">
                            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500">{session?.user?.name}</span>
                        </h1>
                        <p className="text-gray-400 text-lg">Ready to continue your journey into AI mastery?</p>
                    </div>
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

                        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-4 overflow-hidden">
                            <div className="bg-cyan-500 h-full w-[15%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                        </div>

                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                            Master the core principles of prompt engineering, from zero-shot to chain-of-thought reasoniong.
                        </p>

                        <a href="/courses/level-1" className="flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-400 font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                            <span>Continue Learning</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Coming Soon Card */}
                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden opacity-50 grayscale border border-white/5">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-4xl">🔒</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 rounded-md bg-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                Intermediate
                            </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-500">Level 2: Agentic Workflows</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Building autonomous agents and RAG pipelines.
                        </p>
                        <button disabled className="w-full py-3 px-4 bg-white/5 text-gray-500 font-bold rounded-xl cursor-not-allowed text-sm">
                            Locked
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
