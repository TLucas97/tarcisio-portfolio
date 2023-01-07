import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },

      postcss: true,
    }),
  ],
};

export default config;
