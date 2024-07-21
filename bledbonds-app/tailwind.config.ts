import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // paleta generada por https://uicolors.app/create con la base del #8afffd
      colors: {
        "palette-1": "#effefe",
        "palette-2": "#c7fffe",
        "palette-3": "#8afffd",
        "palette-4": "#50f5f8",
        "palette-5": "#1ddae4",
        "palette-6": "#04bbc8",
        "palette-7": "#0093a1",
        "palette-8": "#057480",
        "palette-9": "#0a5b65",
        "palette-10": "#0d4c54",
        "palette-11": "#002b33",

        "palette-50": "#effefe",
        "palette-100": "#c7fffe",
        "palette-200": "#8afffd",
        "palette-300": "#50f5f8",
        "palette-400": "#1ddae4",
        "palette-500": "#04bbc8",
        "palette-600": "#0093a1",
        "palette-700": "#057480",
        "palette-800": "#0a5b65",
        "palette-900": "#0d4c54",
        "palette-950": "#002b33",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
