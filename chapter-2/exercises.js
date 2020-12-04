module.exports = {
    returnHashString: (n) => {
        const s = [];
        for (let i = 1; i <= n; i++) {
            s.push('#'.repeat(i));
        }
        return s.join('\n');
    },

    fizzBuzz: (n) => {
        const a = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0)
                a.push('FizzBuzz');
            else if (i % 3 === 0)
                a.push('Fizz');
            else if (i % 5 === 0)
                a.push('Buzz');
            else
                a.push(i.toString());
        }
        return a;
    },

    chessBoard: (n) => {
        const c = [];
        for (let i = 0; i < n; i++) {
            const line = [];
            for (let j = 0; j < n; j++) {
                const char = (i + j) % 2 === 0
                    ? ' '
                    : '#';
                line.push(char);
            }
            c.push(line.join(''));
        }
        return c;
    },
};