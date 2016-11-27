/* global wires */

var input = require('fs').readFileSync('../res/day_7').toString();

function buildWires() { 
    var wires = {};
    input.split('\n').forEach(function(line) {
        var expression = line.replace('OR', '|')
            .replace('NOT', '~')
            .replace('AND', '&')
            .replace('LSHIFT', '<<')
            .replace('RSHIFT', '>>')
            .replace('OR', '|')
            .replace(/([a-z]+)/g, 'wires["$1"]()')
            .match(/(.*) ->/)[1];
       var w = line.match(/-> (.+)/)[1];
       wires[w] = function() { 
           var t = eval(expression);
           return (wires[w] = function() { return t; })();
       };
    });
    return wires;
};

var wires1 = buildWires();
var part1 = wires1['a']();
console.log('Part 1:', part1);

var wires2 = buildWires();
wires2['b'] = function() { return part1; };
var part2 = wires2['a']();
console.log('Part 2:', part2);