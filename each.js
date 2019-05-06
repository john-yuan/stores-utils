var isArray = require('./isArray');
var isFunction = require('./isFunction');
var hasOwn = Object.prototype.hasOwnProperty;

/**
 * Call the `callback` function on each element or property of the `target` array or object. If the `target` is an
 * array, the elements of that array will be iterated from `0` to the end of the array. If the `target` is an object,
 * all the properties of that object will be iterated (the order is not promised). Pay attention that the properties of
 * the `prototype` of the `target` is **NOT** iterated. The parameters passed to the `callback` function is
 * `(value, index|key, target)`. If the `callback` function returns `false`, the procession will be stopped.
 *
 * @param {Array|Object.<string, *>} target The target array or object.
 * @param {IteratorFunction} callback The function to call on each item.
 */
function each(target, callback) {
    var key;
    var max;

    if (isFunction(callback)) {
        if (isArray(target)) {
            key = 0;
            max = target.length;
            while (key < max) {
                if (callback.call(target, target[key], key, target) === false) {
                    break;
                }
                key += 1;
            }
        } else if (target && typeof target === 'object') {
            for (key in target) {
                if (hasOwn.call(target, key)) {
                    if (callback.call(target, target[key], key, target) === false) {
                        break;
                    }
                }
            }
        }
    }
}

module.exports = each;

/**
 * The function to call on each item.
 *
 * @callback IteratorFunction
 * @param {any} value The value of the current item.
 * @param {number|string} indexOrKey The index or key of element or property.
 * @param {Array|Object.<string, *>} target The target array or object.
 * @returns {boolean|void} If the function returns the value `false`, the loop will be stopped. Any other value returned
 * from this function is ignored.
 */
