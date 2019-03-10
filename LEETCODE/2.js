/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * 遍历相加
 * 通过	176 ms	19.7 MB	javascript
 *
 * 执行用时: 176 ms, 在Add Two Numbers的JavaScript提交中击败了62.69% 的用户
 * 内存消耗: 19.7 MB, 在Add Two Numbers的JavaScript提交中击败了9.00% 的用户
 */
var addTwoNumbers = function(l1, l2) {
    const ret = {};
    let node = ret;
    let up = 0;
    let A, B, C;
    let loop = true;
    while (loop) {
        A = l1 ? l1.val : 0;
        B = l2 ? l2.val : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

        loop = l1 || l2;

        C = A + B + up;
        up = C >= 10 ? 1 : 0;
        C = C - 10 * up;

        node.val = C;
        if (loop) {
            node.next = {};
            node = node.next;
        } else {
            node.next = null;
        }
    }
    if (up === 1) {
        node.next = {};
        node = node.next;
        node.val = up;
        node.next = null;
    }

    return ret;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * 转换为数字
 *
 * 解答错误
 *
 * 输入
 * [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 * [5,6,4]
 * 输出
 * [0,3,NaN,NaN,1]
 * 预期结果
 * [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 *
 * ## 超出最大数字限制.
 */
var addTwoNumbers = function(l1, l2) {
    const ret = {};
    let node = ret;
    let A = '',
        B = '';
    while (l1) {
        A = `${l1.val}${A}`;
        l1 = l1.next;
    }
    while (l2) {
        B = `${l2.val}${B}`;
        l2 = l2.next;
    }
    let C = `${parseInt(A) + parseInt(B)}`;

    for (let i = C.length - 1; i >= 0; i--) {
        const e = C[i];
        node.val = e;
        if (i !== 0) {
            node.next = {};
            node = node.next;
        } else {
            node.next = null;
        }
    }
    return ret;
};
