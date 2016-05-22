"use strict";

var IndicatorsSelector = require("../components/indicators_selector");

module.exports = function (root) {
  return {
    path       : "/",
    component  : root,
    childRoutes: [{
      path     : "indicator/:indicatorSlug",
      component: IndicatorsSelector
    }]
  };
};
