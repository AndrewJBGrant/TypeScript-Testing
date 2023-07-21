// Imports
import { it, expect } from 'vitest';

// Tests
// describe('Renders main page correctly', async () => {
//     it('Should render the page correctly', async () => {
//         expect(true).toBeTruthy();
//     });
// });


interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 1,
  firstName: "Andy",
  lastName: "Grant",
  isAdmin: false
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});

const getUserFirstName = (user: User) => {
  return user.firstName;
};

it("Should get the user info", () => {
  expect(getUserFirstName(defaultUser)).toEqual("Andy");
});
