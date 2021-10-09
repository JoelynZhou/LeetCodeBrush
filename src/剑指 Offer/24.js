/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//迭代法(双指针)
var reverseList = function(head) {
	let curr = null; // 左指针
	let prev = head; // 右指针
	while (prev) {
		const next = prev.next;
        prev.next = curr; // 左箭头
		curr = prev; // 左指针右移
		prev = next; // 右指针右移
	}
	return curr;
};
