const fs = require('fs');
const jsc = require('assert');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    if(n <= 2) return 1;
    else return fibTest(n-1) + fibTest(n-2);
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(tailfib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
