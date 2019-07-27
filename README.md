# Common Utils for JavaScript

[![npm version](https://img.shields.io/npm/v/x-common-utils.svg)](https://www.npmjs.com/package/x-common-utils)
[![Build Status](https://travis-ci.org/john-yuan/utils.svg?branch=master)](https://travis-ci.org/john-yuan/utils)
[![install size](https://packagephobia.now.sh/badge?p=x-common-utils)](https://packagephobia.now.sh/result?p=x-common-utils)
[![npm downloads](https://img.shields.io/npm/dm/x-common-utils.svg)](http://npm-stat.com/charts.html?package=x-common-utils)

The basic utils for javascript. This library will keep the utils as small as possible. You can import the module you
want to use on demand. Here is an example.

```js
var isArray = require('x-common-utils/isArray');

if (!isArray(it)) {
    throw new TypeError('it is not an array');
}
```

## Install

```bash
npm i x-common-utils
```

## Modules

* [each(target, callback)](#eachtarget-callback)
* [isAbsoluteURL(url)](#isabsoluteurlurl)
* [isArray(it)](#isarrayit)
* [isFunction(it)](#isfunctionit)
* [isPlainObject(it)](#isplainobjectit)
* [merge(target, ...source)](#mergetarget-source)
* [normalizePath(path)](#normalizepathpath)
* [readAsString(value)](#readasstringvalue)
* [trim(str)](#trimstr)

## API

### each(target, callback)

* `target` {Array|Object}
* `callback` {IteratorFunction}

Call the `callback` function on each element or property of the `target` array or object. If the `target` is an
array, the elements of that array will be iterated from `0` to the end of the array. If the `target` is an object,
all the properties of that object will be iterated (the order is not promised). Pay attention that the properties of
the `prototype` of the `target` is **NOT** iterated. The parameters passed to the `callback` function is
`(value, index|key, target)`. If the `callback` function returns `false`, the procession will be stopped.

### isAbsoluteURL(url)

* `url` {string}
* Returns: {boolean}

Check whether the url is absolute url. Returns `true` if the url is abosolute, otherwise `false` is returned.

### isArray(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is an instance of `Array`. Returns `true` if the variable is an instance of `Array`,
otherwise `false` is returned.

### isFunction(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is a function. Returns `true` if the variable is a function, otherwise `false` is returned.


### isPlainObject(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is a plain object. Returns `true` if the variable is a plain object, otherwise `false` is
returned.

### merge(target, ...source)

* `target` {Object}
* `source` {Object}
* Returns: {Object}

Copy any non-undefined values of source to target and overwrites the corresponding original values. This function will
modify the target object. Returns the modified target object.

### normalizePath(path)

* `path` {string}
* Retruns: {string}

Normalize the given path, parse the `.` and `..` in the path. This function only supports the separator `/`. Example:

```js
var path = normalizePath('./a/b/../b/c'); // path === 'a/b/c'
```

### readAsString(value)

* `value` {any}
* Returns: {string}

Read the value as string. If the value is `null` or `undefined`, an empty string is returned. Otherwise, the value will
be transformed to a string. This function is useful in the case that you need to ensure that the parameter user passed
is a string.

### trim(str)

* `str` {string}
* Returns: {string}

Removes the leading and trailing white space and line terminator characters from a string. If `str` is `null` or
`undefined`, it is treated as an empty string. If `str` is not a string, it will be converted to a string first.
This function retruns the trimed string.
