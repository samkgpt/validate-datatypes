## Validate Data Types

![npm](https://img.shields.io/npm/v/validate-datatypes) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://nodejs.org/)

To validate data types.

## Installation

```bash
$ npm install validate-datatypes
```

## Usage

```javascript
var {
  isArray,
  isObject,
  isString,
  isInteger,
  isFunction,
  isStringArray,
  isPositiveInteger,
} = require( "validate-datatypes" );
```

## Examples

```javascript
console.log( isString("string") );
// returns true

console.log(isNumber(5));
// returns true

console.log(isString(5));
// returns false

console.log(isArray(["Banana", "Orange", "Apple", "Mango"]));
// returns true
```

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta
