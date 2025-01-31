/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["OpenSans", "sans-serif"],
        serif: ["NType82", "serif"],
        mono: ["LetteraMonoLLCondLight", "monospace"],
      },
      fontWeight: {
				"extra-light": 50,
			},
    },
  },
  plugins: [],
};
