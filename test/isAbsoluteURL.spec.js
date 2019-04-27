var assert = require('assert');
var index = require('../index');
var isAbsoluteURL = require('../isAbsoluteURL');

describe('isAbsoluteURL', function () {
    it('isAbsoluteURL is mounted on index', function () {
        assert.deepStrictEqual(index.isAbsoluteURL, isAbsoluteURL);
    });

    it("http://example.com is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('http://example.com'));
    });

    it("https://example.com is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('https://example.com'));
    });

    it("ftp://example.com is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('ftp://example.com'));
    });

    it("a123://example.com is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('a123://example.com'));
    });

    it("//example.com is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('//example.com'));
    });

    it("// is absolute url", function () {
        assert.deepStrictEqual(true, isAbsoluteURL('//'));
    });

    it("/post/list is not absolute url", function () {
        assert.deepStrictEqual(false, isAbsoluteURL('/post/list'));
    });

    it("/ is not absolute url", function () {
        assert.deepStrictEqual(false, isAbsoluteURL('/'));
    });

    it(":// is not absolute url", function () {
        assert.deepStrictEqual(false, isAbsoluteURL('://'));
    });

    it("/test/http://example.com is not absolute url", function () {
        assert.deepStrictEqual(false, isAbsoluteURL('/test/http://example.com'));
    });
});
