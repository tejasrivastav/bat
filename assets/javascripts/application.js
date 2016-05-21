"use strict";

var $        = require("jquery"),
    homePage = require("./pages/home").DOM;

window.jQuery = $;

$(function () {
  require("bootstrap");
  homePage("main-container", {
    labelOn : "DataKind",
    labelOff: "CBGA"
  });
});
