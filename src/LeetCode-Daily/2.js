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
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    let p1 = l1,
        p2 = l2;
    let p3 = new ListNode(0);
    let p3Cache = p3;
    while (p1 !== null || p2 !== null) {
        let carry = 0;
        if (p1 !== null) {
            carry += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            carry += p2.val;
            p2 = p2.next;
        }
        p3.val += carry % 10;
        carry = Math.floor(carry / 10);
        if (p1 === null && p2 === null && carry === 0) break;

        p3.next = new ListNode(carry);
        p3 = p3.next;
    }
    return p3Cache;
};

var input1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};
var input2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 1,
                next: null
            }
        }
    }
};
const resp = addTwoNumbers(input1, input2);
console.log("resp", resp);