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
}

export function useProgress() {
    const [progress, setProgress] = useState<CourseProgress>({
        completedModules: [],
        quizScores: {},
        sandboxHistory: []
    });
    const [isLoading, setIsLoading] = useState(true);

    // Load from LocalStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('apollo_course_progress');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Ensure sandboxHistory exists for backward compatibility
                if (!parsed.sandboxHistory) parsed.sandboxHistory = [];
                setProgress(parsed);
            } catch (e) {
                console.error("Failed to parse progress", e);
            }
        }
        setIsLoading(false);
    }, []);

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
    };

    const isModuleCompleted = (moduleId: string) => progress.completedModules.includes(moduleId);
    const getModuleScore = (moduleId: string) => progress.quizScores[moduleId] || 0;

    return {
        progress,
        isLoading,
        saveProgress,
        saveSandboxResult,
        isModuleCompleted,
        getModuleScore
    };
}
