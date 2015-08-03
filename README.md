# Quotzzy for Node.js

An asynchronous client library for Quotzzy [API](http://www.quotzzy.co/api/).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install quotzzy-node`

## Quick Start

The quickest way to get started is by executing following code:

```javascript
var quotzzy = require("quotzzy-node")();

quotzzy.getQuote(function(error, quote) {
    if(!error) {
        console.log(quote);
    } else {
        console.error(error);
    }
});
```

If everything went well, you'll see something like this in your console:

```json
{
    "text": "Ignorance never settle a question.",
    "author": {
        "name": "Benjamin Disraeli",
        "wiki": "http://en.wikipedia.com/wiki/Benjamin%20Disraeli"
    }
}
```

## Documentation

### getQuote

Requests random quote.

#### Options

- `lang`(default: `en`) - Response language (`en` or `ru`).
- `key`(default: `undefined`) - Numeric key, which influences the choice of quotation, the maximum length is 6 characters.
- `generateKey`(default `false`) - Determines whether numeric key is auto-generated.

#### Examples

Requests quote in Russian with manually set key.

```javascript
quotzzy.getQuote({
    lang: "ru",
    key: 123456
}, function(error, quote) {
    if(!error) {
        console.log(quote);
    } else {
        console.error(error);
    }
});
```

Requests quote in English with auto-generated key.

```javascript
quotzzy.getQuote({
    lang: "en",
    generateKey: true
}, function(error, quote) {
    if(!error) {
        console.log(quote);
    } else {
        console.error(error);
    }
});
```

#### Errors

When errors occur, you receive an error object with default properties as a first argument of the callback.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/quotzzy-node.svg
[npm-url]: https://npmjs.org/package/quotzzy-node
[downloads-image]: https://img.shields.io/npm/dm/quotzzy-node.svg
[downloads-url]: https://npmjs.org/package/quotzzy-node
[license]: https://img.shields.io/npm/l/quotzzy-node.svg
[license-url]: https://github.com/AnatoliyGatt/quotzzy-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/quotzzy-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/quotzzy-node
[npm-statistics-image]: https://nodei.co/npm/quotzzy-node.png?downloads=true&downloadRank=true&stars=true