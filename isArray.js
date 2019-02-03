var toString = Object.prototype.toString;

/**
 * Check whether the variable is an instance of `Array`
 *
 * @param {any} it The variable to check
 * @returns {boolean} Returns `true` if the variable is an instance of `Array`, otherwise `false` is returned
 */
var isArray = function (it) {
    return toString.call(it) === '[object Array]';
};

module.exports = isArray;
