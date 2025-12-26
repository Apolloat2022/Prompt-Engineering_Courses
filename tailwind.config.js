/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d9ff', // Synchronized with globals.css
        'deep-space': '#050511', // Darker, more cinematic
        'neon-purple': '#b026ff',
      },
      backgroundImage: {
        'cinematic-gradient': 'radial-gradient(circle at top, #1E293B 0%, #0F172A 100%)',
      }
    },
  },
  plugins: [],
}

