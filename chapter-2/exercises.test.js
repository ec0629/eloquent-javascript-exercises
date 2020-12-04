const { returnHashString, fizzBuzz, chessBoard } = require('./exercises');

describe('Exercise 2-1', () => {
    test('return hash string with incrementing lines', () => {
        const testString = '#\n##\n###';

        const result = returnHashString(3);
        expect(result).toBe(testString);
    });
});

describe('Exercise 2-2', () => {
    test('print Fizz if /3, Buzz /5, and FizzBuzz /3 & 5', () => {
        const result = fizzBuzz(100);
        expect(result[2]).toBe('Fizz');
        expect(result[4]).toBe('Buzz');
        expect(result[6]).toBe('7');
        expect(result[14]).toBe('FizzBuzz');
    });
});

describe('Exercise 2-3', () => {
    test('print chess board of any size', () => {
        const result = chessBoard(8);
        const firstLine = ' # # # #';
        const secondLine = '# # # # ';
        expect(Array.isArray(result)).toBe(true);
        expect(result[0]).toBe(firstLine);
        expect(result[1]).toBe(secondLine);
        console.log(result.join('\n'));
    });
});
