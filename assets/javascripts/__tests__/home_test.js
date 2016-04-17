"use strict";

jest.unmock("../components/pages/home");

var React     = require("react"),
    ReactDOM  = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    HomePage  = require("../components/pages/home").Component;

describe("HomePage", function () {
  it("changes the text after click", function () {
    // NOOP
  });
});
