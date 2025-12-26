'use client';

import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('./LoginButton'), {
  ssr: false,
  loading: () => <div className="h-12 w-full bg-gray-700 animate-pulse rounded-lg"></div>
});

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="glass-card p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Prompt Craft Pro</h2>
        <p className="text-gray-400 text-center mb-8">Sign in to access your courses</p>

        <LoginButton />

        <p className="text-xs text-gray-500 text-center mt-6">
          Secure authentication powered by Google OAuth
        </p>
      </div>
    </div>
  );
}