import { expect, test } from "vitest";
import { Student } from "../Student/Student";
import { Teacher } from "./Teacher";

test("create an teacher", () => {
  const student = new Student(
    {
      name: "Matheus Campos",
    },
    { studentClass: "backend", registrationId: "back-20" }
  );

  const teacher = new Teacher(
    {
      name: "Joel",
    },
    { students: [student] }
  );

  expect(teacher).toBeInstanceOf(Teacher);
  expect(teacher.name).toEqual("Joel");
  expect(teacher.students).toEqual([student]);
});