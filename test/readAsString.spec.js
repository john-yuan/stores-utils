var assert = require('assert');
var index = require('../index');
var readAsString = require('../readAsString');

describe('readAsString', function () {

    it('readAsString is mounted on index', function () {
        assert.deepStrictEqual(index.readAsString, readAsString);
    });

    it('read undefined as string is an empty string', function () {
        assert.deepStrictEqual(readAsString(), '');
        assert.deepStrictEqual(readAsString(undefined), '');
    });

    it('read null as string is an empty string', function () {
        assert.deepStrictEqual(readAsString(null), '');
    });

    it('read 0 as string is "0"', function () {
        assert.deepStrictEqual(readAsString(0), '0');
    });

    it('read false as string "false"', function () {
        assert.deepStrictEqual(readAsString(false), 'false');
    });
});