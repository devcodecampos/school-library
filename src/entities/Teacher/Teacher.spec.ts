import { expect, test } from "vitest";
import { Student } from "../Student/Student";
import { Teacher } from "./Teacher";

test("create an teacher", () => {
  const student = new Student(
    {
      id: "fap-20",
      name: "Matheus Campos",
    },
    { studentClass: "backend", registrationId: "back-20" }
  );

  const teacher = new Teacher(
    {
      id: "fap-30",
      name: "Joel",
    },
    { students: [student] }
  );

  expect(teacher).toBeInstanceOf(Teacher);
  expect(teacher.id).toEqual("fap-30");
  expect(teacher.name).toEqual("Joel");
  expect(teacher.students).toEqual([student]);
});