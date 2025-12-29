export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    content: string;
    icon: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "rise-of-agentic-ai",
        title: "The Rise of Agentic AI",
        excerpt: "How autonomous agents are reshaping the software development lifecycle.",
        date: "Dec 28, 2024",
        author: "Apollo Team",
        category: "Trends",
        icon: "🤖",
        content: `
# The Rise of Agentic AI

Autonomous agents are no longer a concept of the future; they are actively reshaping how we build and maintain software. In this post, we explore the transition from simple chatbots to complex agentic workflows.

## What is Agentic AI?
Unlike traditional AI models that respond to a single prompt, Agentic AI can:
- **Decompose Tasks**: Break down a high-level goal into actionable steps.
- **Use Tools**: Access APIs, databases, and search engines to gather information.
- **Self-Correct**: Monitor their own output and iterate until the goal is met.

## Impact on Development
In the software development lifecycle (SDLC), agents are taking on roles such as:
1. **Automated QA**: Agents that can write and execute tests, then fix the bugs they find.
2. **DevOps Orchestration**: Managing deployments and scaling infrastructure based on natural language commands.
3. **Drafting Documentation**: Keeping technical docs in sync with code changes in real-time.

The future belongs to the "Human-in-the-loop" model, where developers act as architects of these agentic fleets rather than just writers of code.
        `
    },
    {
        slug: "mastering-few-shot-prompting",
        title: "Mastering Few-Shot Prompting",
        excerpt: "A deep dive into providing examples to guide LLM outputs effectively.",
        date: "Dec 25, 2024",
        author: "Sarah Jenks",
        category: "Tutorial",
        icon: "🎓",
        content: `
# Mastering Few-Shot Prompting

Few-shot prompting is one of the most powerful techniques in a prompt engineer's toolkit. By providing a few examples of input-output pairs, you can significantly improve model performance on complex or niche tasks.

## Why Few-Shot?
While "Zero-Shot" (just asking) works for general tasks, Few-Shot is essential when:
- You need a specific **output format** (like a custom JSON schema).
- You want to mirror a specific **tone or style**.
- The task requires **complex logic** that the model might struggle with initially.

## The Perfect Few-Shot Structure
A robust few-shot prompt usually follows this pattern:
1. **The System Message**: Define the role.
2. **The Examples**: 3-5 high-quality examples of inputs and desired outputs.
3. **The Target**: The actual query you want the model to process.

*Tip: Make sure your examples are diverse. If all your examples are short, the model will produce short outputs even if the target query requires a long explanation.*
        `
    },
    {
        slug: "why-context-window-matters",
        title: "Why Context Window Matters",
        excerpt: "Understanding token limits and how to optimize your prompts for long-context models.",
        date: "Dec 20, 2024",
        author: "Mike Chen",
        category: "Technical",
        icon: "📏",
        content: `
# Why Context Window Matters

As models like Claude 3.5 and Gemini 1.5 Pro expand the boundaries of what's possible with context windows, understanding how to manage this space has become a critical technical skill.

## What is a Context Window?
The context window is the total amount of information (measured in tokens) that a model can "hold in mind" at one time. This includes your prompt, the conversation history, and the model's generated response.

## Key Considerations
- **The "Lost in the Middle" Effect**: Even with huge windows, models often struggle to retrieve information from the middle of a massive prompt.
- **Token Economy**: Even if the window is 2 million tokens, processing that much information is expensive and slower. Efficient prompting is still key.
- **Grounding and RAG**: Instead of dumping everything into context, use Retrieval Augmented Generation (RAG) to only provide the most relevant snippets.

## Best Practices
1. **Put Crucial Info at the End**: Models often pay more attention to the very end of a prompt.
2. **Use Clear Headers**: Use Markdown headers to help the model navigate complex technical context.
3. **Monitor Your Usage**: Use token counting libraries to ensure you don't cut off your own conversation.
        `
    }
];
