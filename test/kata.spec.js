import {fib1, fib2} from './kata';
import it_multiple from './it_multiple';

describe('kata unit tests', () => {

    const testCases = [
        [0, 0], 
        [1, 1], 
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 5],
        [6, 8],
        [7, 13],
        [8, 21],
        [20, 6765]
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
