/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'grad1': "#f4dbf9",
        'grad2': "#d8dbfe",
        'btnclr': "#25689c",
        'inputbg': "#DADADA",
        'stat1': "#8c8b90",
        'stat2': "#E89922",
        'stat3': "#42A820",
        'stat4': "#373876",
        'stat5': "#f68871",
      },
    },
  },
  plugins: [],
};
