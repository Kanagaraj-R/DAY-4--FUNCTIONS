

//filter-->Returns the elements of an array that meet the condition specified in a callback function.-- To remove the duplicates.

//Anonymous Function

const array = [1, 2, 3, 2, 4, 3, 5, 6, 1, 7, 5, 8, 8, 9];
const uniqueArray = array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

console.log(uniqueArray);

//IIFE Function

const arrayIIFE = [1, 2, 3, 2, 4, 3, 5, 6, 1, 7, 5, 8, 8, 9];
var uniqueArrayIIFE = (function () {
    return array.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
})();

console.log(uniqueArray);