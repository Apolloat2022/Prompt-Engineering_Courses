import Image from 'next/image';

export default function HomePage() {
  const courses = [
    {
      level: "Level 1",
      title: "AI Communication Fundamentals",
      description: "Master the core principles of effective prompting, from zero-shot to chain-of-thought strategies.",
      icon: "🚀",
      color: "from-cyan-500 to-blue-600",
      link: "/courses/level-1"
    },
    {
      level: "Level 2",
      title: "Agentic Workflows",
      description: "Build autonomous agents and RAG pipelines. Learn to orchestrate complex AI behaviors.",
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      link: "/courses/level-2"
    },
    {
      level: "Tool",
      title: "AI Prompt Sandbox",
      description: "Test and score your prompts against our heuristic engine. Get real-time feedback.",
      icon: "🧪",
      color: "from-pink-500 to-rose-600",
      link: "/sandbox"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional & Engaging */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27]">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Professional AI Training Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Master the Art of
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Prompt Engineering
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your AI workflows with expert-level techniques. Learn from industry professionals and master the skills that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]"
              >
                Start Learning Now
              </a>
              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                Explore Courses
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 mt-16 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">500+</span>
                <span>Students</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">4.9</span>
                <span>Rating</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">1</span>
                <span>Comprehensive Course</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Clean & Professional */}
      <section id="courses" className="relative py-24 px-8 bg-[#0a0e27]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learn at Your Own Pace
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose from our curated selection of courses and tools.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.08] p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${course.color}`} />

                {/* Icon - Properly Sized */}
                <div className="text-5xl mb-6">{course.icon}</div>

                {/* Level Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-4">
                  {course.level}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* CTA Link */}
                <a
                  href={course.link}
                  className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all"
                >
                  <span>{course.level === "Tool" ? "Try Tool" : "Explore Course"}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-8 bg-gradient-to-b from-[#0a0e27] to-[#0f1535] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of students already mastering AI prompt engineering
          </p>
          <a
            href="/login"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}