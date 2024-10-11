import animate from "tailwindcss-animate";

export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["dark"],
  plugins: [animate],
  theme: {
    container: {
      center: true,
      paddingTop: "1rem",
      paddingBottom: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        shine: "shine 2s linear infinite",
      },
      keyframes: {
        shine: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
};
