//To print odd Number Using Anonymous Function

//Anonymous Function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
})


    // IIFE Function

    (function () {
        let IIFEnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        IIFEnumbers.forEach(function (num) {
            if (num % 2 !== 0) {
                console.log(num);
            }
        });
    })();