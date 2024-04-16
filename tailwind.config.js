/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["text-white", "bg-primary", "text-[#343C6A]"],
  theme: {
    extend: {
      colors: ["#343C6A"],
    },
    light: {
      primary: "#1814F3",
      secondary: "#ff00ff",
      accent: "#00ffff",
      neutral: "#ff00ff",
      "base-100": "#ffffff",
      info: "#0000ff",
      success: "#00ff00",
      warning: "#00ff00",
      error: "#ff0000",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "8rem",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
