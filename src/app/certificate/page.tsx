'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function CertificateContent() {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [date, setDate] = useState('');

    const courseName = searchParams.get('course') || 'Prompt Engineering Level 1';
    const certificateId = searchParams.get('id') || Math.random().toString(36).substr(2, 9).toUpperCase();

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, []);

    const handlePrint = () => {
        window.print();
    };

    // Fallback for non-logged in users (though they should be logged in)
    const studentName = session?.user?.name || "Valued Student";

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 print:p-0 print:bg-white">
            {/* Navigation (Hidden on Print) */}
            <nav className="w-full max-w-7xl mb-8 flex justify-between items-center print:hidden">
                <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <span>← Back to Dashboard</span>
                </Link>
                <button
                    onClick={handlePrint}
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
                >
                    <span>🖨️ Download / Print PDF</span>
                </button>
            </nav>

            {/* Certificate Container */}
            <div className="relative w-full max-w-[1100px] aspect-[1.4/1] bg-white text-black shadow-2xl overflow-hidden print:shadow-none print:w-full print:h-full print:absolute print:inset-0 print:m-0">

                {/* Decorative Border */}
                <div className="absolute inset-4 border-[3px] border-[#0a0e27] pointer-events-none z-10"></div>
                <div className="absolute inset-6 border-[1px] border-cyan-500/30 pointer-events-none z-10"></div>

                {/* Corner Ornaments */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-[3px] border-l-[3px] border-[#0a0e27] z-20"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-t-[3px] border-r-[3px] border-[#0a0e27] z-20"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-[3px] border-l-[3px] border-[#0a0e27] z-20"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-[3px] border-r-[3px] border-[#0a0e27] z-20"></div>

                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <img src="/logo.png" alt="Watermark" className="w-[600px] h-[600px] object-contain grayscale" />
                </div>

                {/* Content */}
                <div className="relative z-30 h-full flex flex-col items-center justify-between py-20 px-16 text-center">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-16 w-16 mb-2">
                            <img src="/logo.png" alt="Apollo Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-xl uppercase tracking-[0.4em] text-[#0a0e27] font-semibold">Apollo Technologies US</h2>
                    </div>

                    {/* Title */}
                    <div className="mt-8">
                        <h1 className="text-5xl md:text-6xl font-serif text-[#0a0e27] tracking-wide mb-2">Certificate of Completion</h1>
                        <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4"></div>
                    </div>

                    {/* Recipient */}
                    <div className="w-full">
                        <p className="text-gray-500 uppercase tracking-[0.2em] mb-6 text-sm">is hereby awarded to</p>
                        <div className="text-4xl md:text-5xl font-bold text-[#0a0e27] font-serif italic border-b-2 border-gray-200 pb-4 mx-auto max-w-3xl">
                            {studentName}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="max-w-2xl">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            For successfully completing all requirements and demonstrating proficiency in the curriculum of
                        </p>
                        <h3 className="text-3xl font-bold text-[#0a0e27] mt-2">{courseName}</h3>
                    </div>

                    {/* Footer / Signatures */}
                    <div className="flex justify-between items-end w-full px-12 mt-12">
                        <div className="text-left">
                            <div className="w-48 border-b border-gray-400 pb-1 mb-2 text-lg font-medium text-[#0a0e27]">
                                {date}
                            </div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Date Issued</p>
                        </div>

                        <div className="text-right">
                            <div className="w-64 border-b border-gray-400 pb-2 mb-2 relative">
                                <img
                                    src="/signature_placeholder.png"
                                    alt="Robin Pandey"
                                    className="absolute bottom-2 right-0 h-16 w-auto opacity-0"
                                    onError={(e) => {
                                        // Fallback to text signature if image missing
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <span className="font-handwriting text-3xl text-[#0a0e27] block -rotate-3" style={{ fontFamily: 'Brush Script MT, cursive' }}>Robin Pandey</span>
                            </div>
                            <p className="text-sm font-bold text-[#0a0e27] uppercase tracking-wider">Robin Pandey, CEO</p>
                            <p className="text-[10px] text-cyan-600 uppercase tracking-widest">Apollo Technologies US</p>
                        </div>
                    </div>

                    {/* ID Badge */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-mono">
                        Certificate ID: {certificateId} • Verify at apollotech.us/verify
                    </div>

                </div>
            </div>

            <div className="mt-8 text-gray-500 text-sm print:hidden">
                © {new Date().getFullYear()} Apollo Technologies US. All rights reserved.
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
