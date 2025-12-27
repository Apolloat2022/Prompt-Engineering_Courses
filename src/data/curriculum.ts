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
                    videoUrl: "https://www.youtube.com/embed/5sLYAQS9sWQ", // How Large Language Models Work
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
                    videoUrl: "https://www.youtube.com/embed/yFMVT3bcrJo",
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
                    videoUrl: "https://www.youtube.com/embed/Dep2-Rtl4Ow", // Anatomy of perfect prompting
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
                    videoUrl: "https://www.youtube.com/embed/Fp-ue4UCE3s", // Chain of Thought Prompting
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
                    videoUrl: "https://www.youtube.com/embed/qBlX6FhDm2E", // Lance Cummings: Structured Content
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
                    videoUrl: "https://www.youtube.com/embed/SJqGYwRq0uc", // GitHub Copilot Debugging
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
                    videoUrl: "https://www.youtube.com/embed/4u64WEuQHYE", // AI Bias and Hallucinations
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
                    videoUrl: "https://www.youtube.com/embed/SeybVD0NMQI", // Building Your First AI Application
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

export const level2Curriculum: CourseData = {
    title: "Agentic Workflows",
    level: "Intermediate",
    weeks: [
        {
            id: 1,
            title: "Phase 1: Agentic Foundations",
            modules: [
                {
                    id: "2.1.1",
                    title: "The Autonomous Loop",
                    type: "video",
                    duration: "40m",
                    videoUrl: "https://www.youtube.com/embed/KoJAC3hVr5g",
                    description: "Moving from Chatbots to Agents. We explore the fundamental 'Thought-Action-Observation' loop that allows AI to behave autonomously. Understand the difference between zero-shot answering and iterative problem solving.",
                    useCases: [
                        "Designing a research agent that browses the web",
                        "Building a coding agent that runs and fixes its own code",
                        "Creating a personal assistant that manages your calendar"
                    ],
                    quiz: [
                        { id: 1, text: "What is the core loop of an agent?", options: ["Input-Output", "Thought-Action-Observation", "Listen-Speak", "Read-Write"], correct: 1 },
                        { id: 2, text: "What is a 'Tool' in the context of agents?", options: ["A hammer", "A function the agent can call (e.g., search, calculator)", "The computer mouse", "The user"], correct: 1 },
                        { id: 3, text: "Why do agents need 'Memory'?", options: ["To pass the Turing test", "To maintain context across multiple steps of the loop", "They don't", "To remember your birthday only"], correct: 1 },
                        { id: 4, text: "What is 'ReAct'?", options: ["A Javascript library", "Reasoning + Acting", "Reaction time", "Reality Action"], correct: 1 },
                        { id: 5, text: "What creates the risk of infinite loops?", options: ["Bad wifi", "The agent failing to meet its 'Stop' condition", "User error", "Solar flares"], correct: 1 }
                    ]
                },
                {
                    id: "2.1.2",
                    title: "RAG & Vector Databases",
                    type: "video",
                    duration: "45m",
                    videoUrl: "https://www.youtube.com/embed/T-D1OfcDW1M",
                    description: "Retrieval Augmented Generation (RAG) is the bridge between frozen model weights and your private data. Learn how vector embeddings work, how to store them, and how to retrieve relevant context for your agents.",
                    useCases: [
                        "Building a 'Chat with your PDF' app",
                        "Creating an enterprise knowledge base search",
                        "Improving hallucination rates by grounding outputs"
                    ],
                    quiz: [
                        { id: 1, text: "What does RAG stand for?", options: ["Really Amazing GPT", "Retrieval Augmented Generation", "Random Access Generator", "Red And Green"], correct: 1 },
                        { id: 2, text: "What is an 'Embedding'?", options: ["A video", "A numerical vector representation of text meaning", "A web link", "A stone"], correct: 1 },
                        { id: 3, text: "Why use a Vector Database?", options: ["To store images", "To perform semantic search (similarity search)", "To store SQL relations", "To mine bitcoin"], correct: 1 },
                        { id: 4, text: "Does RAG fine-tune the model?", options: ["Yes", "No, it provides context at inference time", "Maybe", "Only on weekends"], correct: 1 },
                        { id: 5, text: "What is the 'Context Window'?", options: ["The screen size", "The limit of tokens the model can process at once", "A view outside", "Windows 11"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Phase 2: Tools & Capabilities",
            modules: [
                {
                    id: "2.2.1",
                    title: "Function Calling Fundamentals",
                    type: "video",
                    duration: "35m",
                    videoUrl: "https://www.youtube.com/embed/7E-qdsVEoB8",
                    description: "Agents need hands. Function calling (or Tool Use) allows LLMs to interact with the outside world—sending emails, querying databases, or running calculations. We learn how to define tool schemas and handle model outputs.",
                    useCases: [
                        "Connecting an LLM to a SQL database",
                        "Building a booking assistant that uses a calendar API",
                        "Creating a data analysis agent that uses Python"
                    ],
                    quiz: [
                        { id: 1, text: "What is a 'Tool Schema'?", options: ["A database schema", "A JSON description of a function the model can call", "A mental model", "A blueprint"], correct: 1 },
                        { id: 2, text: "Does the LLM execute the code?", options: ["Yes, inside its weights", "No, it generates the arguments, and the runtime executes them", "Yes, always", "Only in the cloud"], correct: 1 },
                        { id: 3, text: "What happens after the tool executes?", options: ["The program ends", "The output is fed back to the LLM to generate a final response", "The LLM forgets it", "Nothing"], correct: 1 },
                        { id: 4, text: "Can an LLM call multiple tools?", options: ["No, only one", "Yes, formatted as a sequence of calls", "Only if paid", "Only on Fridays"], correct: 1 },
                        { id: 5, text: "What is the biggest risk of tool use?", options: ["Boredom", "The model taking unintended actions (requiring a human-in-the-loop)", "High electricity bill", "None"], correct: 1 }
                    ]
                },
                {
                    id: "2.2.2",
                    title: "Building Custom Tools",
                    type: "video",
                    duration: "40m",
                    videoUrl: "https://www.youtube.com/embed/NiLb5DK4_rU",
                    description: "Theory is great, but practice is better. We build a custom tool from scratch—a 'Stock Price Fetcher' and a 'Sentiment Analyzer'—and wire them into a LangChain agent.",
                    useCases: [
                        "Real-time financial dashboard generation",
                        "Automated customer support ticket tagging",
                        "Smart home control via natural language"
                    ],
                    quiz: [
                        { id: 1, text: "What distinguishes a Custom Tool from a built-in one?", options: ["It costs more", "You define the logic and the description yourself", "It is faster", "It is slower"], correct: 1 },
                        { id: 2, text: "Why is the tool description critical?", options: ["It isn't", "It helps the LLM decide WHEN to use the tool", "For documentation only", "For the user"], correct: 1 },
                        { id: 3, text: "What format are arguments usually passed in?", options: ["XML", "JSON", "Binary", "Plain text"], correct: 1 },
                        { id: 4, text: "Can tools return files in LangChain?", options: ["Yes", "No", "Maybe", "Only text"], correct: 0 },
                        { id: 5, text: "What is Pydantic used for?", options: ["Databases", "Data validation for tool inputs", "Web hosting", "Styling"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Phase 3: Advanced RAG",
            modules: [
                {
                    id: "2.3.1",
                    title: "Advanced Retrieval Strategies",
                    type: "video",
                    duration: "45m",
                    videoUrl: "https://www.youtube.com/embed/TRjq7t2Ms5I",
                    description: "Naive RAG often fails on complex queries. We explore advanced techniques: Hybrid Search (Keyword + Semantic), Parent-Child Indexing, and Re-ranking to drastically improve retrieval quality.",
                    useCases: [
                        "Searching legal contracts for specific clauses",
                        "Medical diagnosis support systems",
                        "Complex technical troubleshooting bots"
                    ],
                    quiz: [
                        { id: 1, text: "What is 'Hybrid Search'?", options: ["Searching fast", "Combining Keyword (BM25) and Semantic (Vector) search", "Searching two databases", "Google Search"], correct: 1 },
                        { id: 2, text: "What does a 'Re-ranker' do?", options: ["Sorts results by relevance after retrieval", "Deletes data", "Ranks users", "Nothing"], correct: 0 },
                        { id: 3, text: "What is the 'Lost in the Middle' phenomenon?", options: ["Getting lost", "LLMs forgetting context in the middle of a large prompt", "Database error", "Network latency"], correct: 1 },
                        { id: 4, text: "Why chunk text?", options: ["To make it bite-sized for embedding models", "To save space", "To delete it", "No reason"], correct: 0 },
                        { id: 5, text: "What is 'HyDE'?", options: ["A park", "Hypothetical Document Embeddings", "Hidden Data", "High Yield"], correct: 1 }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Phase 4: Multi-Agent Orchestration",
            modules: [
                {
                    id: "2.4.1",
                    title: "CrewAI & AutoGen",
                    type: "video",
                    duration: "50m",
                    videoUrl: "https://www.youtube.com/embed/sPzc6hMg7So",
                    description: "One agent is powerful; a team is unstoppable. We dive into Multi-Agent frameworks like CrewAI and AutoGen. Learn to assign Roles (Researcher, Writer, Manager) and have them collaborate to solve complex tasks.",
                    useCases: [
                        "Automated content marketing factory (Trend Watcher -> Writer -> Editor)",
                        "Software development squad (Product Owner -> Coder -> QA)",
                        "Complex financial report generation"
                    ],
                    quiz: [
                        { id: 1, text: "What is the benefit of Multi-Agent systems?", options: ["They are cooler", "Specialization and improved performance on complex tasks", "They are cheaper", "They use less RAM"], correct: 1 },
                        { id: 2, text: "What is a 'Manager' agent?", options: ["The user", "An agent that delegates tasks and reviews work", "A database", "A script"], correct: 1 },
                        { id: 3, text: "what is 'CrewAI'?", options: ["A boat", "A framework for orchestrating role-playing agents", "A game", "A recruitment agency"], correct: 1 },
                        { id: 4, text: "How do agents communicate?", options: ["Email", "Through message passing / conversation", "Telepathy", "They don't"], correct: 1 },
                        { id: 5, text: "Is human-in-the-loop possible in multi-agent systems?", options: ["No", "Yes, to approve critical steps", "Only at the end", "Never"], correct: 1 }
                    ]
                }
            ]
        }
    ]
};
