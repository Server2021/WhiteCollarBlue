const proxy = require("http-proxy-middleware");
const target = process.env.REACT_APP_PROXY;
const useProxy = process.env.REACT_APP_USE_PROXY == "true";

module.exports = function(app) {
  if (useProxy) {
    app.use(proxy("/api", {target: target, secure: false, changeOrigin: true}));
    app.use(proxy("/metadata", {target: target, secure: false, changeOrigin: true}));
    app.use(proxy("/assets", {target: target, secure: false, changeOrigin: true}));
    app.use(
      proxy("/admin/view", {target: target, secure: false, changeOrigin: true})
    );
  }
};
