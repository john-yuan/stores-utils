var assert = require('assert');
var index = require('../index');
var isPlainObject = require('../isPlainObject');

describe('isPlainObject', function () {
    it('isPlainObject is mounted on index', function () {
        assert.deepStrictEqual(isPlainObject, index.isPlainObject);
    });

    it('{} is plain object', function () {
        assert.deepStrictEqual(true, isPlainObject({}));
    });

    it('null is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(null));
    });

    it('undefined is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(undefined));
    });

    it('string is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject('string'));
    });

    it('number is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(1));
    });

    it('boolean is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(true));
    });

    it('array is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject([]));
    });

    it('function is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(function () {}));
    });

    it('regexp is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(/regexp/));
    });

    it('global is not plain object', function () {
        var g = null;
        if (typeof global !== 'undefined') {
            g = global;
        }
        if (typeof window !== 'undefined') {
            g = window;
        }
        assert.deepStrictEqual(false, isPlainObject(g));
    });

    it('date is not plain object', function () {
        assert.deepStrictEqual(false, isPlainObject(new Date()));
    });

    it('instance of a class is not plain object', function () {
        var MyClass = function () {};
        var instance = new MyClass();
        assert.deepStrictEqual(false, isPlainObject(instance));
    });

    it('instance of a class (prototype overwritten) is not plain object', function () {
        var MyClass = function () {};

        MyClass.prototype = {};

        var instance = new MyClass();

        assert.deepStrictEqual(false, isPlainObject(instance));
    });

    it('Object.create(null) is plain object', function () {
        var object = Object.create(null);
        assert.deepStrictEqual(true, isPlainObject(object));
    });
});
