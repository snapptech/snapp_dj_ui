/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#582DD1",
        black: "#040405",
        dark: "#1E1E1E",
        input: "#19192F",
        stroke: "#9E9E9F",
        gray: "#D9D9D9",
        error: "#FF4D4D",
      },
      height: { 18: "4.5rem" },
      width: { 18: "4.5rem" },
    },
  },
  plugins: [],
};
