import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const [primaryColor, secondaryColor] = [colors.amber, colors.cyan];

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
        "straight-sm": `4px 4px 0px currentColor`,
      },
    },
  },
  plugins: [typography],
};
