var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var T_now = 1; // num of inputed test case
var T = null; // num of Total Test Case

// var T_now = 0; // num of inputed test case
var N = null; // num of Total Test Case

var wait_N = true;

rl.on('line', function(line) {
    if (!T) {
        T = Number(line);
    } else {
        if (wait_N) {
            N = Number(line);
            wait_N = false;
            return;
        }

        var scores = line.split('').map(function(e) {
            return Number(e);
        });
        var ret = main(scores);

        console.log(`Case #${T_now}: ${ret}`);

        wait_N = true;

        if (T_now++ === T) {
            rl.close();
        }
    }
}).on('close', function() {
    process.exit(0);
});

/**
 *
 * @param {*} scores
 */
function main(scores) {
    var len = Math.ceil(N / 2);
    var sum = 0;
    var i, j;

    for (i = 0; i < len; i++) {
        sum += scores[i];
    }
    var max = sum;

    for (i = 0, j = len; j < scores.length; i++, j++) {
        sum = sum + scores[j] - scores[i];
        max = sum > max ? sum : max;
    }

    return max;
}
