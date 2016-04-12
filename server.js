"use strict";

var express = require("express"),
    _       = require("lodash");

var PORT = process.env.PORT || 9001;

var server = express();

server.use(express.static("public"));
server.use("/coverage", express.static("coverage/lcov-report/"));

server.listen(PORT, function (error) {
  global.console.log("Running Server on PORT: " + PORT);
  if (!_.isEmpty(error)) {
    global.console.error(error);
  }
});
