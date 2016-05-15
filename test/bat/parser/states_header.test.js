"use strict";

var should = require("should");

var statesHeaderParser = require("../../../lib/bat").parser.stateHeaderParser;

describe("BAT", function () {
  describe("parser", function () {
    describe("stateHeaderParser", function () {
      it("should be able to parse states header with their counts", function () {
        var statesHeader   = `,States,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,
                            Madhya Pradesh,Madhya Pradesh,Madhya Pradesh,Bihar,Bihar,Bihar,Bihar,
                            Bihar,Bihar,Bihar,UP,UP,UP,UP,UP,UP,UP,Chattisgarh,Chattisgarh,Chattisgarh,
                            Chattisgarh,Chattisgarh,Chattisgarh,Chattisgarh,Karnataka,Karnataka,Karnataka,
                            Karnataka,Karnataka,Karnataka,Karnataka,Kerala,Kerala,Kerala,Kerala,Kerala,Kerala,
                            Kerala,Punjab,Punjab,Punjab,Punjab,Punjab,Punjab,Punjab,Odisha,Odisha,Odisha,Odisha,
                            Odisha,Odisha,Odisha,Gujarat,Gujarat,Gujarat,Gujarat,Gujarat,Gujarat,Gujarat,
                            West Bengal,West Bengal,West Bengal,West Bengal,West Bengal,West Bengal,West Bengal`
              .replace(/\s+/g, " "),
            expectedStates = [{
              name           : "Madhya Pradesh",
              slug           : "madhya-pradesh",
              subColumnsCount: 7
            }, {
              name           : "Bihar",
              slug           : "bihar",
              subColumnsCount: 7
            }, {
              name           : "UP",
              slug           : "up",
              subColumnsCount: 7
            }, {
              name           : "Chattisgarh",
              slug           : "chattisgarh",
              subColumnsCount: 7
            }, {
              name           : "Karnataka",
              slug           : "karnataka",
              subColumnsCount: 7
            }, {
              name           : "Kerala",
              slug           : "kerala",
              subColumnsCount: 7
            }, {
              name           : "Punjab",
              slug           : "punjab",
              subColumnsCount: 7
            }, {
              name           : "Odisha",
              slug           : "odisha",
              subColumnsCount: 7
            }, {
              name           : "Gujarat",
              slug           : "gujarat",
              subColumnsCount: 7
            }, {
              name           : "West Bengal",
              slug           : "west-bengal",
              subColumnsCount: 7
            }],
            parsedStates   = statesHeaderParser.parse(statesHeader);
        should.exist(parsedStates);
        expectedStates.should.be.deepEqual(parsedStates);
      });
    });
  });
});
