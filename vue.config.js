const px2rem = require("postcss-px2rem");

module.exports = {
  assetsDir: "static-vue",
  devServer: {
    proxy: {
      "/api.php": {
        target: "https://topseamwatch.com/",
      },
      "/static": {
        target: "https://topseamwatch.com/",
      },
    },
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/vue-mall-app/" : "/",
};
