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
        }
      },
    },
  },

  plugins: [],
};

module.exports = config;
