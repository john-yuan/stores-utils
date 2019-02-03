var assert = require('assert');
var index = require('../index');
var isArray = require('../isArray');

describe('isArray', function () {
    it('isArray is mounted on index', function () {
        assert.deepStrictEqual(index.isArray, isArray);
    });

    it("[] is array", function () {
        assert.deepStrictEqual(true, isArray([]));
    });

    it("Array() is array", function () {
        assert.deepStrictEqual(true, isArray(Array()));
    });

    it("new Array() is array", function () {
        assert.deepStrictEqual(true, isArray(new Array()));
    });

    it("null is not array", function () {
        assert.deepStrictEqual(false, isArray(null));
    });

    it("undefined is not array", function () {
        assert.deepStrictEqual(false, isArray(undefined));
    });

    it("string is not array", function () {
        assert.deepStrictEqual(false, isArray('string'));
    });

    it("number is not array", function () {
        assert.deepStrictEqual(false, isArray(1));
    });

    it("boolean is not array", function () {
        assert.deepStrictEqual(false, isArray(true));
    });

    it("{} is not array", function () {
        assert.deepStrictEqual(false, isArray({}));
    });

    it("function is not array", function () {
        assert.deepStrictEqual(false, isArray(function () {}));
    });

    it("date is not array", function () {
        assert.deepStrictEqual(false, isArray(new Date()));
    });

    it("regexp is not array", function () {
        assert.deepStrictEqual(false, isArray(/regexp/));
    });
});
