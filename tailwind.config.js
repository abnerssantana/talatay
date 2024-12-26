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
        primary: "#6C3D29", // Marrom principal
        background: {
          light: "#F5F5F5",
          dark: "#2D2D2D",
        },
        surface: {
          light: "#BB7F56", // Bege médio
          dark: "#4A2B1B",  // Marrom escuro
        },
        border: {
          light: "#C99A5B", // Dourado claro
          dark: "#3A2318",  // Marrom escuro
        },
        accent: {
          primary: "#6C3D29",   // Marrom principal
          secondary: "#BB7F56",  // Bege médio
          tertiary: "#C99A5B",   // Dourado
        }
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