/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nepal: {
          50: "#f3f8fb",
          100: "#e4eef5",
          200: "#d0e2ed",
          300: "#b0cfe0",
          400: "#83b1ce",
          500: "#6d9cc4",
          600: "#5a86b6",
          700: "#4f74a6",
          800: "#456088",
          900: "#3b506d",
          950: "#273344",
        },
      },
      fontFamily: {
        WorkSanslight: ["WorkSansLight", "Arial"],
        WorkSansregular: ["WorkSansRegular", "Arial"],
        WorkSansmedium: ["WorkSansMedium", "Arial"],
        WorkSansblod: ["WorkSansBlod", "Arial"],
      },
      boxShadow: {
        Custom: "10px 9px 53px -1px rgba(0,0,0,0.48)",
        nav: "10px 2px 28px -5px rgba(0,0,0,0.75)",
        user: "0px 10px 26px -9px rgba(0,0,0,0.75)",
      },
      gridTemplateColumns: {
        "3-auto": "auto auto auto",
      },
    },
    listStyleType: {
      circle: "circle",
    },
  },
  plugins: [],
};
