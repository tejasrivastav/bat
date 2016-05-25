"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash");

var IndicatorsSelectorTemplate = require("../templates/components/indicators_selector.jsx");

var IndicatorsSelector = React.createClass({

  getInitialState: function () {
    return {
      selectedIndicator: null
    };
  },

  componentDidMount: function () {
    var self = this;
    self.setState({
      selectedIndicator: _.find(self.props.indicators, function (indicator) {
        return _.eq(self.props.location.query.indicator, indicator.slug);
      })
    });
  },

  getIndicatorLink: function (indicator) {
    return {
      pathname: this.props.location.pathname,
      query   : {
        indicator: indicator.slug,
        states   : _.get(this.props, "location.query.states", "")
      }
    };
  },

  onIndicatorSelection: function (indicator) {
    if (!_.eq(this.props.location.query.indicator, indicator.slug)) {
      this.setState({
        selectedIndicator: indicator
      });
    }
  },

  render: function () {
    return IndicatorsSelectorTemplate(this);
  }

});

module.exports = IndicatorsSelector;
