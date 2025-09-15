// tailwind.config.js
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["var(--font-yekan)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
