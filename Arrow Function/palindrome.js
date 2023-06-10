const strings = ["level", "hello", "racecar", "world", "madam","malayalam"];

const palindrome = strings.filter((string) => {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
});

console.log(palindrome);