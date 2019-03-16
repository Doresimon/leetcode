// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var N = -1; // 初始状态为负数，表示还没开始读取
rl.on('line', function(line) {
    // javascript每行数据的回调接口
    if (N < 0) {
        // 测试用例第一行读取n
        N = parseInt(line.trim());
    }

    const ans = main(1024 - N);
    console.log(ans);

    return;
});

function main(target) {
    let ret = 0;
    let coin_num = 0;

    coin_num = target >> 6;
    ret += coin_num;
    target = target % 64;

    coin_num = target >> 4;
    ret += coin_num;
    target = target % 16;

    coin_num = target >> 2;
    ret += coin_num;
    target = target % 4;

    coin_num = target;
    ret += coin_num;
    target = target % 1;

    return ret;
}
