const stringArray = ["hello", "world", "javascript"];

const titleCaseArray = stringArray.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseArray);