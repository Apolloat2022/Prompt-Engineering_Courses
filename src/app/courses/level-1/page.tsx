import React from 'react';

const weeks = [
  { id: 1, title: "Week 1: The AI Mindset", modules: ["1.1 LLM Perspective", "1.2 First Contact"] },
  { id: 2, title: "Week 2: Core Principles", modules: ["2.1 Anatomy of a Prompt", "2.2 Essential Patterns"] },
  { id: 3, title: "Week 3: IT Management", modules: ["3.1 Tech Documentation", "3.2 Problem-Solving"] },
  { id: 4, title: "Week 4: Implementation", modules: ["4.1 Critical Evaluation", "4.2 Starter Toolkit"] }
];

export default function LevelOne() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pt-24 px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6 relative z-10">
            Level 01 Curriculum
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent relative z-10">
            AI Communication Fundamentals
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
            Master the art of prompt engineering through our comprehensive 4-week intensive program.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {weeks.map((week) => (
            <div key={week.id} className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{week.title}</h3>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-sm">0{week.id}</span>
                </div>

                <div className="space-y-4">
                  {week.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-gray-400 group-hover:text-gray-200 transition-colors bg-black/20 p-3 rounded-lg border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 box-shadow-cyan" />
                      <span className="text-sm font-medium">{mod}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-400 font-semibold group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  Start Module
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
