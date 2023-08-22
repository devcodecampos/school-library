import { expect, test } from "vitest";
import { User } from "./User";

test("create an user", () => {
  const user = new User({
    name: "Matheus Campos",
  });

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual("Matheus Campos");
});