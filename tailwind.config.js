/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', "sans-serif"],
      },
      dropShadow: {
        custom: "0 15px 15px rgba(255, 126, 27, 0.25)",
      },
    },
  },
  plugins: [],
};
