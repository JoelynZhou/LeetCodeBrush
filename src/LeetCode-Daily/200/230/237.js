/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 237. 删除链表中的节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
	node.val = node.next.val; // 将当前节点的值修改成下一个节点的值
	node.next = node.next.next; // 删掉下一个节点
};
