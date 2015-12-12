var input = require('fs').readFileSync('../res/day_12').toString();

function typeOf (obj) {
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

function sumNumbers(x, ignoreRed) {
    switch (typeOf(x)) {
        case 'number':
            return x;
        case 'array':
            return x.reduce(function(a, b) {
                return a + sumNumbers(b, ignoreRed);
            }, 0);
        case 'object':
            var sum = 0;
            for (var key in x) {
                if (ignoreRed && x[key] == 'red') {
                    return 0;
                }
                    sum += sumNumbers(x[key], ignoreRed);
            }
            return sum;
        default:
            return 0;
    }
}

var doc = JSON.parse(input);

console.log('Part 1:', sumNumbers(doc));
console.log('Part 2:', sumNumbers(doc, true));