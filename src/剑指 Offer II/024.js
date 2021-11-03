/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 剑指 Offer II 024. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null;
	let curr = head;
	while (curr) {
		const next = curr.next; //保存 next 指针
		curr.next = prev; //改变 curr 的指向
		prev = curr; //两指针右移
		curr = next; //两指针右移
	} //curr 指向 null，返回 prev
	return prev;
};
