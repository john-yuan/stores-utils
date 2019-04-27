/**
 * Check whether the url is absolute url.
 *
 * @param {string} url The url string to check
 * @returns {boolean} Returns `true` if the url is abosolute, otherwise `false` is returned
 */
var isAbsoluteURL = function (url) {
    return /^(?:[a-z][a-z0-9\-\.\+]*:)?\/\//i.test(url);
};

module.exports = isAbsoluteURL;
