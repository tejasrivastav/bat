"use strict";

var React = require("react"),
    _     = require("lodash");

var DATA = require("../utils/data").DATA;

var VisualizationTemplate = require("../templates/components/visualization.jsx");

var Visualization = React.createClass({

  getInitialState: function () {
    return {
      selectedStates   : [],
      selectedIndicator: {}
    };
  },

  componentDidMount: function () {
    this.reinitialize(this.props);
  },

  componentWillReceiveProps: function (nextProps) {
    this.reinitialize(nextProps);
  },

  getSelectedStatesSlug: function (props) {
    return _.chain(props)
      .get("location.query.states", "")
      .split("|")
      .filter(function (state) {
        return !_.isEmpty(state);
      })
      .valueOf();
  },

  reinitialize: function (props) {
    var self                = this,
        selectedStatesSlugs = self.getSelectedStatesSlug(props);
    self.setState({
      selectedStates   : _.chain(props.states)
        .filter(function (state) {
          return _.includes(selectedStatesSlugs, state.slug);
        })
        .valueOf(),
      selectedIndicator: _.find(props.indicators, function (indicator) {
        return _.eq(props.location.query.indicator, indicator.slug);
      })
    });
  },

  getBudgets: function () {
    var self                = this,
        selectedStatesSlugs = self.getSelectedStatesSlug(self.props);
    return _.chain(DATA)
      .filter(function (state) {
        return _.includes(selectedStatesSlugs, state.slug);
      })
      .map(function (state) {
        return _.assign(state, {
          indicators: _.chain(state)
            .get("indicators", [])
            .filter(function (indicator) {
              return _.eq(self.props.location.query.indicator, indicator.slug);
            })
            .valueOf()
        });
      })
      .valueOf();
  },

  render: function () {
    return VisualizationTemplate(this);
  }

});

module.exports = Visualization;
