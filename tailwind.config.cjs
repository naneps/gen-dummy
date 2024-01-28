/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9333ea",

          secondary: "#bae6fd",

          accent: "#009fff",

          neutral: "#0e3135",

          "base-100": "#27292e",

          info: "#2da2ff",

          success: "#6ee7b7",

          warning: "#ff6200",

          error: "#c01245",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
