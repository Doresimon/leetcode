var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var T_now = 1; // num of inputed test case
var T = null; // num of Total Test Case

// var T_now = 0; // num of inputed test case
// var N = null; // num of Total Test Case
// N, K, x1, y1, C, D, E1, E2 and F
// var wait_N = true;

rl.on('line', function(line) {
    if (!T) {
        T = Number(line);
    } else {
        // if (wait_N) {
        //     N = Number(line);
        //     wait_N = false;
        //     return;
        // }
        var inputs = line.split(' ').map(function(e) {
            return Number(e);
        });
        console.log(inputs);

        // N, K, x1, y1, C, D, E1, E2 and F
        F = inputs.pop();
        E2 = inputs.pop();
        E1 = inputs.pop();
        D = inputs.pop();
        C = inputs.pop();
        y1 = inputs.pop();
        x1 = inputs.pop();
        K = inputs.pop();
        N = inputs.pop();
        console.log(N);

        A = cal_A(N, x1, y1, C, D, E1, E2, F);

        console.log(A);

        sum += cal_POWER(i, A);

        // var ret = main(scores);

        // console.log(`Case #${T_now}: ${ret}`);

        // wait_N = true;

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

function cal_A(N, x, y, C, D, E1, E2, F) {
    var A = [];
    var tx, ty;

    A.push((x + y) % F);

    for (var i = 2; i <= N; i++) {
        tx = x;
        ty = y;

        x = (C * tx + D * ty + E1) % F;
        y = (D * tx + C * ty + E2) % F;

        A.push((x + y) % F);
    }

    return A;
}
function cal_POWER(power, A) {
    var sum = 0;

    for (i = 0; i < A.length; i++) {
        const element = array[i];
    }

    sum += A[left];
}
