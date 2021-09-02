/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路一：hashMap存储链表及当前节点位置
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let cnt = 0;
	let hashMap = new Map();
	while (head?.val >= 0) {
		hashMap.set(cnt, head);
		head = head.next;
		cnt++;
	}
	const id = cnt - k;
	if (hashMap.has(id)) {
		return hashMap.get(id);
	} else {
		return null;
	}
};

/**
 * 思路二（优雅）：快慢指针
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd2 = function (head, k) {
	let fast = head;
	let slow = head;
	while (fast && k > 0) {
		fast = fast.next;
		k--;
	}
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
};
