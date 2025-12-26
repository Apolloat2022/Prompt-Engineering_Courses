'use client';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-b from-deep-space to-space-900">
      {children}
    </div>
  );
}