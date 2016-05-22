"use strict";

jest.unmock("../pages/home");

var React     = require("react"),
    ReactDOM  = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    HomePage  = require("../pages/home").Component;

describe("HomePage", function () {
  it("changes the text after click", function () {
    // NOOP
  });
});
