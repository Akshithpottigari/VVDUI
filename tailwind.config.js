/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "background-color": "#F9FAFB",
        "text-color": "#111827",
        primary: "#3B82F6",
        secondary: "#22D3EE",
        "border-color": "#E5E7EB",
        placeholder: "#A1A1AA",
      },
    },
  },
  plugins: [],
};
