var toString = Object.prototype.toString;

/**
 * Check whether the variable is a function
 *
 * @param {any} it The variable to check
 * @returns {boolean} Returns `true` if the variable is a function, otherwise `false` is returned
 */
var isFunction = function (it) {
    return toString.call(it) === '[object Function]';
};

module.exports = isFunction;
