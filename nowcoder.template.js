// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = '';
var input_array = '';

process.stdin.on('data', function(data) {
    input += data;
});

process.stdin.on('end', function() {
    input_array = input.split('\n');
    var nLine = 0;

    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');
        var a = +input_arrays[0];
        var b = +input_arrays[1];
        console.log(a + b);
    }
});

// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = -1; // 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line) {
    // javascript每行数据的回调接口
    if (n < 0) {
        // 测试用例第一行读取n
        n = parseInt(line.trim());
    } else {
        // 矩阵数据读取
        var tokens = line.split(' ');
        for (var i = 0; i < tokens.length; ++i) {
            // 题目逻辑求和，边读取边计算
            ans += parseInt(tokens[i]);
        }
        // 记录当前读取的行数
        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (n === cur_line) {
        // 输出结果
        console.log(ans);
        // 重新初始化相关变量
        n = -1;
        ans = 0;
        cur_line = 0;
    }
});
