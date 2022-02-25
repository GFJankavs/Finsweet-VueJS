module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global.scss";`,
      },
    },
  },

  pages: {
    index: {
      // entry for the page
      entry: "src/main.ts",
      title: "Finsweet VueJS",
    },
  },
};
