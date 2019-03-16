// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var N = -1; // 初始状态为负数，表示还没开始读取
var T = null; // 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_case = 0;
rl.on('line', function(line) {
    // javascript每行数据的回调接口
    if (N < 0) {
        // 测试用例第一行读取n
        N = parseInt(line.trim());
    } else {
        if (!T) {
            T = Number(line);
            return;
        }
        line = line.trim();
        line = line[line.length - 1] + ' ' + line + ' ' + line[0];

        let scores = line.split(' ');

        let ans = main(scores);

        console.log(ans);

        T = null;

        // 记录当前读取的行数
        cur_case += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_case === 1来判断
    if (N === cur_case) {
        // 输出结果
        // 重新初始化相关变量
        N = -1;
        ans = 0;
        cur_case = 0;

        return;
    }
});

function main(scores) {
    let hit = 0;
    let sum = 0;
    let cnt = 0;

    let updown_now = 0;
    let updown = 0;

    for (let i = 1; i < scores.length - 1; i++) {
        let j = i;
        for (; true; j++) {
            if (scores[j + 1] - scores[j] === 0) {
                updown_now = 0;
                if (updown === 0) {
                    cnt += 0;
                }
            }
            if (scores[j + 1] - scores[j] > 0) {
                updown_now = 1;
            }
            if (scores[j + 1] - scores[j] < 0) {
                updown_now = -1;
            }

            if (updown_now !== updown) {
                if (updown !== 1) {
                    sum += j - hit;
                } else {
                    if (updown_now === 0) {
                        sum += j - hit;
                    }
                    if (updown_now === -1) {
                        hit = j;
                    }
                }
                sum += ((cnt - 1) * (cnt - 2)) >> 1;
                break;
            }
        }

        i = j;
    }

    return sum + scores.length;
}
