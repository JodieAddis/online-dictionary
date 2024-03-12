/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Shark: "#2E3238", //dark grey
        Scorpion: "#575757", //grey
        SilverChalice: "#A3A3A3", //light grey
        Gallery: "#EBEBEB", //Cream
        White: "FFFFFF",
        ElectricViolet: "#7D2CF2",
        Crimson: "#DC1E1E",
        CodGray: "#0C0C0C",
      },
    },
  },
  plugins: [],
};
