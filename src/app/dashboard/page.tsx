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
        <div className="min-h-screen pt-32 px-8 bg-[url('/grid.svg')] bg-fixed bg-center">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h1 className="text-5xl font-bold mb-2">
                            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500">{session?.user?.name}</span>
                        </h1>
                        <p className="text-gray-400 text-lg">Ready to continue your journey into AI mastery?</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for Enrolled Courses */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-cyber-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">My Learning Path</h2>
                        <div className="w-full bg-gray-700 h-2 rounded-full mb-4 overflow-hidden">
                            <div className="bg-cyber-blue h-full w-0"></div>
                        </div>
                        <p className="text-gray-400 mb-6">No active courses. Start your first module today.</p>
                        <a href="/" className="inline-block w-full py-3 text-center bg-cyber-blue text-deep-space font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-shadow">
                            Browse Catalog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
