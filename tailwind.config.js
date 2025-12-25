/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#2563EB',
        'deep-space': '#0F172A',
        'quantum-purple': '#7C3AED',
      },
      backgroundImage: {
        'cinematic-gradient': 'radial-gradient(circle at top, #1E293B 0%, #0F172A 100%)',
      }
    },
  },
  plugins: [],
}
