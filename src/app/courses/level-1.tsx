import React from 'react';

const weeks = [
  { id: 1, title: "Week 1: The AI Mindset", modules: ["1.1 LLM Perspective", "1.2 First Contact"] },
  { id: 2, title: "Week 2: Core Principles", modules: ["2.1 Anatomy of a Prompt", "2.2 Essential Patterns"] },
  { id: 3, title: "Week 3: IT Management", modules: ["3.1 Tech Documentation", "3.2 Problem-Solving"] },
  { id: 4, title: "Week 4: Implementation", modules: ["4.1 Critical Evaluation", "4.2 Starter Toolkit"] }
];

export default function LevelOne() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="mb-16 text-center">
        <span className="text-cyber-blue font-mono tracking-widest uppercase text-sm">Level 01</span>
        <h1 className="text-5xl font-extrabold mt-4 mb-6">AI Communication Fundamentals</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transform from an AI user to a strategic prompt architect in 4 weeks.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {weeks.map((week) => (
          <div key={week.id} className="glass-card p-8 hover:border-cyber-blue/50 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{week.title}</h3>
              <span className="text-cyber-blue bg-cyber-blue/10 px-3 py-1 rounded-full text-xs">Week 0{week.id}</span>
            </div>
            <ul className="space-y-3">
              {week.modules.map((mod, idx) => (
                <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mr-3"></span>
                  {mod}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg bg-white/5 group-hover:bg-cyber-blue transition-colors font-semibold">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
