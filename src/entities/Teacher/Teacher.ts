import { Student } from "../Student/Student";
import { User, UserProps } from "../User/User";

interface TeacherProps {
  students: Student[];
}

export class Teacher extends User {
  private _teacherProps: TeacherProps;

  constructor(userProps: UserProps, teacherProps: TeacherProps) {
    super(userProps);
    this._teacherProps = teacherProps;
  }

  get students(): Student[] {
    return this._teacherProps.students;
  }

  set students(students: Student[]) {
    this._teacherProps.students = students;
  }
}