var input = require('fs').readFileSync('../res/day_5').toString();

var part1 = input.split('\n').filter(function(line) {
    var vowels = line.match(/[aeiou]/g);
    var doubles = line.match(/(.)\1/);
    var bad = line.match(/ab|cd|pq|xy/);
    return vowels && vowels.length > 2 && doubles && !bad;
}).length;

var part2 = input.split('\n').filter(function(line) {
    return line.match(/(.{2,}).*\1/) && line.match(/(.).\1/); 
}).length;

console.log('Part 1:', part1);
console.log('Part 2:', part2);