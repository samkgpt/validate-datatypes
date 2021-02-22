## Validate Data Types

![npm](https://img.shields.io/npm/v/validate-datatypes) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://nodejs.org/)

To validate data types.

## Installation

```bash
$ npm install validate-datatypes
```

## Usage

```javascript
var { isArray, isObject, isNumber, isString, isSymbol,
      isBigint, isInteger, isBooleans,isFunction, isUndefined,
      isStringArray, isPositiveInteger } = require( "validate-datatypes" );
```

## Examples

```javascript
console.log( isArray(["Banana", 1, "Apple", 2]) );
// returns true

console.log( isObject({ title: "title" }) );
// returns true

console.log( isNumber(5) );
// returns true

console.log( isString("string") );
// returns true

console.log( isSymbol(Symbol()) );
// returns true

console.log( isBigint(42n) );
// returns true

console.log( isInteger(5) );
// returns true

console.log( true );
// returns true

console.log( isFunction(function isFunction() {}) );
// returns true

console.log( isUndefined(undefined) );
// returns true

console.log( isStringArray(["Banana", "Orange", "Apple"]) );
// returns true

console.log( isPositiveInteger(-1) );
// returns false
```

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta
