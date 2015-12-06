var input = require('fs').readFileSync('../res/day_2').toString();

var part1 = 0, part2 = 0;
input.split('\n').forEach(function(line) {
    var dims = line.split('x');
    
    var areas = [
        dims[0] * dims[1],
        dims[0] * dims[2],
        dims[1] * dims[2]
    ];
    var slack = Math.min.apply(null, areas);
    
    part1 += slack + areas.reduce(function(t, area) {
        return t + 2 * area;
    }, 0); 
    
    var perims = [
        2 * dims[0] +  2 * dims[1],
        2 * dims[0] +  2 * dims[2],
        2 * dims[1] + 2 * dims[2]
    ];
    
    part2 += Math.min.apply(null, perims) + dims[0] * dims[1] * dims[2];
});

console.log('Part 1:', part1);
console.log('Part 2:', part2);