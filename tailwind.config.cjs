const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        dark: {
          10: "#333",
          20: "#424242",
        },
        light: {
          10: "#f5f5f5",
          20: "#e0e0e0",
        },
        success: {
          10: "#4caf50",
          20: "#388e3c",
        },
        blue: {
          10: "#2196f3",
          20: "#1976d2",
          30: "#0A2647",
        },
        yellow: {
          10: "#ffeb3b",
          20: "#fdd835",
        },
        purple: {
          10: "#9c27b0",
          20: "#7b1fa2",
        },
        red: {
          10: "#f44336",
          20: "#d32f2f",
        }
      },
    },
  },

  plugins: [],
};

module.exports = config;
