"use strict";

var _ = require("lodash");

var statesHeaderParser        = require("./bat/parser/states_header"),
    yearsHeaderParser         = require("./bat/parser/years_header"),
    indicatorAmountsRowParser = require("./bat/parser/indicator_amounts_row");

/* istanbul ignore next */
var BAT = {
  parser            : {
    stateHeaderParser        : statesHeaderParser,
    yearsHeaderParser        : yearsHeaderParser,
    indicatorAmountsRowParser: indicatorAmountsRowParser
  },
  postParseOperation: function (parsedRows) {
    var states = _.chain(parsedRows)
      .first()
      .map(function (parsedRow) {
        return _.chain(parsedRow)
          .omit(["indicator"])
          .merge({indicators: []})
          .valueOf();
      })
      .valueOf();

    _.each(parsedRows, function (parsedRow) {
      return _.each(parsedRow, function (cell) {
        var stateIndex = _.findIndex(states, function (state) {
          return _.eq(_.get(cell, "slug"), _.get(state, "slug"));
        });

        _.get(states, "[" + stateIndex + "].indicators").push(_.get(cell, "indicator"));
      });
    });

    return states;
  }
};

module.exports = BAT;
