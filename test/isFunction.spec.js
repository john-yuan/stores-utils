var assert = require('assert');
var index = require('../index');
var isFunction = require('../isFunction');

describe('isFunction', function () {
    it('isFunction is mounted on index', function () {
        assert.deepStrictEqual(index.isFunction, isFunction);
    });

    it('function () {} is function', function () {
        assert.deepStrictEqual(true, isFunction(function () {}));
    });

    it('null is not function', function () {
        assert.deepStrictEqual(false, isFunction(null));
    });

    it('undefined is not function', function () {
        assert.deepStrictEqual(false, isFunction(undefined));
    });

    it('string is not function', function () {
        assert.deepStrictEqual(false, isFunction('string'));
    });

    it('number is not function', function () {
        assert.deepStrictEqual(false, isFunction(1));
    });

    it('boolean is not function', function () {
        assert.deepStrictEqual(false, isFunction(true));
    });

    it('array is not function', function () {
        assert.deepStrictEqual(false, isFunction([]));
    });

    it('object is not function', function () {
        assert.deepStrictEqual(false, isFunction({}));
    });

    it('regexp is not function', function () {
        assert.deepStrictEqual(false, isFunction(/regexp/));
    });

    it('date is not function', function () {
        assert.deepStrictEqual(false, isFunction(new Date()));
    });
});
