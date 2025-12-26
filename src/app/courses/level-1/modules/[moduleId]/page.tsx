'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types
interface Question {
    id: number;
    text: string;
    options: string[];
    correct: number;
}

interface Module {
    id: string;
    title: string;
    type: string;
    duration: string;
    videoUrl?: string; // Unique URL
    quiz?: Question[];
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

// Mock Data - Truly Unique Content & Quizzes
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
                    videoUrl: "https://www.youtube.com/embed/5sLYAQS9sWQ", // IBM: How Large Language Models Work
                    quiz: [
                        { id: 1, text: "What represents the 'knowledge' in an LLM?", options: ["The internet connection", "The parameters (weights) learned during training", "A SQL database", "The user's input"], correct: 1 },
                        { id: 2, text: "LLMs are fundamentally prediction engines for what?", options: ["Stock prices", "Next tokens (words)", "Weather", "Truth"], correct: 1 },
                        { id: 3, text: "Do LLMs 'understand' text like humans?", options: ["Yes, exactly like humans", "No, they process statistical patterns", "Yes, they have consciousness", "Only if paid"], correct: 1 },
                        { id: 4, text: "What is 'Pre-training'?", options: ["Learning from massive datasets", "Learning from user feedback", "The time before training", "Installing Python"], correct: 0 },
                        { id: 5, text: "Can LLMs hallucinate?", options: ["No, never", "Yes, they can generate confident falsehoods", "Only on outdated hardware", "Only in zero-shot mode"], correct: 1 }
                    ]
                },
                {
                    id: "1.2",
                    title: "1.2 First Contact",
                    type: "video",
                    duration: "15m",
                    videoUrl: "https://www.youtube.com/embed/_ZvnD7N7p2w", // Prompt Engineering Tutorial (Basics)
                    quiz: [
                        { id: 1, text: "What is the primary role of a Prompt Engineer?", options: ["To fix computers", "To craft inputs that guide AI effectively", "To write Python code", "To manage servers"], correct: 1 },
                        { id: 2, text: "Which approach usually yields better results?", options: ["Vague questions", "Specific, structured instructions", "One word prompts", "Asking politely only"], correct: 1 },
                        { id: 3, text: "What is 'Iterative Prompting'?", options: ["Asking once and giving up", "Refining the prompt based on output until success", "Repeating the same prompt", "Auto-looping"], correct: 1 },
                        { id: 4, text: "Why is English often called the 'new programming language'?", options: ["It isn't", "Because we prompt models in natural language", "Because Python is dead", "Because compilers speak English"], correct: 1 },
                        { id: 5, text: "Is the first output always the best?", options: ["Yes, AI is perfect", "No, refinement is often needed", "Only for GPT-4", "Depends on the weather"], correct: 1 }
                    ]
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
                    videoUrl: "https://www.youtube.com/embed/jKrj0j9H19u", // Focus on Prompt Components
                    quiz: [
                        { id: 1, text: "Which element sets the AI's behavior?", options: ["Context", "Persona / Role", "Task", "Output Format"], correct: 1 },
                        { id: 2, text: "Why include 'Output Format' in a prompt?", options: ["To confuse the AI", "To ensure the response structure matches your needs (e.g., Table, List)", "To save tokens", "To make it look cool"], correct: 1 },
                        { id: 3, text: "What does 'Context' provide?", options: ["The goal", "Background information to constrain the solution space", "The output", "The format"], correct: 1 },
                        { id: 4, text: "If you want a 50-word summary, which component is that?", options: ["Constraint", "Persona", "Context", "Input Data"], correct: 0 },
                        { id: 5, text: "Are all components required for every prompt?", options: ["Yes, strict rule", "No, but they help complexity", "No, only specific ones exist", "Only context matters"], correct: 1 }
                    ]
                },
                {
                    id: "2.2",
                    title: "2.2 Essential Patterns",
                    type: "video",
                    duration: "20m",
                    videoUrl: "https://www.youtube.com/embed/b-Qe_Tdw4oY", // Advanced Patterns
                    quiz: [
                        { id: 1, text: "The 'Persona Pattern' uses which key instruction?", options: ["Act as...", "Write a...", "Translate to...", "Summarize..."], correct: 0 },
                        { id: 2, text: "The 'Recipe Pattern' is best for?", options: ["Food", "Generative step-by-step procedures", "Writing poems", "Coding"], correct: 1 },
                        { id: 3, text: "What does 'Chain of Thought' encourage?", options: ["Speed", "Reasoning transparency", "Short answers", "Randomness"], correct: 1 },
                        { id: 4, text: "In the 'Flipped Interaction' pattern, who asks the questions?", options: ["The User", "The AI", "The Developer", "Nobody"], correct: 1 },
                        { id: 5, text: "Why use patterns?", options: ["To memorize names", "To standardize effective strategies for recurring problems", "They are mandatory", "To avoid typing"], correct: 1 }
                    ]
                }
            ]
        }
    ]
};

