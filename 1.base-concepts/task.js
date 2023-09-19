"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

const roots = solveEquation(1, -3, 2);
console.log(roots);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
 }