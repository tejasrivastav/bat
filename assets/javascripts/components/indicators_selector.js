"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash");

var IndicatorsSelectorTemplate = require("../templates/components/indicators_selector.jsx");

var IndicatorsSelector = React.createClass({

  getInitialState: function () {
    return {
      selectedIndicatorSlug: null
    };
  },

  componentDidMount: function () {
    this.setState({
      selectedIndicatorSlug: _.get(this.props, "params.indicatorSlug")
    });
  },

  render: function () {
    return IndicatorsSelectorTemplate(this);
  }

});

module.exports = IndicatorsSelector;
