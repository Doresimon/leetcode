/**
 * [BAD_PROBLEM]
 *
 *
 * 通过	160 ms	17.9 MB	javascript
 * 执行用时: 160 ms, 在String to Integer (atoi)的JavaScript提交中击败了16.05% 的用户
 * 内存消耗: 17.9 MB, 在String to Integer (atoi)的JavaScript提交中击败了1.26% 的用户
 *
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = 0b01111111111111111111111111111111;
    const INT_MIN = -0b10000000000000000000000000000000;
    const num_map = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    };
    const sign_map = {
        '-': false,
        '+': true
    };
    let nums = [];
    let num, key, index;
    let positive = true;

    for (index = 0; index < str.length; index++) {
        if (str[index] != ' ') {
            key = str[index];
            break;
        }
    }

    if (sign_map[key] !== undefined) {
        positive = sign_map[key];
    } else if (num_map[key] !== undefined) {
        nums.push(num_map[key]);
    } else {
        return 0;
    }

    for (let i = index + 1; i < str.length; i++) {
        num = num_map[str[i]];
        if (num !== undefined) {
            nums.push(num);
        } else {
            break;
        }
    }

    let ret = 0;
    let times = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ret += nums[i] * times;
        times *= 10;
    }

    if (!positive) {
        ret = -ret;
    }

    ret = ret > INT_MAX ? INT_MAX : ret;
    ret = ret < INT_MIN ? INT_MIN : ret;

    return ret;
};
