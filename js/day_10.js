function lookSay(input) {
    return input.match(/(.)\1*/g).map(function(m) {
        return m.length + m[0];
    }).join('');
}

var input = '1113222113';
var i;

var part1 = input;
for(i = 0; i < 40; i++) {
    part1 = lookSay(part1);
}

var part2 = input;
for(i = 0; i < 50; i++) {
    part2 = lookSay(part2);
}

console.log('Part 1:', part1.length);
console.log('Part 2:', part2.length);