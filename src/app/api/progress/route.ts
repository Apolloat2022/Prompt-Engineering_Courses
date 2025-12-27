import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession();
    if (!session || !session.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const user = await prisma.user.findUnique({ where: { email: session.user.email } });

        if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

        await prisma.courseProgress.upsert({
            where: { userId: user.id },
            update: {
                completedModules: JSON.stringify(body.completedModules),
                quizScores: JSON.stringify(body.quizScores),
                sandboxHistory: JSON.stringify(body.sandboxHistory),
            },
            create: {
                userId: user.id,
                completedModules: JSON.stringify(body.completedModules),
                quizScores: JSON.stringify(body.quizScores),
                sandboxHistory: JSON.stringify(body.sandboxHistory),
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Progress Sync Error:", error);
        return NextResponse.json({ message: "Sync failed" }, { status: 500 });
    }
}

export async function GET() {
    const session = await getServerSession();
    if (!session || !session.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: session.user.email },
            include: { progress: true }
        });

        if (!user || !user.progress) {
            return NextResponse.json({ empty: true });
        }

        return NextResponse.json({
            completedModules: JSON.parse(user.progress.completedModules || "[]"),
            quizScores: JSON.parse(user.progress.quizScores || "{}"),
            sandboxHistory: JSON.parse(user.progress.sandboxHistory || "[]"),
        });

    } catch (error) {
        console.error("Fetch Progress Error:", error);
        return NextResponse.json({ message: "Fetch failed" }, { status: 500 });
    }
}
