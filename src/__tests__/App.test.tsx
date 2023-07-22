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
//   return params.first * params.second;
// };

// it("Should add the two numbers together", () => {
//   expect(
//     addTwoNumbers({
//       first: 2,
//       second: 4,
//     }),
//   ).toEqual(8);

//   // expect(
//   //   addTwoNumbers({
//   //     first: 10,
//   //     second: 20,
//   //   }),
//   // ).toEqual(30);
// });


interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 2,
    firstName: 'Katya',
    lastName: 'Sitko',
    role: 'super-admin',
    posts: [
      {
      id: 1,
      title: 'hello my first post',
      }
    ],

  };
};

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
