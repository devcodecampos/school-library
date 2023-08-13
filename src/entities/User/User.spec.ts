import { expect, test } from "vitest";
import { User } from "./User";

test("create an user", () => {
  const user = new User({
    id: "fap-20",
    name: "Matheus Campos",
  });

  expect(user).toBeInstanceOf(User);
  expect(user.id).toEqual("fap-20");
  expect(user.name).toEqual("Matheus Campos");
});