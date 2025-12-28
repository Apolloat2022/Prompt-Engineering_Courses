import { GlassCard } from "../components/landing/GlassCard";
import { InteractiveBackground } from "../components/landing/InteractiveBackground";

export default function BlogPage() {
    const posts = [
        {
            title: "The Rise of Agentic AI",
            excerpt: "How autonomous agents are reshaping the software development lifecycle.",
            date: "Dec 28, 2024",
            author: "Apollo Team",
            category: "Trends"
        },
        {
            title: "Mastering Few-Shot Prompting",
            excerpt: "A deep dive into providing examples to guide LLM outputs effectively.",
            date: "Dec 25, 2024",
            author: "Sarah Jenks",
            category: "Tutorial"
        },
        {
            title: "Why Context Window Matters",
            excerpt: "Understanding token limits and how to optimize your prompts for long-context models.",
            date: "Dec 20, 2024",
            author: "Mike Chen",
            category: "Technical"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <InteractiveBackground />

            <div className="relative z-10 pt-20 pb-32 px-8 max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Insights & <br />
                        <span className="text-cyan-400">Perspectives</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Deep dives into prompt engineering, AI architecture, and the future of work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Featured PDF Resource */}
                    <GlassCard className="h-full border-cyan-500/50 shadow-cyan-500/10">
                        <div className="p-8 h-full flex flex-col items-start bg-cyan-950/20">
                            <div className="mb-6 w-full h-48 rounded-lg bg-gradient-to-br from-red-900/30 to-rose-900/30 border border-white/5 flex items-center justify-center text-5xl">
                                📄
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold w-full">
                                <span className="text-cyan-400">Featured Resource</span>
                                <div className="flex-grow h-px bg-white/10"></div>
                                <span>PDF</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                                Prompt Engineering Guide
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Download our comprehensive guide to mastering prompt engineering. Contains cheat sheets and advanced strategies.
                            </p>

                            <a
                                href="/Blog.pdf"
                                target="_blank"
                                className="mt-auto w-full py-3 bg-white text-black font-bold rounded-lg text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download PDF
                            </a>
                        </div>
                    </GlassCard>

                    {posts.map((post, i) => (
                        <GlassCard key={i} delay={i * 0.1} className="h-full">
                            <div className="p-8 h-full flex flex-col items-start">
                                <div className="mb-6 w-full h-48 rounded-lg bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-white/5 flex items-center justify-center text-5xl">
                                    {i === 0 ? '🤖' : i === 1 ? '🎓' : '📏'}
                                </div>

                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold w-full">
                                    <span className="text-cyan-400">{post.category}</span>
                                    <div className="flex-grow h-px bg-white/10"></div>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {post.excerpt}
                                </p>

                                <button className="mt-auto text-sm font-bold text-white flex items-center gap-2 group hover:text-cyan-400 transition-colors">
                                    Read Article
                                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
