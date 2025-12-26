'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        },
    });

    if (status === 'loading') {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-deep-space text-white p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    Welcome back, <span className="text-cyber-blue">{session?.user?.name}</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for Enrolled Courses */}
                    <div className="glass-card p-6 rounded-xl">
                        <h2 className="text-xl font-bold mb-4">My Progress</h2>
                        <p className="text-gray-400">You haven't started any courses yet.</p>
                        <button className="mt-4 px-4 py-2 bg-cyber-blue text-deep-space rounded font-bold">
                            Browse Courses
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
