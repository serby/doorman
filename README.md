# doorman

Only allow a ID to be registered once.

[![build status](https://secure.travis-ci.org/serby/doorman.png)](http://travis-ci.org/serby/doorman)

## Installation

      npm install doorman

## Usage

```js
var dedupe = doorman()
dedupe('1') // true
dedupe('1') // false
dedupe('2') // true
dedupe('2') // false
dedupe.list() // { '1': true, '2': true }
```

### Loading

```js
var dedupe = doorman({ '1': true })
dedupe('1') // false
dedupe('2') // true
dedupe('2') // false

```

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
