import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1F3D2B", deep: "#152A1E", soft: "#2F5940" },
        sage:   { DEFAULT: "#8AA07C", pale: "#DCE4D5" },
        clay:   { DEFAULT: "#8A5A3B", deep: "#6E462C", pale: "#EFE2D6" },
        cream:  { DEFAULT: "#FBF8F3", warm: "#F3EDE3" },
        char:   { DEFAULT: "#23211E", soft: "#5C574F" },
        stone:  "#DED7CB",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "Georgia", "serif"],
        sans: ["var(--font-karla)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
