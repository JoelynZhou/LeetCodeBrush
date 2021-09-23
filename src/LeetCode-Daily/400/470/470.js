/**
 * 470. 用 Rand7() 实现 Rand10()
 * 解析：https://leetcode-cn.com/problems/implement-rand10-using-rand7/solution/cong-zui-ji-chu-de-jiang-qi-ru-he-zuo-dao-jun-yun-/
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
	while (true) {
		let num = (rand7() - 1) * 7 + rand7(); //等概率生成[1,49]范围的随机数
		if (num <= 40) {
			//拒绝采样
			return (num % 10) + 1; //返回[1,10]范围的随机数
		}
	}
};

var rand10 = function () {
	while (true) {
		let a = rand7();
		let b = rand7();
		let num = (a - 1) * 7 + b; //rand49
		if (num <= 40) return (num % 10) + 1; //拒绝采样
		//num在[41-49]
		a = num - 40; //rand9
		b = rand7();
		num = (a - 1) * 7 + b; //rand63
		if (num <= 60) return (num % 10) + 1; //拒绝采样
		//num在[61-63]
		a = num - 60; //rand3
		b = rand7();
		num = (a - 1) * 7 + b; //rand21
		if (num <= 20) return (num % 10) + 1; //拒绝采样
	}
};
