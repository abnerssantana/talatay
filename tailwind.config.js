/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(14 165 233)",
        background: {
          light: "#ffffff",
          dark: "#09090b",
        },
        surface: {
          light: "#f7f7f8",
          dark: "#111113",
        },
        border: {
          light: "#e5e5e7",
          dark: "#1d1d20",
        },
      },
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
