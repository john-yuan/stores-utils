# Basic Utils for JavaScript

[![Build Status](https://travis-ci.org/john-yuan/utils.svg?branch=master)](https://travis-ci.org/john-yuan/utils)

The basic utils for javascript. This library will keep the utils as small as possible. You can import the module you want to use on demand. Here is an example:

```js
var isArray = require('@john-yuan/utils/isArray');

if (!isArray(it)) {
    throw new TypeError('it is not an array');
}
```

## Install

```bash
npm i @john-yuan/utils
```

## Modules

* [isArray(it)](#isarrayit)
* [isFunction(it)](#isfunctionit)
* [isPlainObject(it)](#isplainobjectit)
* [merge(target, ...source)](#mergetarget-source)
* [trim(str)](#trimstr)

## API

### isArray(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is an instance of `Array`. Returns `true` if the variable is an instance of `Array`, otherwise `false` is returned.

### isFunction(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is a function. Returns `true` if the variable is a function, otherwise `false` is returned.


### isPlainObject(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is a plain object. Returns `true` if the variable is a plain object, otherwise `false` is returned.

### merge(target, ...source)

* `target` {Object}
* `source` {Object}
* Returns: {Object}

Copy any non-undefined values of source to target and overwrites the corresponding original values. This function will modify the target object. Returns the modified target object.

### trim(str)

* `str` {string}
* Returns: {string}

Removes the leading and trailing white space and line terminator characters from a string. If `str` is `null` or `undefined`, it is treated as an empty string. If `str` is not a string, it will be converted to a string first. This function retruns the trimed string.
