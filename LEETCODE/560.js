/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 80 / 80 个通过测试用例
 * 状态：通过
 * 执行用时：588 ms
 */
var subarraySum = function(nums, k) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum == k) {
                cnt++;
            }
        }
    }
    return cnt;
};
