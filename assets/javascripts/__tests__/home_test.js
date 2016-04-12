"use strict";

jest.unmock("../components/pages/home");

var React     = require("react"),
    ReactDOM  = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    HomePage  = require("../components/pages/home").Component;

describe("HomePage", function () {
  it("changes the text after click", function () {
    var homePage     = TestUtils.renderIntoDocument(
          /* jshint ignore:start */
          /* jscs ignore:start */
          <HomePage labelOn="On" labelOff="Off" />
          /* jshint ignore:end */
          /* jscs ignore:end */
        ),
        checkboxNode = ReactDOM.findDOMNode(homePage).querySelector("label");
    expect(checkboxNode.textContent).toEqual("Off");
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(homePage, "input")
    );
    expect(checkboxNode.textContent).toEqual("On");
  });
});
