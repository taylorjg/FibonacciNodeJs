function fib1(n) {
    switch (n) {
        case 0: return 0;
        case 1: return 1;
        default: return fib1(n - 1) + fib1(n - 2);
    }
}

function fib2(n) {
    function inner(a, b, n) {
        switch (n) {
            case 0: return 0;
            case 1: return 1;
            default: return (n > 2) ? inner(a + b, a, n - 1) : a + b;
        }
    }
    return inner(1, 0, n);
}

module.exports = {
    fib1: fib1,
    fib2: fib2
}
