# Basic Utils for JavaScript

The basic utils for javascript. This libary will keep the utils as small as possible. You can import the module you want to use on demand. Here is an example:

```js
var isArray = require('@stores/utils/isArray');

if (!isArray(it)) {
    throw new TypeError('it is not an array');
}
```

## Modules

* [isArray(it)](#isarrayit)

## API

### isArray(it)

* `it` {any}
* Returns: {boolean}

Check whether the variable is an instance of `Array`. Returns `true` if the variable is an instance of `Array`, otherwise `false` is returned.
