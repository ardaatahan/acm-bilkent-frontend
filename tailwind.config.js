// prettier-ignore
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
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "full": "100%",
      "screen": "68vh"
    },
  },
  variants: {},
  plugins: [],
};
