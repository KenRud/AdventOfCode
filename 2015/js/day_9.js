var Combinatorics = require('js-combinatorics');
var input = require('fs').readFileSync('../res/day_9').toString();

var dist = {},
    cities = {};
input.split('\n').forEach(function(line) {
   var m = line.match(/(.+) to (.+) = (.+)/);
   cities[m[1]] = true;
   cities[m[2]] = true;
   dist[m[1] + m[2]] = parseInt(m[3], 10);
   dist[m[2] + m[1]] = parseInt(m[3], 10);
});

var routeDistances = 
    Combinatorics.permutation(Object.keys(cities)).map(function(route) {
        var prev = route[0];
        var sum = 0;
        for (var i = 1; i < route.length; i++) {
            sum += dist[prev + route[i]];
            prev = route[i];
       }
       return sum;
    });

console.log('Part 1:', Math.min.apply(null, routeDistances));
console.log('Part 2:', Math.max.apply(null, routeDistances));