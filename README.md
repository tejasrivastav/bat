# CBGA - BAT (Budget Analysis Tool)

|  Branch   | Build   | Coverage  |
|-----------|:-------:|:---------:|
|Development| [![Build Status development](https://travis-ci.org/cbgaindia/bat.svg?branch=development)](https://travis-ci.org/cbgaindia/bat) | [![Coverage Status](https://coveralls.io/repos/github/cbgaindia/bat/badge.svg?branch=development)](https://coveralls.io/github/cbgaindia/bat?branch=development) |
|Master     | [![Build Status](https://travis-ci.org/cbgaindia/bat.svg?branch=master)](https://travis-ci.org/cbgaindia/bat) | [![Coverage Status](https://coveralls.io/repos/github/cbgaindia/bat/badge.svg?branch=master)](https://coveralls.io/github/cbgaindia/bat?branch=master) |
|Production | [![Build Status](https://travis-ci.org/cbgaindia/bat.svg?branch=production)](https://travis-ci.org/cbgaindia/bat) | [![Coverage Status](https://coveralls.io/repos/github/cbgaindia/bat/badge.svg?branch=production)](https://coveralls.io/github/cbgaindia/bat?branch=production) |

## Getting Started

Prerequisites:
- NodeJS (v4.4.3) (prefer using [nodenv](https://github.com/nodenv/nodenv) or [nvm](https://github.com/creationix/nvm) to switch node versions)
- `Make` & `GNU Base Utilities` to run server, release and deploy scripts

# Development Setup:
- `make shrinkwrap` (for OSX) or `make npm` (for Linux) to install project dependencies 
- `make tests` Run combined tests (backend + frontend)
  - For frontend tests, run `npm run assets-tests`
  - For backend tests, run `npm run tests`
- `make coverage` Run combined tests with coverage (backend + frontend)
  - For frontend tests, run `npm run assets-coverage`
  - For backend tests, run `npm run coverage`
- `make run` to run project on default server `localhost` on port `4001` [link](http://localhost:4001)

# Building
- `make local-release` to release locally & run using `./bin/server`
- `make deploy` to do a production release directly on github-pages (make sure to run it from `production` branch)

# Contributors
- [Gaurav Godhwani](https://github.com/gggodhwani)
- [Navya B. Raju](https://github.com/navsie)
- [Noopur Varma](https://github.com/noopurvarma)
- [Ranjeet Singh](https://github.com/raeoks)
- [Teja Srivastav](https://github.com/tejasrivastav)
