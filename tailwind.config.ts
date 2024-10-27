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
        'custom-gradient': 'linear-gradient(180deg, rgba(41, 55, 115, 0.7) 5%, rgba(1, 7, 29, 0.8) 100%)',
        
      },      
      boxShadow: {
        'custom-shadow': '1px 5px 21.9px 3px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
