import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

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
                <a href="/" className="flex items-center gap-6 group">
                  <div className="relative h-28 w-28 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src="/logo.png"
                      alt="Apollo Technologies"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm tracking-[0.2em] text-gray-500 font-medium uppercase">
                      Apollo Technologies
                    </span>
                    <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                      Prompt Engineering
                    </span>
                  </div>
                </a>

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