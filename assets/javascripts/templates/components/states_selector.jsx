"use strict";

var React    = require("react"),
    ReactDOM = require("react-dom"),
    _        = require("lodash"),
    Link     = require("react-router").Link;

var stateSelectionDisplay = function (self) {
  if (_.isEmpty(self.state.selectedStates)) {
    return (
      <div className="states-selected-inactive">
        No states selected
      </div>
    );
  }
  return (
    <div className="states-selected-active">
      {_.chain(self.state.selectedStates).map((state) => state.name).join(", ").valueOf()}
    </div>
  );
};

var Template = function (self) {
  return (
    /* jshint ignore:start */
    /* jscs ignore:start */
    <div>
      <input type="text" className="form-control" placeholder="Search for..."
             onChange={(event) => self.onStateSearch(event.target.value)} />

      <div className="query-selector">
        <div className="states">
          <div className="states-header">
            <div className="states-header-title">States</div>
            <div className="dropdown">
              <button id="select-state-dropdown"
                      className="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true">
                Select State
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="select-state-dropdown">
                {self.state.states.map(function (state, stateIndex) {
                  return (
                    <li key={stateIndex}>
                      <Link to={self.getStateLink(state)}
                            onClick={(event) => self.onStateSelection(state)}>
                        {state.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="states-selected">
            <div className="states-selected-active"></div>
            {stateSelectionDisplay(self)}
          </div>
        </div>
      </div>
    </div>
    /* jshint ignore:end */
    /* jscs ignore:end */
  );
};

module.exports = Template;
