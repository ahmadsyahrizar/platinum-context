import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignIn from "..";
import AuthProvider from "../../../../context/auth";
import UserProvider from "../../../../context/user";
import userEvent from "@testing-library/user-event";

const Setup = (
  <AuthProvider>
    <UserProvider>
      <SignIn />
    </UserProvider>
  </AuthProvider>
);

describe("SignIn Components", () => {
  test("renders component correctly", () => {
    render(Setup);

    const signInWelcomeText = screen.getByText(/welcome back/i);

    expect(signInWelcomeText).toBeVisible(); // sm kaya jest
  });

  test.todo("test 3");
  test.todo("test 4");
  test.todo("test 5");
  test.todo("test 6");
});
