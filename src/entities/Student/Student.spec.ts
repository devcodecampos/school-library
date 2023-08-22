import { expect, test } from "vitest";
import { Student } from "./Student";

test("create an student", () => {
  const student = new Student(
    {
      name: "Matheus Campos",
    },
    { studentClass: "backend", registrationId: "back-20" }
  );

  expect(student).toBeInstanceOf(Student);
  expect(student.name).toEqual("Matheus Campos");
  expect(student.studentClass).toEqual("backend");
  expect(student.registrationId).toEqual("back-20");
});