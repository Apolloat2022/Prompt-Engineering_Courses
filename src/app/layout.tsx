import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-space min-h-screen text-white antialiased`}>
        <Providers>
          {/* Compact Navigation */}
          <nav className="fixed top-0 w-full z-50 bg-deep-space/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo - Compact */}
                <a href="/" className="flex items-center gap-3 group">
                  <div className="relative w-9 h-9 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Apollo Technologies"
                      width={36}
                      height={36}
                      className="object-contain drop-shadow-[0_0_6px_rgba(6,182,212,0.4)] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase font-medium">
                      Apollo Technologies US
                    </span>
                    <span className="text-sm font-bold tracking-tight">
                      PROMPT <span className="text-cyan-400">ENGINEERING</span>
                    </span>
                  </div>
                </a>

                {/* Navigation Links - Compact */}
                <div className="hidden md:flex items-center gap-6">
                  <a 
                    href="/" 
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a 
                    href="/dashboard" 
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Dashboard
                  </a>
                  <a 
                    href="/login" 
                    className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}