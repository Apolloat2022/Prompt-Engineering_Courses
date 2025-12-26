import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-space min-h-screen text-white`}>
        <Providers>
          <nav className="fixed top-0 w-full z-50 glass-card px-8 py-4 flex justify-between items-center bg-deep-space/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-10 h-10 relative">
                <img src="/logo.png" alt="Apollo Technologies" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">Apollo Technologies US</span>
                <h1 className="text-xl font-bold tracking-tighter text-white">PROMPT ENGINEERING COURSES</h1>
              </div>
            </div>

            <div className="space-x-8 text-sm font-medium">
              <a href="/" className="hover:text-cyber-blue transition">Home</a>
              <a href="/dashboard" className="hover:text-cyber-blue transition">Dashboard</a>
              <a href="/login" className="px-4 py-2 bg-cyber-blue/10 text-cyber-blue rounded hover:bg-cyber-blue/20 transition">Login</a>
            </div>
          </nav>
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}