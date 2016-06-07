"use strict";

var should = require("should");

var statesHeaderParser = require("../../../lib/bat").parser.stateHeaderParser,
    yearsHeaderParser  = require("../../../lib/bat").parser.yearsHeaderParser;

describe("BAT", function () {
  describe("parser", function () {
    describe("yearsHeaderParser", function () {
      it("should be able to parse years header with their allocation types", function () {
        var statesHeader  = `,States,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,
                            Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Bihar`
              .replace(/\s+/g, " "),
            yearsHeader   = `Indicators,Unit,2012-13 Actuals,2013-14 BE,2013-14 RE,
                             2013-14 Actuals,2014-15 BE,2014-15 RE,2015-16 BE,2012-13 Actuals,`
              .replace(/\s+/g, " "),
            expectedYears = [{
              name           : "Madhya Pradesh",
              slug           : "madhya-pradesh",
              subColumnsCount: 7,
              subColumns     : [{
                years      : {
                  from: "2012",
                  to  : "2013"
                },
                allocations: [{
                  type: "Actuals"
                }]

              }, {
                years      : {
                  from: "2013",
                  to  : "2014"
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
              }]
            }, {
              name           : "Bihar",
              slug           : "bihar",
              subColumnsCount: 1,
              subColumns     : [{
                years      : {
                  from: "2012",
                  to  : "2013"
                },
                allocations: [{
                  type: "Actuals"
                }]
              }]
            }],
            parsedStates  = statesHeaderParser.parse(statesHeader),
            parsedYears   = yearsHeaderParser.parse(parsedStates, yearsHeader);
        should.exist(parsedYears);
        expectedYears.should.be.deepEqual(parsedYears);
      });
    });
  });
});
