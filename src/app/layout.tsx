import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={{inter.className} bg-deep-space min-h-screen text-white}>
        <nav className="fixed top-0 w-full z-50 glass-card px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter text-cyber-blue">PROMPT CRAFT PRO</h1>
          <div className="space-x-6 text-sm">
            <a href="/courses" className="hover:text-cyber-blue transition">Courses</a>
            <a href="/dashboard" className="hover:text-cyber-blue transition">Dashboard</a>
            <button className="bg-cyber-blue px-4 py-2 rounded-full btn-glow">Get Started</button>
          </div>
        </nav>
        <main className="pt-24 px-6">{children}</main>
      </body>
    </html>
  )
}
