/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路 1：遍历A存 set，遍历 B 是否存在于set
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB && !set.has(headB)) {
        headB = headB.next;
    }
    return headB;
};