export default function ModulePlayer({ params }: { params: Promise<{ moduleId: string }> }) {
    const router = useRouter();
    const resolvedParams = React.use(params);
    const activeModuleId = resolvedParams.moduleId || "1.1";

    // Derived State
    const activeModule = courseData.weeks
        .flatMap(w => w.modules)
        .find(m => m.id === activeModuleId) || courseData.weeks[0].modules[0];

    // Quiz State
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);
    const [passed, setPassed] = useState(false);

    // Handlers
    const startQuiz = () => {
        setShowQuiz(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizFinished(false);
        setPassed(false);
    };

    const handleAnswer = (optionIndex: number) => {
        if (activeModule.quiz && optionIndex === activeModule.quiz[currentQuestionIndex].correct) {
            setScore(prev => prev + 1);
        }

        if (activeModule.quiz && currentQuestionIndex < activeModule.quiz.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setQuizFinished(true);
    };

    const finalScore = score;
    const totalQuestions = activeModule.quiz?.length || 0;
    const percentage = totalQuestions > 0 ? (finalScore / totalQuestions) * 100 : 0;
    const isPassed = percentage >= 80;

    const handleRetake = () => {
        startQuiz();
    };

    const handleContinue = () => {
        if (!isPassed) {
            alert("You need 80% to proceed!");
            return;
        }
        setShowQuiz(false);
        setShowCertificate(true);
        setPassed(true);
    };

    return (
        <div className="flex h-screen bg-[#0a0e27] text-white overflow-hidden font-sans">
            {/* Sidebar */}
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
                                        onClick={() => { setShowQuiz(false); setQuizFinished(false); }}
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
                        {activeModule.quiz && !passed && !showQuiz && !isPassed && (
                            <button onClick={startQuiz} className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium hover:bg-orange-500/20 transition-colors">
                                Take Quiz
                            </button>
                        )}
                        {isPassed && (
                            <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20">
                                <span>✓ Passed ({percentage}%)</span>
                            </div>
                        )}
                        <button
                            onClick={() => isPassed ? setShowCertificate(true) : alert("Please pass the quiz with 80% to complete.")}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg ${isPassed
                                    ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/20'
                                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Complete & Continue
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto">

                        {/* Video Player */}
                        {!showQuiz && !quizFinished && (
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
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                                        <p>Video loading...</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Quiz Interface */}
                        {showQuiz && !quizFinished && activeModule.quiz && (
                            <div className="max-w-2xl mx-auto my-12 p-8 bg-gradient-to-br from-[#131b4d] to-[#0a0e27] border border-white/10 rounded-2xl shadow-2xl">
                                <div className="flex justify-between items-center mb-8 text-sm text-gray-400">
                                    <span>Question {currentQuestionIndex + 1} of {activeModule.quiz.length}</span>
                                    <span>Target: 80%</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                                    {activeModule.quiz[currentQuestionIndex].text}
                                </h3>

                                <div className="space-y-3">
                                    {activeModule.quiz[currentQuestionIndex].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(idx)}
                                            className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-cyan-500/20 text-sm font-bold text-gray-400 group-hover:text-cyan-400">
                                                    {String.fromCharCode(65 + idx)}
                                                </span>
                                                <span className="text-gray-300 group-hover:text-white">{opt}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quiz Results */}
                        {quizFinished && (
                            <div className="max-w-md mx-auto my-12 text-center p-8 bg-[#131b4d] rounded-2xl border border-white/10 animate-in zoom-in-95">
                                <div className="text-6xl mb-4">{isPassed ? '🎉' : '❌'}</div>
                                <h2 className="text-2xl font-bold text-white mb-2">{isPassed ? 'Assessment Passed!' : 'Assessment Failed'}</h2>
                                <p className="text-4xl font-black text-cyan-400 mb-6">{percentage}%</p>
                                <p className="text-gray-400 mb-8">
                                    {isPassed ? "You have demonstrated mastery of this module." : "You need 80% to proceed. Please review the material and try again."}
                                </p>

                                <div className="flex gap-4 justify-center">
                                    {!isPassed && (
                                        <button onClick={handleRetake} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
                                            Retake Quiz
                                        </button>
                                    )}
                                    {isPassed && (
                                        <button onClick={handleContinue} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold shadow-lg shadow-cyan-500/20 transition-all">
                                            Claim Certificate
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Lesson Text */}
                        {!showQuiz && !quizFinished && (
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4">Lesson Overview</h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    In this module, we explore the core concepts required for effective interaction with Large Language Models.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Certificate Modal - Modern & Branded */}
                {showCertificate && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-500">
                        <div className="bg-gradient-to-br from-[#0f1535] to-[#0a0e27] border border-cyan-500/50 p-10 rounded-xl max-w-3xl w-full text-center relative shadow-[0_0_80px_rgba(6,182,212,0.15)] flex flex-col items-center">
                            <button onClick={() => setShowCertificate(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">✕</button>

                            {/* Certificate Content */}
                            <div className="border-[1px] border-white/10 p-2 w-full">
                                <div className="border-[1px] border-white/10 p-12 bg-white/[0.02] relative overflow-hidden">
                                    {/* Background watermark */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                                    {/* Header Logo */}
                                    <div className="flex flex-col items-center gap-4 mb-8">
                                        <div className="h-16 w-16 relative">
                                            <img src="/logo.png" alt="Apollo Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                        </div>
                                        <h2 className="text-xl uppercase tracking-[0.3em] text-cyan-500 font-light">Apollo Technologies US</h2>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">Certificate of Completion</h1>

                                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">This certifies that</p>

                                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400 mb-8 font-script border-b border-white/10 pb-4 inline-block px-12 min-w-[300px]">
                                        Student Name
                                    </div>

                                    <p className="text-gray-300 mb-2 font-light">Has successfully demonstrated proficiency in the module</p>
                                    <p className="text-xl font-medium text-white mb-12">{activeModule.title}</p>

                                    <div className="flex justify-between items-end w-full px-8 mt-12">
                                        <div className="text-left">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Date</p>
                                            <p className="text-sm text-gray-300 font-mono">{new Date().toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="mb-2">
                                                <span className="font-handwriting text-2xl text-cyan-400 block -rotate-3 transform origin-bottom-right" style={{ fontFamily: 'cursive' }}>Robin Pandey</span>
                                            </div>
                                            <div className="h-px w-40 bg-white/20 mb-2"></div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Robin Pandey, CEO</p>
                                            <p className="text-xs text-cyan-500/50 uppercase tracking-widest">Apollo Technologies US</p>
                                        </div>
                                    </div>

                                    {/* ID Badge */}
                                    <div className="absolute top-6 right-6 opacity-30">
                                        <p className="text-[9px] font-mono border border-white/20 px-2 py-0.5 rounded">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button
                                    onClick={() => window.print()}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors border border-white/10"
                                >
                                    Print / Save PDF
                                </button>
                                <button
                                    onClick={() => { setShowCertificate(false); router.push('/dashboard'); }}
                                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
