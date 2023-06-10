//To check Prime NUmber

//Anonymous Function

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter--Returns the elements of an array that meet the condition specified in a callback function.
const primeNumbers = numbers.filter(function (number) {
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

//IIFE Function

(function () {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    // filter--Returns the elements of an array that meet the condition specified in a callback function.
    const primeNumbers = numbers.filter(function (number) {
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
})();
