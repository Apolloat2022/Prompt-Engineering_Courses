import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Logo } from './components/Logo';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apollo Technologies - Prompt Engineering Academy',
  description: 'Master the art of communicating with AI. Professional training for developers, product managers, and decision makers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0e27] min-h-screen text-white antialiased`}>
        <Providers>
          {/* Professional Navigation Bar */}
          <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-white/[0.08]">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="flex items-center justify-between h-32">
                {/* Logo & Brand */}
                <Logo />

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                  <a href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Dashboard
                  </a>
                  <a
                    href="/login"
                    className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <main className="pt-36">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}