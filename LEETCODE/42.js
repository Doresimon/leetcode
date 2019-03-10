/**
 * @param {number[]} height
 * @return {number}
 *
 * 315 / 315 个通过测试用例
 * 状态：通过
 * 执行用时：204 ms
 */
var trap = function(height) {
    let sum = 0;
    for (let i = 1; i < height.length - 1; i++) {
        const e = height[i];
        let left = e;
        let right = e;
        for (let j = i; j >= 0; j--) {
            left = height[j] > left ? height[j] : left;
        }
        for (let j = i; j < height.length; j++) {
            right = height[j] > right ? height[j] : right;
        }

        let highest = right < left ? right : left;
        let v = highest - e;
        sum += v;
    }
    return sum;
};

/**
 * @param {number[]} height
 * @return {number}
 *
 * 315 / 315 个通过测试用例
 * 状态：通过
 * 执行用时：96 ms
 */
var trap = function(height) {
    let sum = 0;
    let sum_water = 0;
    let sum_blank = 0;
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        sum += height[i];
    }

    for (let i = 0; i < height.length; i++) {
        const e = height[i];
        if (e > max) {
            sum_blank += (e - max) * i;
            max = e;
        }
    }

    max = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        const e = height[i];
        if (e > max) {
            sum_blank += (e - max) * (height.length - 1 - i);
            max = e;
        }
    }
    sum_water = max * height.length - sum_blank - sum;
    return sum_water;
};
