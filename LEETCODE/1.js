/**
 * https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 暴力搜索
 * - 双重 for
 * - O(n^2)
 *
 * 420 ms	15.4 MB	javascript
 *
 * 执行用时: 420 ms, 在Two Sum的JavaScript提交中击败了10.44% 的用户
 * 内存消耗: 15.4 MB, 在Two Sum的JavaScript提交中击败了3.89% 的用户
 */
var twoSum = function(nums, target) {
    const ret = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ret.push(i);
                ret.push(j);
                return ret;
            }
        }
    }

    return ret;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 哈希表(map)
 * O(n)
 *
 * 通过	124 ms	19.8 MB	javascript
 *
 * 执行用时: 124 ms, 在Two Sum的JavaScript提交中击败了73.71% 的用户
 * 内存消耗: 19.8 MB, 在Two Sum的JavaScript提交中击败了2.71% 的用户
 */
var twoSum = function(nums, target) {
    const map = {};
    const ret = [];

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i];
        if (map[key]) {
            for (let j = 0; j < map[key].length; j++) {
                const _i = map[key][j];
                if (i != _i) {
                    ret.push(i);
                    ret.push(_i);
                    return ret;
                }
            }
        }
    }
    return ret;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 哈希表(map)
 * O(n)
 *
 * 通过	140 ms	18.6 MB	javascript
 *
 * 执行用时: 124 ms, 在Two Sum的JavaScript提交中击败了73.71% 的用户
 * 内存消耗: 19.8 MB, 在Two Sum的JavaScript提交中击败了2.71% 的用户
 */
var twoSum = function(nums, target) {
    const map = {};
    const ret = [];

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];
        const _key = target - nums[i];

        if (map[_key]) {
            for (let j = 0; j < map[_key].length; j++) {
                const _i = map[_key][j];
                if (i != _i) {
                    ret.push(i);
                    ret.push(_i);
                    return ret;
                }
            }
        }

        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(i);
    }

    return ret;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 哈希表(map)
 * O(n)
 *
 * 通过	96 ms	16 MB	javascript
 *
 * 执行用时: 96 ms, 在Two Sum的JavaScript提交中击败了81.53% 的用户
 * 内存消耗: 16 MB, 在Two Sum的JavaScript提交中击败了3.65% 的用户
 */
var twoSum = function(nums, target) {
    const map = {};
    const ret = [];

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];
        const _key = target - key;

        if (map[_key] !== undefined) {
            ret.push(i);
            ret.push(map[_key]);
            return ret;
        }

        map[key] = i;
    }

    return ret;
};
