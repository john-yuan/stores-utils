var assert = require('assert');
var index = require('../index');
var each = require('../each');

describe('each', function () {
    it('each is mounted on index', function () {
        assert.deepStrictEqual(each, index.each);
    });

    it('each array', function () {
        var array = [1, 2, 3, 4];

        each(array, function (value, index, target) {
            assert.deepStrictEqual(this, array);
            assert.deepStrictEqual(target, array);
            assert.deepStrictEqual(value, target[index]);
        });
    });

    it('each array break', function () {
        var array = [false, false];

        each(array, function (value, index, target) {
            target[index] = true;
            return false;
        });

        assert.deepStrictEqual(array[0], true);
        assert.deepStrictEqual(array[1], false);
    });

    it('each object', function () {
        var object = {
            a: 1,
            b: 2
        };

        each(object, function (value, key, target) {
            assert.deepStrictEqual(this, object);
            assert.deepStrictEqual(target, object);
            assert.deepStrictEqual(value, target[key]);
        });
    });

    it('each object break', function () {
        var object = {
            a: false,
            b: false
        };

        each(object, function (value, key, target) {
            target[key] = true;
            return false;
        });

        assert.deepStrictEqual(object.a && object.b, false);
        assert.deepStrictEqual(object.a || object.b, true);
    });

    it('each object: prototype is filtered out', function () {
        var Ctor = function () {
            this.instanceProperty = true;
        };

        Ctor.prototype.commonProperty = true;

        var instance = new Ctor();
        var foundInstanceProperty = false;
        var foundCommonProperty = false;

        each(instance, function (value, key) {
            if (key === 'instanceProperty') {
                foundInstanceProperty = true;
            } else if (key === 'commonProperty') {
                foundCommonProperty = true;
            }
        });

        assert.deepStrictEqual(foundInstanceProperty, true, 'foundInstanceProperty');
        assert.deepStrictEqual(foundCommonProperty, false, 'foundCommonProperty');
    });
});
