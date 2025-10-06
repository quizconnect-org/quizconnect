/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#6a5acd',      // Duolingo purple
        secondary: '#58cc02',    // Duolingo green
        success: '#58cc02',
        error: '#ff4b4b',
        warning: '#ffc800',
      },
    },
  },
  plugins: [],
};

