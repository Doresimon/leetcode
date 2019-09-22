var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var T = null; // num of Test Case
var N = null;
var Q = null;

var lineArr = null;
var As = null;
var Qs = null;

rl.on('line', function (line) {
    if (T === null) {
        T = Number(line);
        return
    }

    if (N === null) {
        lineArr = line.split(" ").map(v => Number(v))
        N = lineArr[0];
        Q = lineArr[1];
        return
    }

    if (As === null) {
        lineArr = line.split(" ").map(v => Number(v))
        As = []
        for (const it of lineArr) {
            As.push(it)
        }
        Qs = []
        return
    }

    if (Q !== 0) {
        lineArr = line.split(" ").map(v => Number(v))
        Qs.push(lineArr)
        Q--
        return
    }

    main(As, N, Q, Qs)

    As = null;
    Qs = null;
    N = null;
    Q = null;
    T--

}).on('close', function () {
    process.exit(0);
});

/**
 *
2
4 3
10 21 3 7
1 13
0 32
2 22
5 1
14 1 15 20 26
4 26

 */
function main(As, N, Q, Qs) {
    console.log("As", As)
    console.log("N", N)
    console.log("Q", Q)
    console.log("Qs", Qs)
}
