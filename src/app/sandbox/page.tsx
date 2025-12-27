'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProgress } from '../../hooks/useProgress';

export default function SandboxPage() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { progress, saveSandboxResult } = useProgress();

    const analyzePrompt = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/sandbox', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });
            const data = await res.json();
            setResult(data);

            // Save to history
            saveSandboxResult({
                promptSnippet: prompt.length > 50 ? prompt.substring(0, 50) + "..." : prompt,
                score: data.strengthScore,
                feedback: data.feedback
            });

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0e27] text-white pt-32 px-8 pb-32">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link href="/dashboard" className="text-gray-400 hover:text-white mb-2 inline-block">← Back to Dashboard</Link>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            AI Prompt Sandbox
                        </h1>
                        <p className="text-gray-400 mt-2">Test your prompts against our heuristic scoring engine.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-fit">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Type your prompt here... e.g., 'Act as a fitness coach and create a 3-day workout plan using a table format.'"
                            className="w-full h-64 bg-black/30 border border-white/10 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-colors resize-none mb-4"
                        />
                        <button
                            onClick={analyzePrompt}
                            disabled={loading || !prompt}
                            className={`w-full py-3 rounded-xl font-bold transition-all ${loading || !prompt
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/30'
                                }`}
                        >
                            {loading ? 'Analyzing...' : 'Analyze Prompt'}
                        </button>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-8">
                        {result && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold">Analysis Result</h3>
                                    <div className={`text-4xl font-black ${result.strengthScore >= 80 ? 'text-green-400' :
                                        result.strengthScore >= 50 ? 'text-yellow-400' : 'text-red-400'
                                        }`}>
                                        {result.strengthScore}/100
                                    </div>
                                </div>

                                <div className="w-full bg-gray-700 h-3 rounded-full mb-8 overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ease-out ${result.strengthScore >= 80 ? 'bg-green-500' :
                                            result.strengthScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                        style={{ width: `${result.strengthScore}%` }}
                                    ></div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-300 mb-4">Feedback & Tips:</h4>
                                    {result.feedback.length > 0 ? (
                                        <ul className="space-y-3">
                                            {result.feedback.map((tip: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded-lg">
                                                    <span className="text-yellow-500 mt-0.5">⚠️</span>
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg flex items-center gap-3 text-green-400">
                                            <span>✅</span>
                                            <span>Great job! Your prompt has strong structure and clarity.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {!result && (
                            <div className="h-48 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-white/5 rounded-2xl">
                                <div className="text-4xl mb-4">🧪</div>
                                <p>Prompt analysis will appear here</p>
                            </div>
                        )}

                        {/* Recent History */}
                        {progress.sandboxHistory && progress.sandboxHistory.length > 0 && (
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-lg font-bold text-gray-400 mb-4">Recent Analyses</h3>
                                <div className="space-y-3">
                                    {progress.sandboxHistory.map((item) => (
                                        <div key={item.id} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                                            <div>
                                                <div className="text-sm text-gray-300 mb-1 font-mono">"{item.promptSnippet}"</div>
                                                <div className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
                                            </div>
                                            <div className={`text-xl font-bold ${item.score >= 80 ? 'text-green-400' : item.score >= 50 ? 'text-yellow-400' : 'text-red-400'
                                                }`}>
                                                {item.score}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
