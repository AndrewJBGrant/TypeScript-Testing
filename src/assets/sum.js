// function add(a, b) {
//   return a * b;
// }

// console.log(add(6, 16));

// console.log("Hello look at us building tests!

// const str = "today i am learning to test with typescript"

// const arr = str.split(" ");

// /* console.log(splitStr); */

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// const str2 = arr.join(" ");

// console.log(str2);

// const str = "Hello World";

// const splitString = str.split(" ");

// console.log(splitString);

// const reverseString = splitString.reverse();

// console.log(reverseString);

// const newString = reverseString.join(" ");

// console.log(newString);

// function reverse_string(string) {
// const newString = string.split(" ").reverse().join(" ")
// return newString
// }

// console.log(reverse_string("Hello World"));

// function reverse_string(s) {
//   let newString = '';

//   for(let i = s.length - 1; i >= 0; i--)
//   newString += s[i];

// return newString;
// }

// console.log(reverse_string("Hello World"));

function reverse_string_with_reversed_words(s) {
  let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  let words = reversedString.split(" ");
  let reversedWords = words.map((word) => {
    return reverse_string(word);
  });

  return reversedWords.join(" ");
}

function reverse_string(s) {
  let newString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }
  return newString;
}

console.log(reverse_string_with_reversed_words("today i am learning typeScript tests"));
