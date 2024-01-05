import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3050",
        secondary: "#F4F5FB",
        outline: "#6E6D7A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
