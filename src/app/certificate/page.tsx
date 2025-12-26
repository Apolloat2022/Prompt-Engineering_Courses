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
            month: '2-digit',
            day: '2-digit'
        }));
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const studentName = session?.user?.name || "Apollo Technologies US";

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
            <div className="relative w-full max-w-[1000px] aspect-[1.414/1] bg-white text-black shadow-2xl overflow-hidden print:shadow-none print:w-full print:h-full print:absolute print:inset-0 print:m-0 flex flex-col">

                {/* Top Right Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-r-[150px] border-t-transparent border-r-[#1e3a8a] z-10"></div>
                <div className="absolute top-[20px] right-[20px] w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-[#ca8a04] z-20"></div>

                {/* Bottom Left Corner Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[150px] border-l-[150px] border-b-transparent border-l-[#1e3a8a] z-10"></div>
                <div className="absolute bottom-[20px] left-[20px] w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-[#ca8a04] z-20"></div>

                {/* --- Header Section --- */}
                <div className="pt-16 px-16 flex justify-between items-start relative z-30">
                    {/* Logo Left */}
                    <div className="w-48">
                        <img src="/logo.png" alt="Apollo Technologies" className="w-full object-contain" />
                    </div>

                    {/* Badge Right */}
                    <div className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg mr-16 shadow-lg">
                        <h2 className="text-xl font-bold tracking-widest font-serif">BUILDFOLIO</h2>
                        <p className="text-[10px] uppercase tracking-wider text-center text-blue-200">Certificate Platform</p>
                    </div>
                </div>

                {/* divider */}
                <div className="w-[85%] h-0.5 bg-[#1e3a8a] mx-auto mt-12 mb-12"></div>

                {/* --- Main Content --- */}
                <div className="text-center flex-1 flex flex-col items-center px-20">
                    <h1 className="text-[#1e3a8a] text-6xl font-serif font-bold tracking-wider mb-4">CERTIFICATE</h1>
                    <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-2">OF {courseName.toUpperCase()}</p>

                    <p className="text-gray-500 text-sm mt-8 mb-4">This Certificate Is Proudly Presented To</p>

                    {/* Name */}
                    <div className="font-cursive text-7xl text-[#1e3a8a] mb-8" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                        {studentName}
                    </div>

                    {/* Description */}
                    <div className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-8">
                        We give this certificate because <span className="font-bold text-red-600">{studentName}</span> has completed the <span className="font-bold text-red-600">"{courseName}"</span> project and passed all assessments, demonstrating proficiency in prompt engineering, LLM strategy, and AI communication best practices.
                    </div>

                    <p className="text-xs text-gray-400 italic mb-6">Certificate earned through Apollo Technologies US platform</p>

                    {/* Tech Stack Badges */}
                    <div className="flex justify-center gap-3 mb-12">
                        {['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Stripe'].map((tech) => (
                            <span key={tech} className="px-4 py-1 bg-[#1e3a8a] text-white rounded-full text-[10px] font-bold shadow-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- Footer --- */}
                <div className="px-20 pb-16 flex justify-between items-end relative z-30 w-full mb-4">

                    {/* Signature */}
                    <div className="text-center">
                        <div className="w-64 border-b-2 border-gray-600 pb-2 mb-2 relative flex justify-center items-end h-16">
                            {/* Signature Image or Text */}
                            <span className="font-cursive text-4xl text-[#1e3a8a] -rotate-6 absolute bottom-4" style={{ fontFamily: 'Brush Script MT, cursive' }}>Robin Pandey</span>
                        </div>
                        <p className="font-serif text-xl text-[#1e3a8a]">Robin Pandey</p>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">Chief Executive Officer</p>
                    </div>

                    {/* Date */}
                    <div className="text-center">
                        <div className="w-64 border-b-2 border-gray-600 pb-2 mb-2 flex justify-center items-end h-16">
                            <span className="text-xl font-bold text-[#1e3a8a]">{date}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">DATE</p>
                    </div>
                </div>

                {/* Verification Footer */}
                <div className="absolute bottom-4 right-8 text-[8px] text-gray-400">
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
