// To check Palindrome OR Not

//Anonymous Function
const strings = ["level", "hello", "racecar", "world", "madam", "malayalam"];

const palindromes = strings.filter(function (string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
});

console.log(palindromes);


//IIFE Function
(function () {
    const strings = ["level", "hello", "racecar", "world", "madam", "malayalam"];

    const palindromes = strings.filter(function (string) {
        const reversedString = string.split('').reverse().join('');
        return string === reversedString;
    });

    console.log(palindromes);
})();