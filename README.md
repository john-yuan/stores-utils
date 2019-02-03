# Basic Utils for JavaScript

[![Build Status](https://travis-ci.org/john-yuan/stores-utils.svg?branch=master)](https://travis-ci.org/john-yuan/stores-utils)

The basic utils for javascript. This libary will keep the utils as small as possible. You can import the module you want to use on demand. Here is an example:

```js
var isArray = require('@stores/utils/isArray');

if (!isArray(it)) {
    throw new TypeError('it is not an array');
}
```

## Modules

* [isArray(it)](#isarrayit)
* [isFunction(it)](#isfunctionit)

## API

### isArray(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is an instance of `Array`. Returns `true` if the variable is an instance of `Array`, otherwise `false` is returned.

### isFunction(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is a function. Returns `true` if the variable is a function, otherwise `false` is returned.
