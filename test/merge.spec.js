var assert = require('assert');
var index = require('../index');
var merge = require('../merge');
var isArray = require('../isArray');
var isPlainObject = require('../isPlainObject');

describe('merge', function () {
    it('merge is mounted on index', function () {
        assert.deepStrictEqual(merge, index.merge);
    });

    it('merge should return the target object', function () {
        var target = {};
        var source = {};
        var result = merge(target, source);

        assert.deepStrictEqual(result, target);
    });

    it('undefined is not copied', function () {
        var target = { name: 'default' };
        var source = { name: undefined };

        merge(target, source);

        assert.deepStrictEqual(target.name, 'default');
    });

    it('null is copied', function () {
        var target = { name: 'default' };
        var source = { name: null };

        merge(target, source);

        assert.deepStrictEqual(target.name, null);
    });

    it('merge will work recursively', function () {
        var target = {
            child: {
                name: 'default'
            }
        };

        var source = {
            child: {
                name: 'john'
            }
        };

        merge(target, source);

        assert.deepStrictEqual(target.child.name, 'john');
    });

    it('merge will work with multiple args', function () {
        var target = { id: null, name: 'a' };
        var source1 = { id: 1, name: 'b' };
        var source2 = { id: 2 };

        merge(target, source1, source2);

        assert.deepStrictEqual(target.id, 2);
        assert.deepStrictEqual(target.name, 'b');
    });

    it('merge will change the value type to array, if the source value is array', function () {
        var target = { arr: {} };
        var source = { arr: [1, 2, 3] };

        merge(target, source);

        assert.deepStrictEqual(true, isArray(target.arr));
    });

    it('merge will change the value type to object, if the source value is object', function () {
        var target = { obj: [] };
        var source = { obj: {} };

        merge(target, source);

        assert.deepStrictEqual(true, isPlainObject(target.obj));
    });

    it('merge exmaple', function () {
        var d = new Date(1000);
        var f = function () {};

        var target = {
            a: 1,
            b: {
                c: 1,
                d: null,
                g: null,
                h: 3
            }
        };

        var source = {
            a: 2,
            b: {
                c: 2,
                d: d,
                f: f,
                g: undefined,
                h: null
            }
        };

        merge(target, source);

        assert.deepStrictEqual(2, target.a);
        assert.deepStrictEqual(2, target.b.c);
        assert.deepStrictEqual(d, target.b.d);
        assert.deepStrictEqual(1000, target.b.d.getTime());
        assert.deepStrictEqual(f, target.b.f);
        assert.deepStrictEqual(null, target.b.g);
        assert.deepStrictEqual(null, target.b.h);
    });

    it('should copy instance of user dinfined class', function () {
        function MyClass(no) {
            this.no = no;
        }

        MyClass.prototype.test = function () {
            return 'success';
        };

        var c1 = new MyClass(1);
        var res = merge({}, { c1: c1 });

        assert.deepStrictEqual(res.c1.no, 1);
        assert.deepStrictEqual(res.c1.test(), 'success');
        assert.deepStrictEqual(res.c1 instanceof MyClass, true);
    });

    it('should copy instance of user dinfined class (prototype overwritten)', function () {
        function MyClass(no) {
            this.no = no;
        }

        MyClass.prototype = {
            test: function () {
                return 'success';
            }
        };

        var c1 = new MyClass(1);
        var res = merge({}, { c1: c1 });

        assert.deepStrictEqual(res.c1.no, 1);
        assert.deepStrictEqual(res.c1.test(), 'success');
        assert.deepStrictEqual(res.c1 instanceof MyClass, true);
    });
});
