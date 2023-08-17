// Imports
import { it, expect } from 'vitest';

// Tests
// describe('Renders main page correctly', async () => {
//     it('Should render the page correctly', async () => {
//         expect(true).toBeTruthy();
//     });
// });

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   isAdmin: boolean;
// }
// /**
//  * How do we ensure that defaultUser is of type User
//  * at THIS LINE - not further down in the code?
//  */
// const defaultUser: User = {
//   id: 1,
//   firstName: "Andy",
//   lastName: "Grant",
//   isAdmin: false
// };

// const getUserId = (user: User) => {
//   return user.id;
// };

// it("Should get the user id", () => {
//   expect(getUserId(defaultUser)).toEqual(1);
// });

// const getUserFirstName = (user: User) => {
//   return user.firstName;
// };

// it("Should get the user info", () => {
//   expect(getUserFirstName(defaultUser)).toEqual("Andy");
// });

// export const addTwoNumbers = (params: { first: number, second: number}) => {
//   return params.first + params.second;
// };

// it("I want it to add the two numbers together", () => {
//   expect(
//     addTwoNumbers({
//       first: 4,
//       second: 4,
//     }),
//   ).toEqual(8);

//    expect(
//      addTwoNumbers({
//        first: 10,
//        second: 20,
//      }),
//    ).toEqual(30);
// });

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   role: "admin" | "user" | "super-admin";
//   posts: Array<Post>;
// }

// interface Post {
//   id: number;
//   title: string;
// }

// /**
//  * How do we ensure that makeUser ALWAYS
//  * returns a user?
//  */
// const makeUser = (): User => {
//   return {
//     id: 2,
//     firstName: 'Katya',
//     lastName: 'Sitko',
//     role: 'super-admin',
//     posts: [
//       {
//       id: 1,
//       title: 'hello my first post',
//       }
//     ],

//   };
// };

// it("Should return a valid user", () => {
//   const user = makeUser();

//   expect(user.id).toBeTypeOf("number");
//   expect(user.firstName).toBeTypeOf("string");
//   expect(user.lastName).toBeTypeOf("string");
//   expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

//   expect(user.posts[0].id).toBeTypeOf("number");
//   expect(user.posts[0].title).toBeTypeOf("string");
// });

// function sum_char_codes(n: string): number {
//   let sum = 0;
//   for (let i = 0; i < n.length; ++i) {
//     sum += n.charCodeAt(i)
//   }

//   return sum;
// }

// console.log(sum_char_codes("hello"))

// const str = "today i am learning to test with typescript"

// const splitStr = str.split(" ");

// console.log(splitStr);

// for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
// }

// const str2 = splitStr.join(" ");

// console.log(str2);




function first_letter_caps(n: string) {
const arr = n.split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const capString = arr.join(" ")

return capString
}
 it("I want the first letters in caps", () => {
   expect(
     first_letter_caps(
       "hello world"
     ),
   ).toEqual("Hello World");

    expect(
      first_letter_caps(
      "today i am learning typeScript tests"
      ),
    ).toEqual("Today I Am Learning TypeScript Tests");
 });




function reverse_string_words(s: string) {
  let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  const words = reversedString.split(" ");
  const reversedWords = words.map((word) => {
    return reverse_string(word);
  });

  return reversedWords.join(" ");
}

function reverse_string(s: string) {
  let newString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }
  return newString;
}

 it("I want to reverse the word", () => {
   expect(
     reverse_string_words(
       "Hello World"
     ),
   ).toEqual("World Hello");

    expect(
      reverse_string_words(
      "today i am learning typeScript tests"
      ),
    ).toEqual("tests typeScript learning am i today");
 });



const dates = [
  { date: "2023-05-17"},
  { date: "2023-04-12"},
  { date: "2023-01-11" },
  { date: "2023-03-22" },
  { date: "2023-02-27" },
]


function sortDates(arr: typeof dates) {
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

 it("Organize the dates", () => {
   expect(
     sortDates([{
       date:  "2023-05-17"},
    {date: "2023-04-12"},
    {date: "2023-01-11"} ,
    {date: "2023-03-22"} ,
    {date: "2023-02-27"}]
     ),
   ).toEqual([
  { date: '2023-01-11' },
  { date: '2023-02-27' },
  { date: '2023-03-22' },
  { date: '2023-04-12' },
  { date: '2023-05-17' }
]);

 });
