import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` bg-deep-space min-h-screen text-white`}>
        <nav className="fixed top-0 w-full z-50 glass-card px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter text-cyber-blue">PROMPT CRAFT PRO</h1>
          <div className="space-x-6 text-sm">
            <a href="/login" className="hover:text-cyber-blue transition">Login</a>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}