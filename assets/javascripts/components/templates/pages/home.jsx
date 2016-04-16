"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom");

var Template = function (self) {
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div>
      <h1>CBGA - BAT (Budget Analysis Tool)</h1>
      <img src="/images/cbga_logo.png" alt="CBGA Logo" />
      <label>
        <input type="checkbox"
               checked={self.state.isChecked}
               onChange={self.onChange} />
        {self.state.isChecked ? self.props.labelOn : self.props.labelOff}
      </label>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
