const {
  override,
  addLessLoader,
  adjustStyleLoaders,
  addWebpackAlias,
  overrideDevServer,
} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A" },
        localIdentName: "[local]--[hash:base64:5]",
      },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
      xl: path.resolve(__dirname, "src/components/xl"),
      request: path.resolve(__dirname, "src/utils/request"),
      styles: path.resolve(__dirname, "src/styles"),
    })
  ),
  devServer: overrideDevServer((config) => {
    // 在这里可以对 dev-server 进行配置
    config.proxy = {
      "/api": {
        target: "http://localhost:3333",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    };
    return config;
  }),
};
