/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "luxury", 
      {
        mytheme: {
          "primary": "#4CAF50",
          "secondary": "#FFC107",
          "accent": "#FF5722",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#2196F3",
          "success": "#8BC34A",
          "warning": "#FF9800",
          "error": "#F44336",
        },
      },
    ],
  },
};