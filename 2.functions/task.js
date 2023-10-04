//1 задание
function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	} {
		avg = parseFloat((sum / arr.length).toFixed(2));
	}
	
	return {
		min: min,
		max: max,
		avg: avg
	};
}


// 2 задание

function summElementsWorker(...arr) {

	const sumOfNumbers = arr.reduce((acc, number) => acc + number, 0);

	return sumOfNumbers;
}

function differenceMaxMinWorker(...arr) {

	let min = Infinity;
	let max = -Infinity;


	if (arr.length === 0) {
	
	return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) min = arr[i];
		if (max < arr[i]) max = arr[i];
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;


	if (arr.length === 0) {
		
	return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) sumEvenElement += arr[i];
		else sumOddElement += arr[i];
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;


	if (arr.length === 0) {
		
	return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

// 3 задание 

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let res;
	let numbers;

	if (arrOfArr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arrOfArr.length; i++) {
		numbers = arrOfArr[i];
		res = func(...numbers);
		if (res > maxWorkerResult) maxWorkerResult = res;
	}

	return maxWorkerResult;
}

console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72