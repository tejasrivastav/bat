"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash"),
    $        = require("jquery");

var DATA = require("../utils/data").DATA;

var HomePageTemplate = require("../templates/pages/home.jsx");

var HomePage = React.createClass({

  getInitialState: function () {
    return {
      indicators: []
    };
  },

  componentDidMount: function () {
    this.setState({
      indicators: _.chain(DATA)
        .get("[0].indicators")
        .map(function (indicator) {
          return _.pick(indicator, ["name", "slug"]);
        })
        .valueOf()
    });
  },

  render: function () {
    return HomePageTemplate(this);
  }
});

/* istanbul ignore next */
var homePage = function (container, props) {
  return ReactDOM.render(
    React.createElement(HomePage, props),
    document.getElementById(container)
  );
};

module.exports = {
  Component: HomePage,
  DOM      : homePage
};
