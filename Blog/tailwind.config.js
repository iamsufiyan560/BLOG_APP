/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5DC",
        indigo: "#4b0082 ",
        Lightgray: "#f5f5f5",
        Darkgray: "#333333", // Define a custom beige color
      },
    },
  },
  plugins: [],
};
