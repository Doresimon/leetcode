var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var T_now = null; // num of Test Case
var T = null; // num of Test Case
var A = null;
var B = null;
var wait_AB = true;
var wait_N = true;

rl.on('line', function(line) {
    if (!T) {
        T = Number(line);
    } else {
        if (wait_AB === true) {
            var range = line.split(' ');
            A = Number(range[0]);
            B = Number(range[1]);
            wait_AB = false;
            return;
        }
        if (wait_N === true) {
            // N ???
            wait_N = false;
            console.log((A + B) >> 1); // guess~~
            return;
        }
        main(line);
    }
}).on('close', function() {
    process.exit(0);
});

/**
 *
 * @param {*} res
 */
function main(res) {
    if (res === 'CORRECT') {
        wait_AB = true;
        wait_N = true;
        T_now++;
        if (T_now === T) {
            rl.close();
        }
        return;
    }

    if (res === 'TOO_BIG') {
        B = ((A + B) >> 1) - 1;
        console.log((A + B) >> 1);
        return;
    }

    if (res === 'TOO_SMALL') {
        A = ((A + B) >> 1) + 1;
        console.log((A + B) >> 1);
        return;
    }
}
