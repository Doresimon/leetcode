var num_array = [1, 10, 2, 9, 3, 8, 4, 7, 6];

num_array.sort();
console.log('default', num_array); //

num_array.sort();
console.log('default', num_array); //

const sort_func_big_small = function(x, y) {
    return y - x;
};
const sort_func_small_big = function(x, y) {
    return x - y;
};

num_array.sort(sort_func_big_small);
console.log('desc', num_array); //

num_array.sort(sort_func_small_big);
console.log('asc', num_array); //
