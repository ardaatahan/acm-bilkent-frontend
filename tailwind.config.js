module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "blue-500": "#1992CF",
        "blue-600": "#195FAA",
      },
    },
  },
  variants: {},
  plugins: [],
};
