"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash"),
    $        = require("jquery");

var RTP = React.PropTypes;

var HomePageTemplate = require("../templates/pages/home.jsx");

var HomePage = React.createClass({

  propTypes: {
    labelOn : RTP.string,
    labelOff: RTP.string,
    dataUrl : RTP.string
  },

  getInitialState: function () {
    return {
      isChecked: false,
      states: [],
      indicators: []
    };
  },
  getListOfIndicators:function(indicators){
    var indicatorsName = [];
    indicators.forEach(function(value){
      var currentObject = {
        name: value["name"],
        slug: value["slug"]
      }
      indicatorsName.push(currentObject);
    });
    return indicatorsName;
  },
  loadStatesData:function(){
    console.log(this.props.dataUrl);
    $.ajax({
      url: this.props.dataUrl,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        this.setState({states: data});
        var returnedIndicators = this.getListOfIndicators(data[0].indicators);
        this.setState({indicators: returnedIndicators});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadStatesData();
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
  props     = (props || {labelOn: "", labelOff: "",dataUrl:""});
  return ReactDOM.render(
    React.createElement(HomePage, props),
    document.getElementById(container)
  );
};

module.exports = {
  Component: HomePage,
  DOM      : homePage
};
