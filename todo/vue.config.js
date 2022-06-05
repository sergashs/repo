module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/_vars.scss";
        @import "@/scss/_mixins.scss";
				`,
      },
    },
  },
  publicPath: '/repo/todotest/',
};
