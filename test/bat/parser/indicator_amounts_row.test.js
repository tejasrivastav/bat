"use strict";

var should = require("should");

var statesHeaderParser        = require("../../../lib/bat").parser.stateHeaderParser,
    yearsHeaderParser         = require("../../../lib/bat").parser.yearsHeaderParser,
    indicatorAmountsRowParser = require("../../../lib/bat").parser.indicatorAmountsRowParser;

describe("BAT", function () {
  describe("parser", function () {
    describe("indicatorAmountsRowParser", function () {
      it("should be able to parse indicators and allocate amount", function () {
        var statesHeader             = `,States,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,
                                        Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Bihar`
              .replace(/\s+/g, " "),
            yearsHeader              = `Indicators,Unit,2012-13 Actuals,2013-14 BE,2013-14 RE,
                                        2013-14 Actuals,2014-15 BE,2014-15 RE,2015-16 BE,2012-13 Actuals,`
              .replace(/\s+/g, " "),
            indicatorAmountsRow      = `Total Expenditure from State Budget,INR (in Crores),79921,91947,
                                        92234,85762,117041,118518,131199,69206.56`
              .replace(/\s+/g, " "),
            expectedIndicatorAmounts = [{
              name           : "Madhya Pradesh",
              slug           : "madhya-pradesh",
              subColumnsCount: 7,
              subColumns     : [{
                allocations: [{
                  type: "Actuals"
                }],
                years      : {
                  to  : "2013",
                  from: "2012"
                }
              }, {
                years      : {
                  to  : "2014",
                  from: "2013"
                },
                allocations: [{
                  type: "BE"
                }, {
                  type: "RE"
                }, {
                  type: "Actuals"
                }]
              }, {
                years      : {
                  from: "2014",
                  to  : "2015"
                },
                allocations: [{
                  type: "BE"
                }, {
                  type: "RE"
                }]
              }, {
                years      : {
                  from: "2015",
                  to  : "2016"
                },
                allocations: [{
                  type: "BE"
                }]
              }],
              indicator      : {
                budgets: [{
                  years      : {
                    from: "2012",
                    to  : "2013"
                  },
                  allocations: [{
                    amount: "79921",
                    type  : "Actuals"
                  }]
                }, {
                  years      : {
                    from: "2013",
                    to  : "2014"
                  },
                  allocations: [{
                    amount: "91947",
                    type  : "BE"
                  }, {
                    type  : "RE",
                    amount: "92234"
                  }, {
                    type  : "Actuals",
                    amount: "85762"
                  }]
                }, {
                  years      : {
                    to  : "2015",
                    from: "2014"
                  },
                  allocations: [{
                    amount: "117041",
                    type  : "BE"
                  }, {
                    amount: "118518",
                    type  : "RE"
                  }]
                }, {
                  years      : {
                    from: "2015",
                    to  : "2016"
                  },
                  allocations: [{
                    amount: "131199",
                    type  : "BE"
                  }]
                }],
                unit   : "INR (in Crores)",
                name   : "Total Expenditure from State Budget",
                slug   : "total-expenditure-from-state-budget"
              }
            }, {
              name           : "Bihar",
              slug           : "bihar",
              subColumnsCount: 1,
              subColumns     : [{
                allocations: [{
                  type: "Actuals"
                }],
                years      : {
                  from: "2012",
                  to  : "2013"
                }
              }],
              indicator      : {
                slug   : "total-expenditure-from-state-budget",
                name   : "Total Expenditure from State Budget",
                unit   : "INR (in Crores)",
                budgets: [{
                  years      : {
                    from: "2012",
                    to  : "2013"
                  },
                  allocations: [{
                    type  : "Actuals",
                    amount: "69206.56"
                  }]
                }]
              }
            }],
            parsedStates             = statesHeaderParser.parse(statesHeader),
            parsedYears              = yearsHeaderParser.parse(parsedStates, yearsHeader),
            parsedIndicatorAmounts   = indicatorAmountsRowParser.parse(parsedYears, indicatorAmountsRow);
        should.exist(parsedIndicatorAmounts);
        expectedIndicatorAmounts.should.be.deepEqual(parsedIndicatorAmounts);
      });
    });
  });
});
