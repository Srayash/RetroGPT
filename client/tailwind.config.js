/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'serif'],
        pressStart: ['"Press Start 2P"', 'system-ui']
      },
    },
  },
  plugins: [],
}

