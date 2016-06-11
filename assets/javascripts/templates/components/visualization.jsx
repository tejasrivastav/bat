"use strict";

var React        = require("react"),
    ReactD3Basic = require("react-d3-basic");

var LineChart = ReactD3Basic.LineChart;

var graph = function (self) {
  var budgets     = self.getBudgets(),
      data        = [
        {
          age  : 39,
          index: 0
        },
        {
          age  : 38,
          index: 1
        },
        {
          age  : 34,
          index: 2
        },
        {
          age  : 12,
          index: 3
        }
      ],
      chartSeries = [{
        field: "age",
        name : "Age",
        color: "#ff7f0e",
        style: {
          "stroke-width"  : 2,
          "stroke-opacity": 0.2,
          "fill-opacity"  : 0.2
        }
      }],
      x           = function (d) {
        return d.index;
      };
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <LineChart width={900} height={400} data={data} chartSeries={chartSeries} x={x} />
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

var Template = function (self) {
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div className="report-body">
      <div className="graph">
        {graph(self)}
      </div>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
