"use strict";

function fib1(n) {
    switch (n) {
        case 0:
            return 1;
        case 1:
            return 1;
        default:
            return fib1(n - 1) + fib1(n - 2);
    }
}

function fib2(n) {
    switch (n) {
        case 0:
            return 1;
        case 1:
            return 1;
        default:
            return fib2(n - 1) + fib2(n - 2);
    }
}

module.exports = {
    fib1: fib1,
    fib2: fib2
};