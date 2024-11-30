/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        main: "#2196f3",
        alt: "#1787e0",
      },
      transitionDuration:{
        // '300':'0.3s'
      },
      padding: {
        esraa: "32rem",
      },
    },
  },
  plugins: [],
};
