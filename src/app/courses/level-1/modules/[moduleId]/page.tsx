'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types
interface Question {
    id: number;
    text: string;
    options: string[];
    correct: number; // Index of correct answer
}

interface Module {
    id: string;
    title: string;
    type: string;
    duration: string;
    videoUrl?: string;
    quiz?: Question[]; // Array of questions
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

// Mock Data - Updated with UNIQUE videos and MULTIPLE questions
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
                    videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g", // Intro to LLMs
                    quiz: [
                        { id: 1, text: "What generates the output in an LLM?", options: ["A database lookup", "Probabilistic token prediction", "A Google search", "Fixed rules"], correct: 1 },
                        { id: 2, text: "What is a 'context window'?", options: ["The screen size", "The amount of text the model can process at once", "The training timeframe", "A pop-up ad"], correct: 1 },
                        { id: 3, text: "Are LLMs deterministic by default?", options: ["Yes, always", "No, they are probabilistic", "Only on Tuesdays", "Yes, if temperature is 1"], correct: 1 },
                        { id: 4, text: "What is 'Hallucination'?", options: ["A visual effect", "Confident but incorrect generation", "A virus", "A new feature"], correct: 1 },
                        { id: 5, text: "Which architecture powers most modern LLMs?", options: ["RNN", "LSTM", "Transformer", "CNN"], correct: 2 }
                    ]
                },
                {
                    id: "1.2",
                    title: "1.2 First Contact",
                    type: "video",
                    duration: "15m",
                    videoUrl: "https://www.youtube.com/embed/_ZvnD7N7p2w", // Prompt Engineering Basics
                    quiz: [
                        { id: 1, text: "What is a 'Prompt'?", options: ["A command line", "The input given to the AI", "A quick reply", "A notification"], correct: 1 },
                        { id: 2, text: "Which is better?", options: ["Write a story", "Write a 500-word sci-fi story about Mars", "Story time", "Tell me something"], correct: 1 },
                        { id: 3, text: "What is Zero-Shot prompting?", options: ["Prompting without examples", "Prompting with 0 words", "Failed prompting", "Prompting with a gun"], correct: 0 },
                        { id: 4, text: "What is Few-Shot prompting?", options: ["Giving a few examples", "Drinking a few shots", "Asking a few times", "Using short words"], correct: 0 },
                        { id: 5, text: "Why is iteration important?", options: ["It isn't", "To refine the output towards the goal", "To waste time", "To confuse the AI"], correct: 1 }
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
                    videoUrl: "https://www.youtube.com/embed/jKrj0j9H19u", // Anatomy/DeepLearningAI style
                    quiz: [
                        { id: 1, text: "What is the 'Persona' element?", options: ["Does not exist", "Assigning a role to the AI", "Your user profile", "The AI's name"], correct: 1 },
                        { id: 2, text: "Why provide 'Constraints'?", options: ["To limit creativity", "To focus the output and avoid errors", "To make it faster", "To save money"], correct: 1 },
                        { id: 3, text: "What is 'Output Format'?", options: ["File size", "The structure of the response (e.g., JSON, List)", "The font", "The color"], correct: 1 },
                        { id: 4, text: "What is 'Context'?", options: ["Background information", "The text around the cursor", "The history", "All of the above"], correct: 3 },
                        { id: 5, text: "Which component is optional?", options: ["Instruction", "Persona", "They are all mandatory", "None"], correct: 1 }
                    ]
                },
                {
                    id: "2.2",
                    title: "2.2 Essential Patterns",
                    type: "video",
                    duration: "20m",
                    videoUrl: "https://www.youtube.com/embed/b-Qe_Tdw4oY", // Patterns
                    quiz: [
                        { id: 1, text: "What does the 'Persona Pattern' do?", options: ["Sets the AI's perspective", "Changes the font", "Deletes the chat", "Encrypts the prompt"], correct: 0 },
                        { id: 2, text: "What is the 'Recipe Pattern'?", options: ["For cooking only", "Knowing steps and goal to generate procedure", "Random generation", "Binary code"], correct: 1 },
                        { id: 3, text: "What is 'Chain of Thought'?", options: ["A necklace", "Asking AI to explain its reasoning step-by-step", "A connection error", "A blockchain term"], correct: 1 },
                        { id: 4, text: "When to use 'Ask me questions' pattern?", options: ["When you know everything", "When you want the AI to clarify requirements", "Never", "For fun"], correct: 1 },
                        { id: 5, text: "Do patterns guarantee results?", options: ["Yes, 100%", "No, but they improve consistency", "No idea", "They make it worse"], correct: 1 }
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
        // We need to calculate pass based on the score AFTER the last update. 
        // Since setScore is async, we can't trust 'score' immediately here if we just updated it.
        // However, for simplicity in this flow, passing logic:
        // Actually, let's defer the check to the render or use an effect, 
        // BUT simplest is: calculate final score in handleAnswer or check in render.
        // We'll trust the state update sequence for granular steps or check in the UI.
        setQuizFinished(true);
    };

    // Calculate pass status on render when finished
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

                        {/* Lesson Text (Always visible unless taking quiz maybe? Let's keep it visible for reference) */}
                        {!showQuiz && !quizFinished && (
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4">Lesson Overview</h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    In this module, we explore the core concepts required for effective interaction with Large Language Models.
                                </p>
                                {/* ... generic lesson content serves as placeholder ... */}
                            </div>
                        )}
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

                            <h2 className="text-3xl font-bold text-white mb-2">Detailed Certification</h2>
                            <p className="text-gray-400 mb-8">Official Record of Competence</p>

                            <div className="border-4 border-double border-white/10 p-8 bg-white/5 rounded-lg mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 text-[10px] text-gray-600 font-mono">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                                <h3 className="text-2xl font-serif text-cyan-400 mb-4">Certificate of Mastery</h3>
                                <p className="text-sm text-gray-300 mb-2">This acknowledges that</p>
                                <p className="text-xl font-bold text-white mb-4 border-b border-white/20 inline-block px-8 pb-1">Learner</p>
                                <p className="text-sm text-gray-300">has achieved a score of <span className="text-cyan-400 font-bold">{percentage}%</span> in</p>
                                <p className="text-lg font-bold text-cyan-300 mt-1">{activeModule.title}</p>
                                <p className="text-xs text-gray-500 mt-4">{new Date().toLocaleDateString()}</p>
                            </div>

                            <button
                                onClick={() => { setShowCertificate(false); router.push('/dashboard'); }}
                                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
                            >
                                Return to Dashboard
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
