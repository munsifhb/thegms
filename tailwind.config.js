/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
      sm: '200px',   // Small screens (mobile)
      md: '768px',   // Medium screens (tablet)
      lg: '1023px',  // Large screens (laptop)
      xl: '1280px',  // Extra large screens (desktop)
      '2xl': '1536px', // 2X large screens (big monitors)
    },
    extend: {},
  },
  plugins: [],
}

