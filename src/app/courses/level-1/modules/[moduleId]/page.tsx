'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types
interface Quiz {
    question: string;
    options: string[];
    correct: number;
}

interface Module {
    id: string;
    title: string;
    type: string;
    duration: string;
    videoUrl?: string; // Optional but we will populate all
    quiz?: Quiz;
}

interface Week {
    id: number;
    title: string;
    modules: Module[];
}

interface CourseData {
    title: string;
    weeks: Week[];
}

// Mock Data - Updated with UNIQUE videos
const courseData: CourseData = {
    title: "AI Communication Fundamentals",
    weeks: [
        {
            id: 1,
            title: "Week 1: The AI Mindset",
            modules: [
                {
                    id: "1.1",
                    title: "1.1 LLM Perspective",
                    type: "video",
                    duration: "10m",
                    videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g", // Intro to AI/LLMs
                    quiz: {
                        question: "What is the primary function of an LLM?",
                        options: ["To think like a human", "To predict the next token", "To search the internet", "To executing python code only"],
                        correct: 1
                    }
                },
                {
                    id: "1.2",
                    title: "1.2 First Contact",
                    type: "video",
                    duration: "15m",
                    videoUrl: "https://www.youtube.com/embed/jKrj0j9H19u", // Prompt Engineering Basics
                    quiz: {
                        question: "Which of the following is NOT a component of a prompt?",
                        options: ["Context", "Instruction", "Input Data", "Compiler Settings"],
                        correct: 3
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Week 2: Core Principles",
            modules: [
                {
                    id: "2.1",
                    title: "2.1 Anatomy of a Prompt",
                    type: "video",
                    duration: "12m",
                    videoUrl: "https://www.youtube.com/embed/_ZvnD7N7p2w", // Prompt Engineering Guide
                    quiz: {
                        question: "What is the most important part of a prompt?",
                        options: ["The length", "The clarity of instruction", "The polite language", "The punctuation"],
                        correct: 1
                    }
                },
                {
                    id: "2.2",
                    title: "2.2 Essential Patterns",
                    type: "video",
                    duration: "20m",
                    videoUrl: "https://www.youtube.com/embed/b-Qe_Tdw4oY", // Advanced Prompt Patterns
                    quiz: {
                        question: "Which pattern helps the AI adopt a specific role?",
                        options: ["Persona Pattern", "Recipe Pattern", "Template Pattern", "Flipped Interaction"],
                        correct: 0
                    }
                }
            ]
        }
    ]
};

export default function ModulePlayer({ params }: { params: Promise<{ moduleId: string }> }) {
    const router = useRouter();
    const resolvedParams = React.use(params);
    const activeModuleId = resolvedParams.moduleId || "1.1";

    // State
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);

    // Find active module
    const activeModule = courseData.weeks
        .flatMap(w => w.modules)
        .find(m => m.id === activeModuleId) || courseData.weeks[0].modules[0];

    const handleQuizSubmit = (optionIndex: number) => {
        if (activeModule.quiz && optionIndex === activeModule.quiz.correct) {
            setQuizCompleted(true);
        } else {
            alert("Incorrect. Try again!");
        }
    };

    const handleComplete = () => {
        setShowCertificate(true);
    };

    return (
        <div className="flex h-screen bg-[#0a0e27] text-white overflow-hidden font-sans">
            {/* Sidebar - Same as before */}
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
                            <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">{week.title}</h3>
                            <div className="space-y-1">
                                {week.modules.map(module => (
                                    <Link
                                        key={module.id}
                                        href={`/courses/level-1/modules/${module.id}`}
                                        onClick={() => { setShowQuiz(false); setQuizCompleted(false); }}
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

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Bar */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0e27]/95 backdrop-blur z-20">
                    <h1 className="text-xl font-bold truncate">{activeModule.title}</h1>
                    <div className="flex items-center gap-4">
                        {activeModule.quiz && !quizCompleted && (
                            <button onClick={() => setShowQuiz(true)} className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium hover:bg-orange-500/20 transition-colors">
                                Take Quiz
                            </button>
                        )}
                        <button onClick={handleComplete} className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-sm font-bold transition-colors shadow-lg shadow-cyan-500/20">
                            Complete & Continue
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto">

                        {/* Video Player */}
                        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-8 relative group">
                            {activeModule.videoUrl ? (
                                <iframe
                                    src={activeModule.videoUrl}
                                    className="w-full h-full"
                                    title={activeModule.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                                    <div className="text-center text-gray-500">
                                        <span className="block text-4xl mb-2">📹</span>
                                        <p>Video content unavailable for this module.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quiz Section (Inline) */}
                        {showQuiz && activeModule.quiz && !quizCompleted && (
                            <div className="mb-8 p-6 bg-gradient-to-r from-deep-space to-gray-900 border border-white/10 rounded-xl animate-in fade-in slide-in-from-top-4">
                                <h3 className="text-lg font-bold text-white mb-4">Quick Check: {activeModule.quiz.question}</h3>
                                <div className="grid gap-3">
                                    {activeModule.quiz.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleQuizSubmit(idx)}
                                            className="text-left p-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quiz Success Message */}
                        {quizCompleted && (
                            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl flex items-center gap-3">
                                <span className="text-xl">✅</span>
                                <span className="font-bold">Quiz Passed! Great job.</span>
                            </div>
                        )}

                        {/* Lesson Text */}
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-white mb-4">Lesson Overview</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                In this module, we explore the fundamental concepts necessary to become proficient in prompt engineering.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-3">Key Takeaways</h3>
                            <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-8">
                                <li>Understanding the model's architecture.</li>
                                <li>Identifying key constraints and capabilities.</li>
                                <li>Structuring inputs for optimal outputs.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Certificate Modal */}
                {showCertificate && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
                        <div className="bg-[#0a0e27] border border-cyan-500/30 p-8 rounded-2xl max-w-2xl w-full text-center relative shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                            <button onClick={() => setShowCertificate(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>

                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/50">
                                    <span className="text-4xl">🏆</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2">Congratulations!</h2>
                            <p className="text-gray-400 mb-8">You have completed the module requirements.</p>

                            <div className="border-4 border-double border-white/10 p-8 bg-white/5 rounded-lg mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 text-[10px] text-gray-600 font-mono">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                                <h3 className="text-2xl font-serif text-cyan-400 mb-4">Certificate of Completion</h3>
                                <p className="text-sm text-gray-300 mb-2">This certifies that</p>
                                <p className="text-xl font-bold text-white mb-4 border-b border-white/20 inline-block px-8 pb-1">Student Name</p>
                                <p className="text-sm text-gray-300">has successfully mastered the fundamentals of</p>
                                <p className="text-lg font-bold text-cyan-300 mt-1">Prompt Engineering Level 1</p>
                            </div>

                            <button
                                onClick={() => { setShowCertificate(false); router.push('/dashboard'); }}
                                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
                            >
                                Claim Certificate & Return to Dashboard
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
