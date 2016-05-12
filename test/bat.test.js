"use strict";

var should = require("should");

var BAT = require("../lib/bat");

describe("BAT", function () {
  it("should exist and not be empty", function () {
    should.exist(BAT);
    BAT.should.not.be.empty();
  });
});
