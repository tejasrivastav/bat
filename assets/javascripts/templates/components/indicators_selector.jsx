"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom");

var Template = function (self) {
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div className="indicator">
      <div className="search-box">
        <input type="text" placeholder="Search for schemes or indicator" />
      </div>
      <div className="indicator-title">
        <div className="indicator-title-text">CATEGORY</div>
        <div className="clear-all"></div>
      </div>
      <div className="indicator-list">
        <div className="indicator-list-item">
          <div className="indicator-list-item-text">ABC</div>
          <div className="indicator-list-item-selected"></div>
        </div>
      </div>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
