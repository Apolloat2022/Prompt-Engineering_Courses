'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Great_Vibes, Dancing_Script } from 'next/font/google';

// Load Fonts
const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400']
});

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
});

function CertificateContent() {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const [date, setDate] = useState('');

    const courseName = searchParams.get('course') || 'Prompt Engineering Level 1';
    const certificateId = searchParams.get('id') || Math.random().toString(36).substr(2, 9).toUpperCase();

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }));
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const studentName = session?.user?.name || "Robin Pandey";

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 print:p-0 print:bg-white">
            {/* Navigation (Hidden on Print) */}
            <nav className="w-full max-w-[1000px] mb-8 flex justify-between items-center print:hidden">
                <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <span>← Back to Dashboard</span>
                </Link>
                <button
                    onClick={handlePrint}
                    className="px-6 py-2 bg-[#1e3a8a] hover:bg-[#172554] text-white font-bold rounded-lg shadow-lg transition-all flex items-center gap-2"
                >
                    <span>🖨️ Download PDF</span>
                </button>
            </nav>

            {/* Certificate Paper */}
            <div className="relative w-full max-w-[1000px] aspect-[1.414/1] bg-white !text-black shadow-2xl overflow-hidden print:shadow-none print:w-full print:h-full flex flex-col border border-gray-200">

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-r-[150px] border-t-transparent border-r-[#1e3a8a] z-10"></div>
                <div className="absolute top-[20px] right-[20px] w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-[#ca8a04] z-20"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[150px] border-l-[150px] border-b-transparent border-l-[#1e3a8a] z-10"></div>
                <div className="absolute bottom-[20px] left-[20px] w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-[#ca8a04] z-20"></div>

                {/* Header */}
                <div className="pt-16 px-16 flex justify-between items-start relative z-30">
                    <div className="w-48">
                        <img src="/logo.png" alt="Apollo Technologies" className="w-full object-contain" />
                    </div>
                    <div className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold tracking-widest font-serif">BUILDFOLIO</h2>
                        <p className="text-[10px] uppercase tracking-wider text-center text-blue-200">Certificate Platform</p>
                    </div>
                </div>

                <div className="w-[85%] h-0.5 bg-[#1e3a8a]/20 mx-auto mt-12"></div>

                {/* Main Content */}
                <div className="text-center flex-1 flex flex-col items-center px-20 relative z-30">
                    <h1 className="!text-[#1e3a8a] text-6xl font-serif font-bold tracking-wider mt-8 mb-4">CERTIFICATE</h1>
                    <p className="!text-gray-500 uppercase tracking-[0.2em] text-sm mb-2">OF {courseName.toUpperCase()}</p>
                    <p className="!text-gray-400 text-sm mt-8 mb-4">This Certificate Is Proudly Presented To</p>

                    {/* Name */}
                    <div className={`${greatVibes.className} text-7xl !text-[#1e3a8a] mb-8`}>
                        {studentName}
                    </div>

                    {/* Description */}
                    <div className="max-w-3xl text-sm leading-relaxed !text-gray-600 mb-8">
                        We give this certificate because <span className="font-bold text-red-600">{studentName}</span> has completed the <span className="font-bold text-red-600">"{courseName}"</span> project and passed all assessments.
                    </div>

                    {/* Tech Stack */}
                    <div className="flex justify-center gap-3 mb-12">
                        {['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Stripe'].map((tech) => (
                            <span key={tech} className="px-4 py-1 bg-[#1e3a8a] text-white rounded-full text-[10px] font-bold">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer Section - Forced Visibility */}
                <div className="px-20 pb-16 flex justify-between items-end relative z-30 w-full">
                    <div className="text-center">
                        <div className="w-64 border-b-2 border-gray-300 pb-2 mb-2 relative flex justify-center items-end h-16">
                            <span className={`${dancingScript.className} text-4xl !text-[#1e3a8a] -rotate-6 absolute bottom-4 font-bold`}>
                                Robin Pandey
                            </span>
                        </div>
                        <p className="font-serif text-xl !text-[#1e3a8a]">Robin Pandey</p>
                        <p className="text-[10px] uppercase tracking-widest !text-gray-500">Chief Executive Officer</p>
                    </div>

                    <div className="text-center">
                        <div className="w-64 border-b-2 border-gray-300 pb-2 mb-2 flex justify-center items-end h-16">
                            <span className="text-xl font-bold !text-[#1e3a8a]">{date}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest !text-gray-500">DATE</p>
                    </div>
                </div>

                <div className="absolute bottom-4 right-8 text-[8px] !text-gray-400">
                    Certificate No: {certificateId} | Verify at apollotech.us/verify
                </div>
            </div>
        </div>
    );
}

export default function CertificatePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading Certificate...</div>}>
            <CertificateContent />
        </Suspense>
    );
}