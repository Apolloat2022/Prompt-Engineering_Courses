'use client';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-indigo-950/50 to-deep-space">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Master Prompt Engineering
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Transform your AI workflows with expert-level prompting techniques
        </p>
        <a 
          href="/dashboard"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Start Learning
        </a>
      </div>
    </section>
  );
}