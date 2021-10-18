/**
 * 5885. 使每位学生都有座位的最少移动次数
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
	let cnt = 0;
	seats = seats.sort((a, b) => a - b);
	students = students.sort((a, b) => a - b);
	for (let i = 0; i < seats.length; i++) {
		cnt += Math.abs(seats[i] - students[i]);
	}
	return cnt;
};
