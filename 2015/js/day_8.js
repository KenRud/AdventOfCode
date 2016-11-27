var input = require('fs').readFileSync('../res/day_8').toString();

var s1 = 0, s2 = 0;

input.split('\n').forEach(function(line) {
   s1 += line.length;
   var t = line.replace(/(\\\\)|(\\\")|(\\x.{2})/gi, '_');
   s2 += (t.length - 2);
});

console.log('Part 1:', s1 - s2);

s1 = 0, s2 = 0;
input.split('\n').forEach(function(line) {
   s1 += line.length;
   var t = line.replace(/(\\)|(\")|(\\x.{2})/gi, '__');
   s2 += (t.length + 2);
});
     
console.log(s2 - s1);


