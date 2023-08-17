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


// const people = [
//   { firstName: "Aaron", lastName: "Smith" },
//   { firstName: "Émile", lastName: "Zola" },
//   { firstName: "Charlotte", lastName: "Brown" },
//   { firstName: "Beyoncé", lastName: "Knowles" },
//   { firstName: "Ólafur", lastName: "Arnalds" },
//   { firstName: "David", lastName: "Jones" },
//   { firstName: "Zoë", lastName: "Deschanel" },
// ];

// function sortAlphabetically(arr) {
//   return arr.sort((a, b) => {
//     if (a.firstName < b.firstName) {
//       return -1;
//     }

//     if (a.firstName > b.firstName) {
//       return 1;
//     }

//     return 0;
//   });
// }

// console.log(sortAlphabetically(people));



const dates = [
  { date: "2023-05-17"},
  { date: "2023-04-12"},
  { date: "2023-01-11" },
  { date: "2023-03-22" },
  { date: "2023-02-27" },
]


function sortDates(arr) {
  return arr.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }

    if (a.date > b.date) {
      return 1;
    }

    return 0;
  });
}

console.log(sortDates(dates));


  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

// let date = new Date();
// console.log(date);
