'use strict';

var _kata = require('./kata');

var _it_multiple = require('./it_multiple');

var _it_multiple2 = _interopRequireDefault(_it_multiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('kata unit tests', function () {

    var testCases = [[0, 0], [1, 1], [2, 1], [3, 2], [4, 3], [5, 5], [6, 8], [7, 13], [8, 21], [20, 6765]];

    (0, _it_multiple2.default)('fib1', function (n, expected) {
        expect((0, _kata.fib1)(n)).toBe(expected);
    }, testCases);

    (0, _it_multiple2.default)('fib2', function (n, expected) {
        expect((0, _kata.fib2)(n)).toBe(expected);
    }, testCases);
});