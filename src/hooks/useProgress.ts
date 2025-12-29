'use client';

import { useState, useEffect } from 'react';

// Types
export interface SandboxResult {
    id: string;
    date: string;
    promptSnippet: string;
    score: number;
    feedback: string[];
}

export interface CourseProgress {
    completedModules: string[];
    quizScores: Record<string, number>;
    sandboxHistory: SandboxResult[];
    finalExamScore?: number;
}

export function useProgress() {
    const [progress, setProgress] = useState<CourseProgress>({
        completedModules: [],
        quizScores: {},
        sandboxHistory: [],
        finalExamScore: undefined
    });
    const [isLoading, setIsLoading] = useState(true);

    // Load from LocalStorage OR Database on mount
    useEffect(() => {
        const loadProgress = async () => {
            // 1. Try LocalStorage first for instant load
            const stored = localStorage.getItem('apollo_course_progress');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (!parsed.sandboxHistory) parsed.sandboxHistory = [];
                    setProgress(parsed);
                } catch (e) { console.error(e); }
            }

            // 2. If valid session, fetch from DB and merge
            try {
                const res = await fetch('/api/progress');
                if (res.ok) {
                    const dbData = await res.json();
                    if (!dbData.empty) {
                        // Simple merge strategy: DB wins if it exists (assuming it's source of truth across devices)
                        // In a real app, you might want smarter merging logic.
                        setProgress(dbData);
                        localStorage.setItem('apollo_course_progress', JSON.stringify(dbData));
                    }
                }
            } catch (e) {
                // Quiet fail on network error
            } finally {
                setIsLoading(false);
            }
        };

        loadProgress();
    }, []);

    const syncToDb = async (newProgress: CourseProgress) => {
        try {
            await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProgress)
            });
        } catch (e) {
            console.error("Background sync failed", e);
        }
    };

    // Save module progress
    const saveProgress = (moduleId: string, score: number) => {
        const newProgress = { ...progress };

        // Add to completed if not already
        if (!newProgress.completedModules.includes(moduleId)) {
            newProgress.completedModules.push(moduleId);
        }

        // Update score if higher
        const currentScore = newProgress.quizScores[moduleId] || 0;
        if (score > currentScore) {
            newProgress.quizScores[moduleId] = score;
        }

        setProgress(newProgress);
        localStorage.setItem('apollo_course_progress', JSON.stringify(newProgress));
        syncToDb(newProgress); // Fire and forget sync
    };

    // Save Sandbox Result
    const saveSandboxResult = (result: Omit<SandboxResult, 'id' | 'date'>) => {
        const newEntry: SandboxResult = {
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString(),
            ...result
        };

        const newProgress = {
            ...progress,
            sandboxHistory: [newEntry, ...progress.sandboxHistory].slice(0, 10) // Keep last 10
        };

        setProgress(newProgress);
        localStorage.setItem('apollo_course_progress', JSON.stringify(newProgress));
        syncToDb(newProgress);
    };

    // Save Final Exam Score
    const saveFinalExamScore = (score: number) => {
        const newProgress = {
            ...progress,
            finalExamScore: score
        };

        setProgress(newProgress);
        localStorage.setItem('apollo_course_progress', JSON.stringify(newProgress));
        syncToDb(newProgress);
    };

    const isModuleCompleted = (moduleId: string) => progress.completedModules.includes(moduleId);
    const getModuleScore = (moduleId: string) => progress.quizScores[moduleId] || 0;

    return {
        progress,
        isLoading,
        saveProgress,
        saveSandboxResult,
        saveFinalExamScore,
        isModuleCompleted,
        getModuleScore
    };
}
