// Median of the array

//Anonymous Function

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

// Define the anonymous function
const findMedian = function () {
    // Concatenate the arrays
    const mergedArray = array1.concat(array2);
    const sortedArray = mergedArray.sort(function (a, b) {
        return a - b;
    });

    // Calculate the median
    const median = (sortedArray[Math.floor(sortedArray.length / 2)] + sortedArray[Math.floor((sortedArray.length - 1) / 2)]) / 2;

    return median;
};

// Call the anonymous function and store the result
const medianResult = findMedian();

console.log(medianResult);

//IIFE Function

(function () {
    const array1 = [1, 3, 5];
    const array2 = [2, 4, 6];

    // Concatenate the arrays
    const mergedArray = array1.concat(array2);
    const sortedArray = mergedArray.sort(function (a, b) {
        return a - b;
    });

    // Calculate the median
    const median = (sortedArray[Math.floor(sortedArray.length / 2)] + sortedArray[Math.floor((sortedArray.length - 1) / 2)]) / 2;

    console.log(median);
})();