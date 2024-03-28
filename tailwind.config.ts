import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          "10": "hsla(172, 41%, 93%, 1)",
          "20": "hsla(172, 41%, 86%, 1)",
          "30": "hsla(172, 41%, 79%, 1)",
          "40": "hsla(172, 41%, 72%, 1)",
          "50": "hsla(172, 41%, 65%, 1)",
          "60": "hsla(172, 41%, 58%, 1)",
          "70": "hsla(172, 41%, 51%, 1)",
          "100": "hsla(169, 100%, 29%, 1)",
        },
        dark: "hsla(0, 0%, 18%, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "0",
          lg: "24px",
          xl: "24px",
          "2xl": "24px",
        },
        screens: {
          sm: "540px",
          md: "720px",
          lg: "1200px",
          xl: "1200px",
          "2xl": "1200px",
        },
      },
      screens: {
        xs: "425px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
