import { GlassCard } from "../components/landing/GlassCard";
import { InteractiveBackground } from "../components/landing/InteractiveBackground";

export default function PodcastPage() {
    const episodes = [
        {
            number: "EP. 03",
            title: "The Ethics of Autonomous Agents",
            guest: "Dr. Elena Vance",
            duration: "45:20"
        },
        {
            number: "EP. 02",
            title: "Building LLM Operating Systems",
            guest: "Markus R.",
            duration: "52:10"
        },
        {
            number: "EP. 01",
            title: "Prompt Engineering vs. Fine Tuning",
            guest: "Apollo Team",
            duration: "38:45"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <InteractiveBackground />

            <div className="relative z-10 pt-20 pb-32 px-8 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Player Section */}
                    <div className="lg:col-span-8">
                        <GlassCard className="p-1 mb-8">
                            <div className="aspect-video bg-black rounded-xl relative overflow-hidden group shadow-2xl">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/OkLjKA8-xyA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </GlassCard>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-bold mb-4">Episode Notes</h3>
                            <p className="text-gray-400">
                                In this episode, we explore how large language models are transforming the way we write, debug, and maintain code. Are we moving towards a future where natural language is the primary programming interface?
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Playlist */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Recent Episodes
                        </h3>

                        <div className="space-y-4">
                            {episodes.map((ep, i) => (
                                <GlassCard key={i} delay={0.2 + (i * 0.1)} className="cursor-pointer group">
                                    <div className="p-4 flex items-center gap-4">
                                        <div className="w-16 h-16 rounded bg-white/5 flex flex-col items-center justify-center border border-white/10 text-gray-500 font-mono text-xs">
                                            <span className="font-bold text-white">{ep.number.split(' ')[1]}</span>
                                            <span>{ep.number.split(' ')[0]}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                                                {ep.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                w/ {ep.guest} • {ep.duration}
                                            </p>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
