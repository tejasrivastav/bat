"use strict";

var statesHeaderParser        = require("./bat/parser/states_header"),
    yearsHeaderParser         = require("./bat/parser/years_header"),
    indicatorAmountsRowParser = require("./bat/parser/indicator_amounts_row");

var BAT = {
  parser: {
    stateHeaderParser        : statesHeaderParser,
    yearsHeaderParser        : yearsHeaderParser,
    indicatorAmountsRowParser: indicatorAmountsRowParser
  },
  postParseOperation: function (parsedRows) {
    return parsedRows;
  }
};

module.exports = BAT;
