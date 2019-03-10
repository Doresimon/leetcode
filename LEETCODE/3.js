/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let sub_max;
    let inner;
    let left, right;

    const len = s.length;
    for (let i = 0; i < len; i++) {
        left = s[i];
        sub_max = 0;
        inner = {};
        for (let j = i; j < len; j++) {
            right = s[j];
            if (inner[right] === true) {
                break;
            }
            sub_max++;
            inner[right] = true;
        }
        if (sub_max > max) {
            max = sub_max;
        }
    }

    return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let min = {};
    let last_hit_index = -1;

    const len = s.length;
    for (let i = 0; i < len; i++) {
        p = s[i];

        if (!min[p]) {
            min[p] = {
                v: i - last_hit_index,
                index: i,
                dirty: false
            };
        } else {
            if (min[p].dirty) {
                min[p].dirty = false;
                min[p].v = i - last_hit_index;
            } else {
                min[p].v = i - min[p].index;
            }

            for (const key in min) {
                if (min[key].index < min[p].index) {
                    min[key].dirty = true;
                }
            }
            last_hit_index =
                min[p].index > last_hit_index ? min[p].index : last_hit_index;
            min[p].index = i;
        }

        if (max < min[p].v) {
            max = min[p].v;
        }
    }

    for (const key in min) {
        if (!min[key].dirty) {
            if (max < len - min[key].index) {
                max = len - min[key].index;
            }
        }
    }

    return max;
};

const arg = 'alouzxilkaxkufsu';

const ret = lengthOfLongestSubstring(arg);
console.log(ret);
