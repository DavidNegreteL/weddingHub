import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#__next",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        cormorant: ['"Cormorant"'],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".75em",
      },
      aspectRatio: {
        "2/1": "2 / 1",
      },
      borderRadius: {
        sm: "24px",
        md: "32px",
        lg: "80px",
      },
      colors: {
        "primary-1": "#C3937C",
        "secondary-1": "#EAD9C9",
        white: "#FFF",
        text: "#787878",
      },
      spacing: {
        xs: "4px",
        s: "10px",
        m: "20px",
        l: "40px",
        xl: "80px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
