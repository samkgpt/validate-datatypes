## GitHub Api's

![npm](https://img.shields.io/npm/v/validate-datatypes) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)

To create calls to get the data you need by using [GitHub Rest API][github-docs]

## Installation

```bash
$ npm install validate-datatypes
```

## Usage

```javascript
var {
  isObject,
  isString,
  isInteger,
  isFunction,
  isArray,
  isPositiveInteger,
  isStringArray,
} = require( "validate-datatypes" );
```

## GitHub Rest Api Request

```javascript
// To create calls to get the data you need by using GitHub Rest Api
console.log( isNumber(5) );
// returns true

console.log( isString(5) );
// returns false

console.log( isString("string") );
// returns true
```

For more GetHub API method, path and body options flow [GitHub Rest Api Docs][github-docs].

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta

[github-docs]: https://docs.github.com/en/rest/reference/repos
[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
