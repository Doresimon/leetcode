// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var N = -1; // 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line) {
    // javascript每行数据的回调接口
    if (N < 0) {
        // 测试用例第一行读取n
        N = parseInt(line.trim());
    } else {
        let str = line.trim();

        let ans = main(str);

        console.log(ans);

        // 记录当前读取的行数
        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (N === cur_line) {
        // 输出结果
        // 重新初始化相关变量
        N = -1;
        ans = 0;
        cur_line = 0;

        return;
    }
});

function main(str) {
    let ret = '';

    let four = [{}, {}, {}, {}];

    a = 0;
    b = 1;
    c = 2;
    d = 3;

    for (let i = 0; i < str.length; i++) {
        // const e = str[i];
        if (str[a] === str[b]) {
            if (str[b] === str[c]) {
                // case 2
                c++;
                d++;
                continue;
            }

            if (str[c] === str[d]) {
                // case 1
                d++;
                continue;
            }
        }
        ret += str[a];
        a = b;
        b = c;
        c = d;
        d++;
    }

    if (str[a]) {
        ret += str[a];
    }
    if (str[b]) {
        ret += str[b];
    }
    if (str[c]) {
        ret += str[c];
    }
    if (str[d]) {
        ret += str[d];
    }

    return ret;
}
