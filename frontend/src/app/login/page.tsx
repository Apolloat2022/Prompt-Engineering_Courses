'use client';
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="glass-card p-10 w-full max-w-md border border-white/10 text-center">
        <h1 className="text-3xl font-bold mb-2">Access Portal</h1>
        <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest">PromptCraft Pro</p>
        <button 
          onClick={() => signIn()}
          className="w-full py-4 rounded-lg bg-cyber-blue font-bold btn-glow hover:scale-105 transition"
        >
          Initialize Session
        </button>
      </div>
    </div>
  );
}
