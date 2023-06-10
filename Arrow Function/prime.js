const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter((number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(primeNumbers);