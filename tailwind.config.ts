import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        Montserrat: ["montserrat", "sans-serif"],
      },
      fontSize: {
        montserrat_regular_14: ["1.4rem", { lineHeight: "2.2rem", fontWeight: "400" }],
        montserrat_bold_14: ["1.4rem", { lineHeight: "2.2rem", fontWeight: "700" }],
        montserrat_regular_16: ["1.6rem", { lineHeight: "2.56rem", fontWeight: "400" }],
        montserrat_bold_16: ["1.6rem", { lineHeight: "2.56rem", fontWeight: "700" }],
        montserrat_bold_16_1: ["1.6rem", { lineHeight: "1.9rem", fontWeight: "700" }],
        montserrat_regular_18: ["1.8rem", { lineHeight: "2.8rem", fontWeight: "400" }],
        montserrat_bold_18: ["1.8rem", { lineHeight: "2.88rem", fontWeight: "700" }],
        montserrat_regular_20: ["2rem", { lineHeight: "3.2rem", fontWeight: "400" }],
        montserrat_bold_20: ["2rem", { lineHeight: "3.4rem", fontWeight: "700" }],
        montserrat_bold_24: ["2.4rem", { lineHeight: "2.92rem", fontWeight: "700" }],
        montserrat_bold_28: ["2.8rem", { lineHeight: "3.4rem", fontWeight: "700" }],
        montserrat_bold_32: ["3.2rem", { lineHeight: "3.9rem", fontWeight: "700" }],
        montserrat_bold_40: ["4.0rem", { lineHeight: "3.9rem", fontWeight: "700" }],
        montserrat_bold_46: ["4.6rem", { lineHeight: "5.6rem", fontWeight: "700" }],
        montserrat_bold_48: ["4.8rem", { lineHeight: "5.8rem", fontWeight: "700" }],
        montserrat_bold_52: ["5.2rem", { lineHeight: "6.33rem", fontWeight: "700" }],
        montserrat_bold_64: ["6.4rem", { lineHeight: "7.8rem", fontWeight: "700" }],
      },
      spacing: {
        'custom-40': '40px',  
        'custom-16': '16px', 
        'custom-60': '60px',
      },
      colors: {
          primary: "#995B1A",
          sub_text: "#060808",
          background_color: '#E6F3F7',
          white: "#f3fdff",
          gray: "#E6F3F7",
          blue: "#9FCADB",
          dark_brown: "#4c2a07"
      },
      boxShadow: {
          shadow_1: "0px 4px 22.6px 0px rgba(76, 94, 111, 0.07)",
          shadow_2: "-4px 7px 18.5px 0px rgba(76, 94, 111, 0.15)",
      },
      animation: {
        'slide-right-left': 'slide-right-left 5s linear infinite',
      },
      keyframes: {
        'slide-right-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundPosition: {
          "x-1.9rem": "1.9rem 0",
      },
    },
  },
  plugins: [],
};
export default config;
