"use strict";

var _ = require("lodash");

var yearsHeaderParser = {
  parse: function (states, yearsAllocationHeaders) {
    var yearsAllocations = _.chain(yearsAllocationHeaders.split(","))
      .map(_.trim)
      .drop(2)
      .filter(function (yearsAllocationHeader) {
        return !_.isEmpty(yearsAllocationHeader);
      })
      .map(function (yearsAllocationHeader) {
        var yearsAllocationPair = yearsAllocationHeader.split(/\s+/),
            years               = _.chain(yearsAllocationPair)
              .first()
              .split(/-/)
              .valueOf(),
            allocation          = _.last(yearsAllocationPair);
        return {
          years     : {
            from: _.first(years),
            to  : _.first(years).substring(0, 2) + _.last(years)
          },
          allocation: {
            type: allocation
          }
        };
      })
      .valueOf();
    return _.chain(states)
      .map(function (state) {
        var subColumns = _.chain(yearsAllocations)
          .take(state.subColumnsCount)
          .groupBy(function (yearAllocations) {
            return JSON.stringify(yearAllocations.years);
          })
          .map(function (yearAllocations, years) {
            var allocations = _.chain(yearAllocations)
              .map(function (yearAllocation) {
                return yearAllocation.allocation;
              })
              .valueOf();
            return {
              years      : JSON.parse(years),
              allocations: allocations
            };
          })
          .valueOf();
        return _.merge({}, state, {
          subColumns: subColumns
        });
      })
      .valueOf();
  }
};

module.exports = yearsHeaderParser;
