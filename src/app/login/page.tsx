'use client';
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="glass-card p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <button
          onClick={() => signIn()}
          className="w-full bg-cyber-blue text-white py-3 rounded hover:bg-opacity-80"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}