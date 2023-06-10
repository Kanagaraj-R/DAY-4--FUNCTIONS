//Convert all the strings to title caps in a string array

//Anonymous Function

const stringArray = ["hello", "world", "javascript"];

const titleCaseArray = stringArray.map(function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseArray);

//IIFE Function

var stringArrayIIFE = ["hello", "world", "javascript"];

(function () {
  for (var i = 0; i < stringArrayIIFE.length; i++) {
    stringArrayIIFE[i] = stringArrayIIFE[i].charAt(0).toUpperCase() + stringArrayIIFE[i].slice(1).toLowerCase();
  }
})();

console.log(stringArrayIIFE);