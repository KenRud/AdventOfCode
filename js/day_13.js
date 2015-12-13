var Combinatorics = require('js-combinatorics');
var input = require('fs').readFileSync('../res/day_13').toString();

var happinessMap = {},
    people = {};
input.split('\n').forEach(function(line) {
   var m = line.match(/(.+) would (.+) (\d+) happiness units by sitting next to (.+)\./);
   people[m[1]] = true;
   people[m[4]] = true;
   happinessMap[m[1] + m[4]] = parseInt(m[3], 10) * (m[2] == 'gain' ? 1 : -1);
});

function getMaxHappiness() {
    var totals = Combinatorics.permutation(Object.keys(people)).map(function(perm) {
        var prev = perm[0];
        var sum = 0;
        for (var i = 1; i < perm.length; i++) {
            sum += happinessMap[prev + perm[i]] + happinessMap[perm[i] + prev];
            prev = perm[i];
       }
       return sum + happinessMap[prev + perm[0]] + happinessMap[perm[0] + prev];
    });
    return totals.sort(function(a, b) { return b - a; })[0];
}

console.log('Part 1:', getMaxHappiness());

// Add myself to the party!
for (var person in people) {
    happinessMap[person + 'me'] = 0;
    happinessMap['me' + person] = 0;
}
people['me'] = true;

console.log('Part 2:', getMaxHappiness());