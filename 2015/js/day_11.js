function increment(password) {
    var carry = 1, sum, code;
    return password.split('').reverse().map(function(ch) {
        sum = ch.charCodeAt(0) + carry;
        code = 97 + (sum - 97) % 26;
        carry = sum / 123;
        return String.fromCharCode(code);
    }).reverse().join('');
}

var incSequences = [];
for (var i = 0; i <= 23; i++) {
    incSequences.push(String.fromCharCode(97 + i) +
        String.fromCharCode(98 + i) +
        String.fromCharCode(99 + i));
}

function isValid(password) {
    var doubles = password.match(/(.)\1+/g);
    return Boolean(
        containsIncrementingSequence(password) &&
        !password.match(/[iol]/) &&
        doubles && doubles.length >= 2);
}

function containsIncrementingSequence(password) {
    return incSequences.some(function(seq) {
       return password.indexOf(seq) != -1; 
    });
}

function nextPassword(password) {
    do {
        password = increment(password);
    } while (!isValid(password));
    return password;
}

var part1 = nextPassword('vzbxkghb');
console.log('Part 1:', part1);

var part2 = nextPassword(part1);
console.log('Part 2:', part2);