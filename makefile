.PHONY: all test clean start run build

all: clean test run

npm: npm-clean npm-init

npm-clean:
	rm -rf ./node_modules

npm-init:
	npm install -g npm@2.15.1
	npm install

shrinkwrap: npm
	npm update
	rm -f ./npm-shrinkwrap.json
	npm prune
	npm shrinkwrap

lint:
	./node_modules/.bin/gulp lint

tests: lint
	npm run tests
	npm run assets-tests

coverage: lint
	npm run assets-coverage
	npm run coverage

clean:
	./node_modules/.bin/gulp clean

run: clean
	npm install
	npm start

build: clean
	./node_modules/.bin/gulp build

local-release: build
	RELEASE=`date +'%Y-%m-%d-%H-%M-%S'` ./bin/release

deploy: build
	RELEASE=`date +'%Y-%m-%d-%H-%M-%S'` ./bin/deploy
