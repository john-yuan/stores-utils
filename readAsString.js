/**
 * Read the value as string. If the value is `null` or `undefined`, an empty string is returned. Otherwise, the value
 * will be transformed to a string.
 *
 * @param {any} value The value we are going to read.
 * @returns {string} Returns the value as string.
 */
function readAsString(value) {
    if (typeof value === 'string') {
        return value;
    } else if (value === null || value === undefined) {
        return '';
    } else {
        return '' + value;
    }
}

module.exports = readAsString;
