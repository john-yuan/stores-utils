/**
 * Trim using String.prototype.trim
 *
 * @param {string} str
 * @returns {string}
 */
function _trimUsingPrototype(str) {
    return str.trim();
}

/**
 * Trim using RegExp
 *
 * @param {string} str
 * @returns {string}
 */
function _trimUsingRegExp(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

/**
 * Removes the leading and trailing white space and line terminator characters from a string
 *
 * @param {string} str
 * @returns {string}
 */
function _trim(str) {
    if (typeof str.trim === 'function') {
        _trim = _trimUsingPrototype;
    } else {
        _trim = _trimUsingRegExp;
    }

    return _trim(str);
}

/**
 * Removes the leading and trailing white space and line terminator characters from a string. If `str` is `null` or
 * `undefined`, it is treated as an empty string. If `str` is not a string, it will be converted to a string.
 *
 * @param {string} str The string to be trimed
 * @returns {string} Returns the trimed string
 */
function trim(str) {
    if (typeof str !== 'string') {
        if (str === null || str === undefined) {
            return '';
        }  else {
            str = '' + str;
        }
    }
    return _trim(str);
}

// This for testing
trim._trimUsingPrototype = _trimUsingPrototype;
trim._trimUsingRegExp = _trimUsingRegExp;

module.exports = trim;
