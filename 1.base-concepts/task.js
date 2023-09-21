"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d > 0) {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  } else if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  }
  
  return arr;
}

const roots = solveEquation(4, -5, 1);
console.log(roots);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const monthlyInterestRate = percent / 100 / 12;

  const loanBody = amount - contribution;


  const monthlyPayment =
    loanBody *
    (monthlyInterestRate +
      monthlyInterestRate /
      (Math.pow(1 + monthlyInterestRate, countMonths) - 1));


  const totalPayment = monthlyPayment * countMonths;


  const roundedTotalPayment = parseFloat(totalPayment.toFixed(2));

  return roundedTotalPayment;
}


console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));