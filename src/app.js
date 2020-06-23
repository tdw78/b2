const express = require("express");
const app = express();
const routeConfig = require("./config/route-config");
const mainConfig = require("./config/main-config");

routeConfig.init(app);
// mainConfig.init(app, express)

module.exports = app;