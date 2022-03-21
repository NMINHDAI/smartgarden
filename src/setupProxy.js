const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/api/*", { target: "https://danganhapi.herokuapp.com" }));
};
//"proxy": "https://danganhapi.herokuapp.com/api"