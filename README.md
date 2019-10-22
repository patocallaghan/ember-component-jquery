# ember-component-jquery

[![Build Status](https://travis-ci.org/patocallaghan/ember-component-jquery.svg?branch=master)](https://travis-ci.org/patocallaghan/ember-component-jquery)

[![npm](https://img.shields.io/npm/v/ember-component-jquery.svg?label=npm)](https://www.npmjs.com/package/ember-component-jquery)


A codemod for migrating Ember Component code from `this.$()` to `$(this.element)`

## Usage

```
npx ember-component-jquery this-jquery path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [this-jquery](transforms/this-jquery/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`