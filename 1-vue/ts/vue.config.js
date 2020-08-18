module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      app.get("/api/list", (req, res) => {
        res.json([
          { id: 1, name: "类型注解", version: "2.0" },
          { id: 2, name: "编译型语言", version: "1.0" },
        ]);
      });
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
  },
};
