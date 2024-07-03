import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const primaryColor = colors.amber;
const secondaryColor = colors.sky;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        text: primaryColor[950],
      },
      boxShadow: {
        straight: `8px 8px 0px currentColor`,
      },
    },
  },
  plugins: [],
};
