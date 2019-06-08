var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var user_num = null;
var user_ks = null;
var T = null;
var T_now = 1;

rl.on("line", function(line) {
  if (!user_num) {
    user_num = Number(line);
  } else {
    if (!user_ks) {
      user_ks = line.split(" ").map(function(e) {
        return Number(e);
      });
      return;
    }
    if (!T) {
      T = Number(line);
      return;
    }

    var inputs = line.split(" ").map(function(e) {
      return Number(e);
    });

    main(inputs[0] - 1, inputs[1] - 1, inputs[2]);

    if (T_now++ === T) {
      rl.close();
    }
  }
}).on("close", function() {
  process.exit(0);
});

/**
 *
 * @param {*}
 */
function main(l, r, k) {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    const e = user_ks[i];
    if (e === k) {
      sum++;
    }
  }
  console.log(sum);
  return sum;
}
