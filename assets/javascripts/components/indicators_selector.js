"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom");

var IndicatorsSelectorTemplate = require("../templates/components/indicators_selector.jsx");

var IndicatorsSelector = React.createClass({

  render: function () {
    return IndicatorsSelectorTemplate(this);
  }
});

module.exports = IndicatorsSelector;
