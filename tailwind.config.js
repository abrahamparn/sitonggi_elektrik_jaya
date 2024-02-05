/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black_stg: "#1E1E1E",
        yellow_stg: "#FB8C03",
      },
      screens: {
        sm: "375px",
        md: "768px",
        mdplus: "976px",
        lg: "1024px",
        xl: "1440px",
        xxl: "2560px",
      },
    },
  },
  plugins: [],
};
