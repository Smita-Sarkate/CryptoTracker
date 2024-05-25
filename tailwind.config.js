/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //for tailwind changes in Material ui
  important:"#root",
  
  theme: {
    extend: {
      colors: {
        "slate":"var(--slate)",
        "white":"var(--white)",
        "black":"var(--black)",
        "blue":"var(--blue)",
        "gray":"var(--gray)",
        "darkgray":"var(--darkgray)",
        "green":"var(--green)",
        "red":"var(--red)"
      }
    },
  },
  plugins: [],
}

