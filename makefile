.PHONY: all test clean start run build

all: clean test run

npm-clean:
	rm -rf ./node_modules

npm-init:
	npm install -g npm@3.8.6
	npm install -g gulp@3.9.1

npm: npm-clean npm-init
	npm install

shrinkwrap: npm
	npm update
	rm -f ./npm-shrinkwrap.json
	npm prune
	npm shrinkwrap

lint:
	gulp lint

tests: lint
	npm test

clean:
	gulp clean

run: clean
	npm install
	npm start

build: clean
	gulp build
