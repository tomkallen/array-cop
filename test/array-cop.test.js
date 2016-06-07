var chai = require('chai');
require("blanket");
var arrayCop = require('../src/array-cop');
var assert = chai.assert;

var arr = [1, 3, [3, [5, ]], 7, 8, 'pete', {}];

describe('flatten', function() {
    it('should return a flattened array', function() {
        assert.deepEqual(arrayCop.flatten(arr), [1, 3, 3, 5, 7, 8, 'pete', {}]);
        assert.deepEqual(arrayCop.flatten(["alice"]), ["alice"]);
        assert.deepEqual(arrayCop.flatten(), undefined);
    });
    it('should return an object back', function() {
        assert.deepEqual(arrayCop.flatten("not an array"), "not an array");
    });
});