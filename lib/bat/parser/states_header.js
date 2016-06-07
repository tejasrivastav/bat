"use strict";

var _ = require("lodash");

var statesHeaderParser = {
  parse: function (statesHeader) {
    return _.chain(statesHeader.split(","))
      .map(_.trim)
      .drop(2)
      .filter(function (state) {
        return !_.isEmpty(state);
      })
      .groupBy()
      .map(function (states, state) {
        return {
          name           : state,
          slug           : _.kebabCase(state),
          subColumnsCount: _.size(states)
        };
      })
      .valueOf();
  }
};

module.exports = statesHeaderParser;
