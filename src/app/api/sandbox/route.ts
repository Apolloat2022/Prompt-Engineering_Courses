import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        // Heuristic scoring logic from legacy backend
        let score = 0;
        let tips = [];

        if (!prompt) {
            return NextResponse.json({ message: "Prompt is required" }, { status: 400 });
        }

        const lowerPrompt = prompt.toLowerCase();

        // 1. Context Check
        if (lowerPrompt.includes('context') || lowerPrompt.includes('act as') || lowerPrompt.includes('you are a')) {
            score += 30;
        } else {
            tips.push('Try defining a Persona (e.g., "Act as a Senior Developer") or Context.');
        }

        // 2. Format / Output Check
        if (lowerPrompt.includes('format') || lowerPrompt.includes('list') || lowerPrompt.includes('table') || lowerPrompt.includes('markdown')) {
            score += 30;
        } else {
            tips.push('Specify your desired Output Format (e.g., "Format as a table" or "Return a JSON list").');
        }

        // 3. Length / Detail Check
        if (prompt.length > 50) {
            score += 40;
        } else {
            tips.push('Your prompt is quite short. Add more constraints, input data, or examples to guide the model.');
        }

        return NextResponse.json({
            strengthScore: score,
            feedback: tips,
            status: 'Analysis Complete'
        });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
