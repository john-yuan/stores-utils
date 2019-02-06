var assert = require('assert');
var index = require('../index');
var trim = require('../trim');

describe('trim', function () {

    it('trim is mounted on index', function () {
        assert.deepStrictEqual(index.trim, trim);
    });

    it('trim will remove the leading white space', function () {
        assert.deepStrictEqual('abc', trim(' abc'));
    });

    it('trim will remove the trailing white space', function () {
        assert.deepStrictEqual('abc', trim('abc '));
    });

    it('trim will remove the leading and trailing white space', function () {
        assert.deepStrictEqual('abc', trim(' abc '));
    });

    it('trim null returns empty string', function () {
        assert.deepStrictEqual('', trim(null));
    });

    it('trim undefined returns empty string', function () {
        assert.deepStrictEqual('', trim(undefined));
    });

    it('trim false returns empty "false"', function () {
        assert.deepStrictEqual('false', trim(false));
    });

    it('trim 0 returns empty "0"', function () {
        assert.deepStrictEqual('0', trim(0));
    });

    // trim._trimUsingPrototype

    it('trim._trimUsingPrototype will remove the leading white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingPrototype(' abc'));
    });

    it('trim._trimUsingPrototype will remove the trailing white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingPrototype('abc '));
    });

    it('trim._trimUsingPrototype will remove the leading and trailing white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingPrototype(' abc '));
    });

    // trim._trimUsingRegExp

    it('trim._trimUsingRegExp will remove the leading white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingRegExp(' abc'));
    });

    it('trim._trimUsingRegExp will remove the trailing white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingRegExp('abc '));
    });

    it('trim._trimUsingRegExp will remove the leading and trailing white space', function () {
        assert.deepStrictEqual('abc', trim._trimUsingRegExp(' abc '));
    });
});