import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-white antialiased`}>
        <Providers>
          <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-300 bg-deep-space/60 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="w-12 h-12 relative flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Apollo Technologies"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-semibold">Apollo Technologies US</span>
                <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                  PROMPT <span className="text-cyber-blue">ENGINEERING</span>
                </h1>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="/" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">Home</a>
              <a href="/dashboard" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">Dashboard</a>
              <a
                href="/login"
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyber-blue hover:text-deep-space hover:border-cyber-blue transition-all duration-300 font-bold tracking-wide"
              >
                Login
              </a>
            </div>
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}