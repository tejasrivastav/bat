"use strict";

var $        = require("jquery"),
    homePage = require("./components/pages/home").DOM;

window.jQuery = $;

$(function () {
  require("bootstrap");
  homePage("main-container", {
    labelOn : "DataKind",
    labelOff: "CBGA"
  });
});
