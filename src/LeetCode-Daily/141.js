/**
 * 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * 龟兔赛跑，如果有环，两者一定会相遇
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow && fast) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next?.next;
    }
    return false;
};