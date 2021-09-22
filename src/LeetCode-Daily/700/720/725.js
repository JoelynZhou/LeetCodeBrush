/**
 * 725. 分隔链表
 * 思路：切割链表，先按 k 均分，余数 r（<k）均分在前 r 个分组上
 * 时间复杂度：O(n)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
	// 遍历获取链表长度
	let cnt = 0;
	let temp = head;
	while (temp !== null) {
		cnt++;
		temp = temp.next;
	}
	let quotient = Math.floor(cnt / k); //每组的平均数
	let remainder = cnt % k; //待均摊的余数
	const parts = new Array(k).fill(null); // 用于存储结果链表的数组
	let curr = head; // 指针指向当前链表头部
	for (let i = 0; i < k && curr !== null; i++) {
		parts[i] = curr;
		let partSize = quotient + (i < remainder ? 1 : 0); //计算当前链表是否需要均摊余数
		for (let j = 1; j < partSize; j++) {
			curr = curr.next; //指针后移
		}
		const next = curr.next; //存储当前指针为头部的链表
		curr.next = null; //切断指针
		curr = next; //更新链表头部
	}
	return parts;
};
