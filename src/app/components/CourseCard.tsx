'use client';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
}

const levelColors = {
  beginner: 'from-green-500 to-emerald-600',
  intermediate: 'from-blue-500 to-cyan-600',
  advanced: 'from-purple-500 to-pink-600'
};

export function CourseCard({ title, description, level, image }: CourseCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Level Badge */}
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${levelColors[level]} text-white mb-4`}>
            {level}
          </span>

          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
            <span>Learn more</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}