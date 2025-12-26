import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { ParallaxSection } from './components/ParallaxSection';

export default function Home() {
  const courses = [
    {
      title: "Prompt Fundamentals",
      description: "Master the basics of effective prompting",
      level: "beginner" as const,
      image: "https://placehold.co/600x400/1a1a1a/FFF?text=Fundamentals" // Placeholder image
    },
    {
      title: "Advanced Techniques",
      description: "Chain-of-thought, few-shot learning, and more",
      level: "advanced" as const,
      image: "https://placehold.co/600x400/1a1a1a/FFF?text=Advanced" // Placeholder image
    },
    {
      title: "AI Workflows",
      description: "Building complex automation pipelines",
      level: "intermediate" as const,
      image: "https://placehold.co/600x400/1a1a1a/FFF?text=Workflows" // Placeholder image
    }
  ];

  return (
    <main className="min-h-screen bg-deep-space">
      <Hero />

      <ParallaxSection>
        <section className="py-20 px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </section>
      </ParallaxSection>
    </main>
  );
}
