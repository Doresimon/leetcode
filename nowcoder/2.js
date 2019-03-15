var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var user_num = null;
var user_ks = null;
var T = null;
var T_now = 1;
var map = null;

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
  const tail = map[k].length - 1;
  if (map[k][0] > r || map[k][tail] < l) {
    console.log(0);
  } else {
    let left;
    let right;
    if (map[k][tail] < r) {
      right = [tail, tail];
    } else {
      right = binary_search(map[k], r);
    }

    if (map[k][0] > l) {
      left = [0, 0];
    } else {
      left = binary_search(map[k], l);
    }

    console.log(right[0] - left[1] + 1);
  }
}

function build_map(ks) {
  var _map = {};

  for (var i = 0; i < ks.length; i++) {
    if (!_map[ks[i]]) {
      _map[ks[i]] = [];
    }

    _map[ks[i]].push(i);
  }

  return _map;
}

function binary_search(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  let t = 0;

  while (true) {
    t = (i + j) >> 1;

    if (arr[t] === target) {
      return [t, t];
    }
    if (arr[t] < target) {
      i = t;
    } else {
      j = t;
    }
    if (j - i < 2) {
      return [i, j];
    }
  }
}
