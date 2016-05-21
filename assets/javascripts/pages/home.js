"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash");

var RTP = React.PropTypes;

var HomePageTemplate = require("../templates/pages/home.jsx");

var HomePage = React.createClass({

  propTypes: {
    labelOn : RTP.string,
    labelOff: RTP.string
  },

  getInitialState: function () {
    return {
      isChecked: false
    };
  },

  onChange: function () {
    this.setState({
      isChecked: !this.state.isChecked
    });
  },

  render: function () {
    return HomePageTemplate(this);
  }
});

/* istanbul ignore next */
var homePage = function (container, props) {
  container = (container || "main-container");
  props     = (props || {labelOn: "", labelOff: ""});
  return ReactDOM.render(
    React.createElement(HomePage, props),
    document.getElementById(container)
  );
};

module.exports = {
  Component: HomePage,
  DOM      : homePage
};
