'use client';

import { useState } from "react";
import { GlassCard } from "../components/landing/GlassCard";
import { InteractiveBackground } from "../components/landing/InteractiveBackground";

interface Episode {
    id: string;
    number: string;
    title: string;
    guest: string;
    duration: string;
    description: string;
}

export default function PodcastPage() {
    const episodes: Episode[] = [
        {
            id: "FemFuZZA26M",
            number: "EP. 04",
            title: "Prompt Engineering! Getting Great Answers from AI",
            guest: "Apollo Team",
            duration: "15:20",
            description: "In this session, we dive deep into the art and science of prompt engineering. Learn the specific strategies and techniques to get the most out of large language models, ensuring you get accurate, relevant, and high-quality responses every time."
        },
        {
            id: "OkLjKA8-xyA",
            number: "EP. 03",
            title: "Prompt Engineering Mastery: The Ultimate Guide to AI",
            guest: "Apollo Team",
            duration: "45:00",
            description: "Step into the world of professional prompt engineering. This comprehensive guide covers everything from basic instruction to advanced structural patterns. Learn how to master the perfect prompt template used by elite AI agencies."
        },
        {
            id: "yFMVT3bcrJo", // A Liam Ottley ID from curriculum
            number: "EP. 02",
            title: "The Architecture of LLMs",
            guest: "Liam Ottley",
            duration: "12:45",
            description: "Understanding the underlying architecture of models like GPT-4 is crucial for designing effective prompts. We explore transformer modules and neural attention."
        },
        {
            id: "5sLYAQS9sWQ", // Another Liam Ottley ID from curriculum
            number: "EP. 01",
            title: "Future of Autonomous Agents",
            guest: "Dr. Elena Vance",
            duration: "38:45",
            description: "Where is AI heading? We discuss the shift from static assistants to autonomous agents that can plan, execute, and refine their own tasks."
        }
    ];

    const [selectedEpisode, setSelectedEpisode] = useState<Episode>(episodes[0]);

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
                                    src={`https://www.youtube.com/embed/${selectedEpisode.id}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </GlassCard>

                        <div className="prose prose-invert max-w-none">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                                    {selectedEpisode.number}
                                </span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400 font-medium">with {selectedEpisode.guest}</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">
                                {selectedEpisode.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {selectedEpisode.description}
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
                            {episodes.map((ep) => (
                                <GlassCard
                                    key={ep.id}
                                    className={`cursor-pointer group transition-all duration-300 ${selectedEpisode.id === ep.id
                                            ? "border-cyan-500/50 bg-cyan-500/5"
                                            : "hover:bg-white/5 border-white/5"
                                        }`}
                                    onClick={() => setSelectedEpisode(ep)}
                                >
                                    <div className="p-4 flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded bg-white/5 flex flex-col items-center justify-center border transition-colors ${selectedEpisode.id === ep.id ? "border-cyan-500/30 text-cyan-400" : "border-white/10 text-gray-500"
                                            } font-mono text-xs`}>
                                            <span className={`font-bold ${selectedEpisode.id === ep.id ? "text-cyan-400" : "text-white"}`}>
                                                {ep.number.split(' ')[1]}
                                            </span>
                                            <span>{ep.number.split(' ')[0]}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className={`font-bold transition-colors line-clamp-1 ${selectedEpisode.id === ep.id ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                                                }`}>
                                                {ep.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                w/ {ep.guest} • {ep.duration}
                                            </p>
                                        </div>
                                        {selectedEpisode.id === ep.id && (
                                            <div className="ml-auto">
                                                <span className="flex h-3 w-3 relative">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                                </span>
                                            </div>
                                        )}
                                        {selectedEpisode.id !== ep.id && (
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        )}
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

