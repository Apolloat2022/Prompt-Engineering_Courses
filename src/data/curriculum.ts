export interface Question {
    id: number;
    text: string;
    options: string[];
    correct: number;
}

export interface Module {
    id: string;
    title: string;
    type: 'video' | 'text' | 'quiz';
    duration: string;
    videoUrl?: string; // YouTube Embed URL
    description?: string;
    useCases?: string[];
    quiz?: Question[];
}

export interface Week {
    id: number;
    title: string;
    modules: Module[];
}

export interface CourseData {
    title: string;
    level: string;
    weeks: Week[];
}

export const level1Curriculum: CourseData = {
    title: "AI Communication Fundamentals",
    level: "Beginner",
    weeks: [
        {
            id: 1,
            title: "Week 1: The AI Mindset",
            modules: [
                {
                    id: "1.1",
                    title: "1.1 LLM Perspective",
                    type: "video",
                    duration: "45m",
                    videoUrl: "https://www.youtube.com/embed/5sLYAQS9sWQ", // Placeholder for actual ID if different, but using existing one for now
                    description: "Understanding Large Language Models (LLMs) requires shifting your perspective from 'searching' to 'instructing'. In this module, we dissect how LLMs process information through tokenization and next-word prediction, demystifying the 'black box' of AI. We cover the fundamentals of how models 'think' and process inputs.",
                    useCases: [
                        "Explaining AI limitations to stakeholders",
                        "Debugging unexpected model outputs",
                        "Designing constraints for business applications"
                    ],
                    quiz: [
                        { id: 1, text: "What represents the 'knowledge' in an LLM?", options: ["The internet connection", "The parameters (weights) learned during training", "A SQL database", "The user's input"], correct: 1 },
                        { id: 2, text: "LLMs are fundamentally prediction engines for what?", options: ["Stock prices", "Next tokens (words)", "Weather", "Truth"], correct: 1 },
                        { id: 3, text: "Do LLMs 'understand' text like humans?", options: ["Yes, exactly like humans", "No, they process statistical patterns", "Yes, they have consciousness", "Only if paid"], correct: 1 },
                        { id: 4, text: "What is 'Pre-training'?", options: ["Learning from massive datasets", "Learning from user feedback", "The time before training", "Installing Python"], correct: 0 },
                        { id: 5, text: "Can LLMs hallucinate?", options: ["No, never", "Yes, they can generate confident falsehoods", "Only on outdated hardware", "Only in zero-shot mode"], correct: 1 }
                    ]
                },
                {
                    id: "1.2",
                    title: "1.2 First Contact",
                    type: "video",
                    duration: "15m",
                    videoUrl: "https://www.youtube.com/embed/_ZvnD7N7p2w",
                    description: "Your first interaction with an LLM sets the tone for future success. This module covers the foundational syntax of effective prompting, the importance of clarity, and how to avoid the 'Garbage In, Garbage Out' trap. Featuring Liam Ottley's guide to getting started.",
                    useCases: [
                        "Writing your first effective email drafter",
                        "Summarizing complex meeting notes",
                        "Translating natural language to code"
                    ],
                    quiz: [
                        { id: 1, text: "What is the primary role of a Prompt Engineer?", options: ["To fix computers", "To craft inputs that guide AI effectively", "To write Python code", "To manage servers"], correct: 1 },
                        { id: 2, text: "Which approach usually yields better results?", options: ["Vague questions", "Specific, structured instructions", "One word prompts", "Asking politely only"], correct: 1 },
                        { id: 3, text: "What is 'Iterative Prompting'?", options: ["Asking once and giving up", "Refining the prompt based on output until success", "Repeating the same prompt", "Auto-looping"], correct: 1 },
                        { id: 4, text: "Why is English often called the 'new programming language'?", options: ["It isn't", "Because we prompt models in natural language", "Because Python is dead", "Because compilers speak English"], correct: 1 },
                        { id: 5, text: "Is the first output always the best?", options: ["Yes, AI is perfect", "No, refinement is often needed", "Only for GPT-4", "Depends on the weather"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Week 2: Core Principles",
            modules: [
                {
                    id: "2.1",
                    title: "2.1 Anatomy of a Prompt",
                    type: "video",
                    duration: "29m",
                    videoUrl: "https://www.youtube.com/embed/dOxUroR58zU", // James Briggs Video ID
                    description: "A professional prompt isn't just a sentence; it's a structured object. We break down the four key components: Instruction, Context, Input Data, and Output Indicator. We explore James Briggs' detailed breakdown of prompt structure and few-shot training techniques.",
                    useCases: [
                        "Creating reusable prompt templates for teams",
                        "Standardizing AI outputs for software integration",
                        "Reducing token usage while maintaining quality"
                    ],
                    quiz: [
                        { id: 1, text: "Which element sets the AI's behavior?", options: ["Context", "Persona / Role", "Task", "Output Format"], correct: 1 },
                        { id: 2, text: "Why include 'Output Format' in a prompt?", options: ["To confuse the AI", "To ensure the response structure matches your needs (e.g., Table, List)", "To save tokens", "To make it look cool"], correct: 1 },
                        { id: 3, text: "What does 'Context' provide?", options: ["The goal", "Background information to constrain the solution space", "The output", "The format"], correct: 1 },
                        { id: 4, text: "If you want a 50-word summary, which component is that?", options: ["Constraint", "Persona", "Context", "Input Data"], correct: 0 },
                        { id: 5, text: "Are all components required for every prompt?", options: ["Yes, strict rule", "No, but they help complexity", "No, only specific ones exist", "Only context matters"], correct: 1 }
                    ]
                },
                {
                    id: "2.2",
                    title: "2.2 Essential Patterns",
                    type: "video",
                    duration: "25m",
                    videoUrl: "https://www.youtube.com/embed/b-Qe_Tdw4oY", // Existing video or placeholder
                    description: "Design patterns aren't just for software code. We explore the 'Persona', 'Recipe', and 'Chain of Thought' patterns—proven strategies to unlock higher reasoning capabilities in models like GPT-4 and Claude. This lesson covers the advanced techniques from the Prompt Engineering Guide.",
                    useCases: [
                        "Simulating expert consultants (e.g., Legal, Medical)",
                        "Generating complex, step-by-step tutorials",
                        "Solving math or logic puzzles with high accuracy"
                    ],
                    quiz: [
                        { id: 1, text: "The 'Persona Pattern' uses which key instruction?", options: ["Act as...", "Write a...", "Translate to...", "Summarize..."], correct: 0 },
                        { id: 2, text: "The 'Recipe Pattern' is best for?", options: ["Food", "Generative step-by-step procedures", "Writing poems", "Coding"], correct: 1 },
                        { id: 3, text: "What does 'Chain of Thought' encourage?", options: ["Speed", "Reasoning transparency", "Short answers", "Randomness"], correct: 1 },
                        { id: 4, text: "In the 'Flipped Interaction' pattern, who asks the questions?", options: ["The User", "The AI", "The Developer", "Nobody"], correct: 1 },
                        { id: 5, text: "Why use patterns?", options: ["To memorize names", "To standardize effective strategies for recurring problems", "They are mandatory", "To avoid typing"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Week 3: IT Management",
            modules: [
                {
                    id: "3.1",
                    title: "3.1 Tech Documentation",
                    type: "video",
                    duration: "30m",
                    videoUrl: "https://www.youtube.com/embed/Q9VPjW1y7Rg", // Lance Cummings: Structured Content
                    description: "Documentation is the backbone of IT. Learn how to use 'Structured Prompts' to generate high-quality technical documentation, API references, and user guides. We dive into Lance Cummings' methodologies for technical communication.",
                    useCases: [
                        "Auto-generating API documentation from code",
                        "Creating user manuals from feature lists",
                        "Standardizing commit messages and changelogs"
                    ],
                    quiz: [
                        { id: 1, text: "What is the main benefit of structured prompts for documentation?", options: ["It's faster", "It ensures consistency and completeness", "It's cheaper", "It's fun"], correct: 1 },
                        { id: 2, text: "Which component is crucial for technical docs?", options: ["Humor", "Context and Constraints", "Emojis", "Short sentences only"], correct: 1 },
                        { id: 3, text: "Can AI update existing documentation?", options: ["No, only create new", "Yes, by providing the old doc and the changes", "Only if it wrote it", "Only in Python"], correct: 1 },
                        { id: 4, text: "How do you ensure accuracy?", options: ["Trust the AI", "Human review and verification", "Ask twice", "Use GPT-5"], correct: 1 },
                        { id: 5, text: "What format is best for technical prompts?", options: ["Paragraphs", "Markdown / Structured Data", "Audio", "Images"], correct: 1 }
                    ]
                },
                {
                    id: "3.2",
                    title: "3.2 Problem-Solving",
                    type: "video",
                    duration: "40m",
                    videoUrl: "https://www.youtube.com/embed/S3_J3U2dYFU", // GitHub Copilot Debugging
                    description: "Debugging and problem-solving are core IT skills. See how tools like GitHub Copilot and ChatGPT can act as an intelligent pair programmer, helping you diagnose errors, refactor code, and brainstorm architectural solutions.",
                    useCases: [
                        "Analyzing stack traces for root cause",
                        "Refactoring legacy code to modern patterns",
                        " brainstorming system architecture options"
                    ],
                    quiz: [
                        { id: 1, text: "What is GitHub Copilot primarily used for?", options: ["Writing emails", "Code completion and assistance", "Video editing", "Social media"], correct: 1 },
                        { id: 2, text: "How can AI help with debugging?", options: ["It fixes bugs automatically without asking", "It can explain error messages and suggest fixes", "It deletes the code", "It blames the user"], correct: 1 },
                        { id: 3, text: "What is 'Rubber Ducking' with AI?", options: ["A game", "Explaining the problem to the AI to clarify your own thoughts", "Buying a toy", "Coding in the bath"], correct: 1 },
                        { id: 4, text: "Should you paste sensitive keys into the AI?", options: ["Yes, it's safe", "No, never", "Only on Tuesdays", "If it asks nicely"], correct: 1 },
                        { id: 5, text: "Can AI suggest performance optimizations?", options: ["No", "Yes, it can analyze complexity and suggest refactors", "Only for C++", "Only if you pay extra"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Week 4: Implementation",
            modules: [
                {
                    id: "4.1",
                    title: "4.1 Critical Evaluation",
                    type: "video",
                    duration: "35m",
                    videoUrl: "https://www.youtube.com/embed/N-7aC9hO76s", // AI Bias and Hallucinations
                    description: "Trust but verify. Learn the critical skills of evaluating AI outputs for bias, hallucinations, and security vulnerabilities. We discuss bias detection, fact-checking strategies, and how to rigorously test your prompts before deployment.",
                    useCases: [
                        "Auditing AI for gender/racial bias",
                        "Verifying factual claims against reliable sources",
                        "Testing for prompt injection vulnerabilities"
                    ],
                    quiz: [
                        { id: 1, text: "What is 'AI Hallucination'?", options: ["AI dreaming", "Confident but false generation", "AI seeing ghosts", "System crash"], correct: 1 },
                        { id: 2, text: "Why is bias detection important?", options: ["To be politically correct", "To ensure fair and ethical outcomes", "To slow down development", "It's not important"], correct: 1 },
                        { id: 3, text: "How do you test a prompt?", options: ["Run it once", "Run it with diverse inputs and edge cases", "Ask a friend", "Guess"], correct: 1 },
                        { id: 4, text: "What is 'Red Teaming'?", options: ["Playing a game", "Adversarial testing to find flaws", "Writing code in red", "Marketing"], correct: 1 },
                        { id: 5, text: "Can AI explain its own bias?", options: ["Always perfectly", "Sometimes, but often it's hidden in training data", "Never", "Only if asked nicely"], correct: 1 }
                    ]
                },
                {
                    id: "4.2",
                    title: "4.2 Starter Toolkit",
                    type: "video",
                    duration: "45m",
                    videoUrl: "https://www.youtube.com/embed/_e-zwSJ1yE0", // Build AI Agent from scratch
                    description: "Ready to build? We review the essential tools and platforms for 2024. From end-to-end project examples to building your first AI application, this module gives you the starter toolkit to move from theory to practice.",
                    useCases: [
                        "Selecting the right LLM for your task",
                        "Setting up a local development environment",
                        "Deploying a simple AI wrapper app"
                    ],
                    quiz: [
                        { id: 1, text: "What is the first step in building an AI app?", options: ["Writing code", "Defining the problem and use case", "Buying servers", "Designing a logo"], correct: 1 },
                        { id: 2, text: "What is an API key?", options: ["A physical key", "A safe password", "A credential to access AI services programmatically", "A crypto token"], correct: 2 },
                        { id: 3, text: "Do you always need a massive GPU?", options: ["Yes, always", "No, you can use cloud APIs", "Only for text", "No, CPU is enough for training"], correct: 1 },
                        { id: 4, text: "What is a 'Wrapper' app?", options: ["Paper app", "An app that wraps a UI around an underlying AI model", "A candy app", "A slow app"], correct: 1 },
                        { id: 5, text: "Why use a framework like LangChain?", options: ["To make it harder", "To abort mission", "To simplify chaining multiple AI calls and tools", "It's required by law"], correct: 2 }
                    ]
                }
            ]
        }
    ]
};
