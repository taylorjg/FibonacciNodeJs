'use strict';

var _kata = require('./kata');

var _it_multiple = require('./it_multiple');

var _it_multiple2 = _interopRequireDefault(_it_multiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('kata unit tests', function () {

    var testCases = [[0, 1], [1, 1], [2, 2], [3, 3], [4, 5], [5, 8], [6, 13], [7, 21]];

    (0, _it_multiple2.default)('fib1', function (n, expected) {
        expect((0, _kata.fib1)(n)).toBe(expected);
    }, testCases);

    (0, _it_multiple2.default)('fib2', function (n, expected) {
        expect((0, _kata.fib2)(n)).toBe(expected);
    }, testCases);
});