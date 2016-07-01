import {fib1, fib2} from './kata';
import it_multiple from './it_multiple';

describe('kata unit tests', () => {

    const testCases = [
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
        [7, 21]
    ];

    it_multiple(
        'fib1',
        (n, expected) => {
            expect(fib1(n)).toBe(expected);
        },
        testCases);

    it_multiple(
        'fib2',
        (n, expected) => {
            expect(fib2(n)).toBe(expected);
        },
        testCases);
});
