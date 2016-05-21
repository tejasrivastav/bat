"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom");

var IndicatorsSelector = require("../../components/indicators_selector");

var Template = function (self) {
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div className="body">
      <div className="bg-primary side-nav">
        <div className="project-info">
          <div className="project-title">CBGA Story Generator</div>
          <div className="project-description">Some random generated text</div>
        </div>
        <IndicatorsSelector params={self.props.params} indicators={self.state.indicators} />

        <div className="credits">
          <div className="credits-info">
            <span>@credits</span>
            <span href="javascript:void(0)">DataKind Bangalore</span>
          </div>
          <div className="credits-links">
            <span className="credits-links-item">Share</span>
            <span className="credits-links-item">About</span>
            <span className="credits-links-item">ContactUs</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="query-selector">
          <div className="states">
            <div className="states-header">
              <div className="states-header-title">States</div>
              <div className="btn btn-primary">Select State</div>
            </div>
            <div className="states-selected">
              <div className="states-selected-active"></div>
              <div className="states-selected-inactive">No states selected</div>
            </div>
          </div>
        </div>
        <div className="visual">
          <div className="report">
            <div className="report-header">
              <div className="report-title">Union Budget Value for Year 2014</div>
              <div className="report-subtitle"> select states to explore more</div>
            </div>
            <div className="report-body">
              <div className="graph"></div>
            </div>
            <div className="report-footer">
              <div className="report-footer-item">Download&nbsp;|&nbsp;</div>
              <div className="report-footer-item">Embed&nbsp;|&nbsp;</div>
              <div className="report-footer-item">Share</div>
            </div>
          </div>
          <div className="meta">
            <div className="meta-info">
              <div className="meta-info-title">Title</div>
              <div className="meta-info-unit">Unit</div>
              <div className="meta-info-resource">Source</div>
              <div className="meta-info-notes">Notes</div>
            </div>
          </div>
        </div>
        <div className="information-container">
          <div className="information">
            <div className="information-title">Budget Insights</div>
            <div className="information-content">
              Some random generated text
              Some random generated text
              Some random generated text
            </div>
          </div>
          <div className="information">
            <div className="information-title">Budget Insights</div>
            <div className="information-content">
              Some random genarated text
              Some random genarated text
              Some random genarated text
            </div>
          </div>
        </div>
      </div>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
