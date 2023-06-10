const numbers = [1, 2, 3, 4, 5, 9, 4, 6];

const sum = numbers.reduce((firstValue, secondValue) => firstValue + secondValue, 0);

console.log(sum);