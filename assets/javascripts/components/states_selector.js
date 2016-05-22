"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash");

var StatesSelectorTemplate = require("../templates/components/states_selector.jsx");

var StatesSelector = React.createClass({

  getInitialState: function () {
    return {
      selectedStates: []
    };
  },

  componentDidMount: function () {
    var selectedStatesSlugs = this.getSelectedStatesSlug();
    this.setState({
      selectedStates: _.chain(this.props.states)
        .filter(function (state) {
          return _.includes(selectedStatesSlugs, state.slug);
        })
        .valueOf()
    });
  },

  getSelectedStatesSlug: function () {
    return _.chain(this.props)
      .get("location.query.selectedStates", "")
      .split("|")
      .filter(function (selectedState) {
        return !_.isEmpty(selectedState);
      })
      .valueOf();
  },

  getStateLink: function (state) {
    return {
      pathname: this.props.location.pathname,
      query   : {
        selectedStates: _.chain(this.props)
          .get("location.query.selectedStates", "")
          .split("|")
          .filter(function (selectedState) {
            return !_.isEmpty(selectedState);
          })
          .concat(state.slug)
          .uniq()
          .join("|")
          .valueOf()
      }
    };
  },

  onStateSelection: function (state) {
    if (!_.includes(this.getSelectedStatesSlug(), state.slug)) {
      this.setState({
        selectedStates: _.chain(this.state.selectedStates)
          .concat(state)
          .valueOf()
      });
    }
  },

  render: function () {
    return StatesSelectorTemplate(this);
  }

});

module.exports = StatesSelector;
