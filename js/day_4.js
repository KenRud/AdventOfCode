var md5 = require('./md5.js').md5;

var input = 'bgvyzdsv';

var num = 1;
while (!md5(input + num).startsWith('000000')) {
    num++;
}

console.log(md5(input + num), ':', num);