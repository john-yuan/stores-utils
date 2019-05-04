var assert = require('assert');
var index = require('../index');
var normalizePath = require('../normalizePath');

describe('normalizePath', function () {
    it('normalizePath is mounted on index', function () {
        assert.deepStrictEqual(normalizePath, index.normalizePath);
    });

    function test(input, ouput) {
        it(input + ' => ' + ouput, function () {
            assert.deepStrictEqual(normalizePath(input), ouput);
        });
    }

    test('./a/b0/../b/c', 'a/b/c');

    test('/a/b0/..', '/a');
    test('/a/b0/../', '/a/');

    test('a/b0/..', 'a');
    test('a/b0/../', 'a/');

    test('../../a/b', 'a/b');
    test('/../../a/b', '/a/b');

    test('./a/b', 'a/b');
    test('./a/b/', 'a/b/');
    test('./././././a/b', 'a/b');

    test('/./a/b', '/a/b');
    test('/./a/b/', '/a/b/');

    test('/a/b0/b1/../../b', '/a/b');
    test('/a/././././././b', '/a/b');

    test('../a/b0/../b1/../b/c/././d0/d1/d2/../../../d', 'a/b/c/d');
    test('../a/b0/../b1/../b/c/././d0/d1/d2/../../../d/', 'a/b/c/d/');
    test('/../a/b0/../b1/../b/c/././d0/d1/d2/../../../d', '/a/b/c/d');
    test('/../a/b0/../b1/../b/c/././d0/d1/d2/../../../d/', '/a/b/c/d/');
});
