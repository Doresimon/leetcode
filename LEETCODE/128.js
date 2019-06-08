/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let max = 0;
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];

        if (map[e]) continue;

        map[e] = 1;

        if (map[e + 1]) map[e] += map[e + 1];
        if (map[e - 1]) map[e] += map[e - 1];
        if (map[e + 1]) map[e + map[e + 1]] = map[e];;
        if (map[e - 1]) map[e - map[e - 1]] = map[e];;

        if (max < map[e]) max = map[e];
    }

    return max;

};
let arr = [1, 3, 5, 2, 4]
let ret = longestConsecutive(arr);
console.log(ret)