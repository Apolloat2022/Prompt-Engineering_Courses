'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Great_Vibes, Dancing_Script } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

function CertificateContent() {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const [date, setDate] = useState('');

    const courseName = searchParams.get('course') || 'Prompt Engineering Level 1';
    const certificateId = searchParams.get('id') || "AP-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }));
    }, []);

    const handlePrint = () => window.print();
    const studentName = session?.user?.name || "Apollo Technologies US";

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 print:p-0 print:bg-white">
            {/* Nav - Hidden on Print */}
            <nav className="w-full max-w-[1000px] mb-6 flex justify-between items-center print:hidden">
                <Link href="/dashboard" className="text-gray-600 hover:text-black transition-colors">← Back</Link>
                <button onClick={handlePrint} className="px-6 py-2 bg-[#1e3a8a] text-white font-bold rounded shadow-lg">
                    🖨️ Download PDF
                </button>
            </nav>

            {/* Certificate Paper */}
            <div className="relative w-full max-w-[1000px] aspect-[1.414/1] bg-white !text-black shadow-2xl flex flex-col print:shadow-none print:w-full border-[12px] border-white outline outline-1 outline-gray-200">

                {/* Top Right Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[140px] border-r-[140px] border-t-transparent border-r-[#1e3a8a] z-10"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-[#ca8a04] z-20"></div>

                {/* Bottom Left Corner */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[140px] border-l-[140px] border-b-transparent border-l-[#1e3a8a] z-10"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-[#ca8a04] z-20"></div>

                {/* Header Section */}
                <div className="pt-12 px-16 flex justify-between items-start relative z-30">
                    <img src="/logo.png" alt="Apollo" className="w-40 object-contain" />
                    <div className="bg-[#1e3a8a] text-white px-6 py-4 rounded shadow-md text-center min-w-[200px]">
                        <h2 className="text-xl font-bold tracking-tighter">BUILDFOLIO</h2>
                        <p className="text-[9px] uppercase tracking-widest opacity-80">Certificate Platform</p>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-[85%] h-[1px] bg-gray-300 mx-auto mt-10"></div>

                {/* Main Content */}
                <div className="text-center flex-1 flex flex-col items-center px-20 relative z-30 justify-center">
                    <h1 className="!text-[#1e3a8a] text-6xl font-serif font-bold tracking-widest mb-2">CERTIFICATE</h1>
                    <p className="!text-gray-500 uppercase tracking-[0.3em] text-xs mb-12">OF {courseName.toUpperCase()}</p>

                    <p className="!text-gray-400 text-sm italic mb-4">This Certificate Is Proudly Presented To</p>

                    <div className={`${greatVibes.className} text-7xl !text-[#1e3a8a] mb-10`}>
                        {studentName}
                    </div>

                    <div className="max-w-2xl text-sm leading-relaxed !text-gray-600 mb-8">
                        We give this certificate because <span className="font-bold !text-red-700">{studentName}</span> has completed the
                        <span className="font-bold"> "{courseName}" </span> project and passed all assessments,
                        demonstrating proficiency in prompt engineering, LLM strategy, and software engineering best practices.
                    </div>

                    {/* Verified Skills Badges */}
                    <div className="flex gap-4 flex-wrap justify-center mb-10">
                        {['Prompt Engineering', 'Large Language Models', 'Chain-of-Thought', 'AI Ethics'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] uppercase tracking-wider text-blue-800 font-semibold shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer Section */}
                <div className="px-20 pb-16 flex justify-between items-end relative z-30">
                    {/* CEO Signature */}
                    <div className="text-center w-64">
                        <div className="border-b border-black mb-2 relative h-12 flex items-center justify-center">
                            <span className={`${dancingScript.className} text-4xl !text-[#1e3a8a] -rotate-3 absolute bottom-1 font-bold`}>
                                Robin Pandey
                            </span>
                        </div>
                        <p className="font-serif text-lg !text-[#1e3a8a] font-bold">Robin Pandey</p>
                        <p className="text-[10px] uppercase tracking-widest !text-gray-500">Chief Executive Officer</p>
                    </div>

                    {/* Date */}
                    <div className="text-center w-64">
                        <div className="border-b border-black mb-2 h-12 flex items-end justify-center">
                            <span className="text-xl font-bold !text-[#1e3a8a] pb-1">{date}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest !text-gray-500">DATE</p>
                    </div>
                </div>

                {/* Bottom Verification Text */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-[9px] !text-gray-400">
                    Certificate No: {certificateId} | Verify at apollotech.us/verify
                </div>
            </div>
        </div>
    );
}

export default function CertificatePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center !text-white">Loading...</div>}>
            <CertificateContent />
        </Suspense>
    );
}