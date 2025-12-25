
export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A] z-10" />
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/assets/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-4xl">
          <span className="text-cyber-blue font-mono tracking-[0.3em] uppercase text-sm mb-4 block">
            The Future of IT Leadership
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-quantum-purple">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The only prompt engineering curriculum designed specifically for IT Managers and Enterprise Leaders.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-cyber-blue px-10 py-4 rounded-full font-bold btn-glow text-lg">
              Start Level 1
            </button>
            <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/5 transition text-lg">
              View Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Course Tiers Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Three Tiers of Mastery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Beginner', 'Intermediate', 'Professional'].map((tier, i) => (
            <div key={i} className="glass-card p-10 group hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg mb-6 flex items-center justify-center text-cyber-blue font-bold">
                0{i+1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{tier} Foundations</h3>
              <p className="text-gray-400 text-sm mb-8">
                Master the core architecture of large language models for IT workflows.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
