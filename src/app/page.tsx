import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { ParallaxSection } from './components/ParallaxSection';

export default function Home() {
  const courses = [
    {
      title: "Prompt Fundamentals",
      description: "Master the basics of effective prompting",
      level: "beginner" as const,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      title: "Advanced Techniques",
      description: "Chain-of-thought, few-shot learning, and more",
      level: "advanced" as const,
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop"
    },
    {
      title: "AI Workflows",
      description: "Building complex automation pipelines",
      level: "intermediate" as const,
      image: "https://images.unsplash.com/photo-1675557009875-57bc1767d8ce?w=600&h=400&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen">
      <Hero />
      
      <ParallaxSection>
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Our Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>
    </main>
  );
}