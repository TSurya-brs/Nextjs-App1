import type { Config } from "tailwindcss";
//Nextui->Heroui
import {heroui} from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      // Nextui->Heroui
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  //Nextui->Heroui
  darkMode: "class",
  plugins: [heroui({
              themes: {
                light: {colors:{background:"#FFFFFF"}},
                dark: {},
              },
            }),
          ],

} satisfies Config;
