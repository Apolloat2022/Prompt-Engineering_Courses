import { blogPosts } from "../../../data/blog";
import { notFound } from "next/navigation";
import { GlassCard } from "../../components/landing/GlassCard";
import { InteractiveBackground } from "../../components/landing/InteractiveBackground";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            <InteractiveBackground />

            <div className="relative z-10 pt-32 pb-32 px-8 max-w-[900px] mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-12 hover:translate-x-[-4px] transition-transform"
                >
                    &larr; Back to Insights
                </Link>

                <GlassCard className="p-8 md:p-12 mb-12">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-8 uppercase tracking-wider font-semibold">
                        <span className="text-cyan-400">{post.category}</span>
                        <div className="flex-grow h-px bg-white/10"></div>
                        <span>{post.date}</span>
                    </div>

                    <div className="prose prose-invert prose-cyan max-w-none">
                        {/* Custom Markdown-like rendering handles basic tags in our static content */}
                        <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">
                                {post.author[0]}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{post.author}</p>
                                <p className="text-xs text-gray-500">Expert Trainer</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="text-gray-500 hover:text-white transition-colors">
                                Share
                            </button>
                            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                Save for later
                            </button>
                        </div>
                    </div>
                </GlassCard>

                {/* Related Posts simple display */}
                <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((otherPost) => (
                        <Link href={`/blog/${otherPost.slug}`} key={otherPost.slug}>
                            <GlassCard className="p-6 hover:bg-white/5 transition-all group">
                                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 block">{otherPost.category}</span>
                                <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{otherPost.title}</h4>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Simple helper to convert our basic markdown string to HTML for display
function formatContent(content: string) {
    return content
        .replace(/# (.*)/g, '<h1 class="text-4xl font-bold mb-8">$1</h1>')
        .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-12 mb-6">$1</h2>')
        .replace(/\n\n/g, '</p><p class="text-gray-400 leading-relaxed mb-6 font-medium">')
        .replace(/\n- (.*)/g, '<li>$1</li>')
        .replace(/<li>/g, '<ul class="list-disc list-inside text-gray-400 mb-6 font-medium"><li>')
        .replace(/<\/li>\n/g, '</li></ul>')
        .replace(/\*\*(.*)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/\*(.*)\*/g, '<em class="italic text-gray-300">$1</em>');
}
