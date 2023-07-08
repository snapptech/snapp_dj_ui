/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#582DD1",
        dark: "#1E1E1E",
        input: "#19192F",
        stroke: "#19192F",
        error: "FF4D4D",
      },
    },
  },
  plugins: [],
};
