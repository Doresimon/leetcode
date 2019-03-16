let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

let user_num = null;
let user_ks = null;
let T = null;
let T_now = 1;
let map = null;

rl.on("line", function(line) {
  if (!user_num) {
    user_num = Number(line);
  } else {
    if (!user_ks) {
      user_ks = line.split(" ").map(function(e) {
        return Number(e);
      });
      map = build_map(user_ks);
      return;
    }
    if (!T) {
      T = Number(line);
      return;
    }

    let inputs = line.split(" ").map(function(e) {
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
  let count = 0;
  let e = 0;
  if (!map[k]) {
    console.log(0);
    return;
  }
  for (let i = 0; i < map[k].length; i++) {
    e = map[k][i];
    if (l <= e && e <= r) {
      count++;
    }
  }
  console.log(count);
  return;
}

function build_map(ks) {
  let _map = {};

  for (let i = 0; i < ks.length; i++) {
    if (!_map[ks[i]]) {
      _map[ks[i]] = [];
    }

    _map[ks[i]].push(i);
  }

  return _map;
}
